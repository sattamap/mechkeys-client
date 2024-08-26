import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGetCartQuery, useUpdateProductMutation, useRemoveFromCartMutation, usePlaceOrderMutation } from '@/redux/api/api';
import Swal from 'sweetalert2';


interface CartItem {
    product: {
      _id: string;
      name: string;
      price: number;
      quantity: number;
    };
    quantity: number;
  }
  

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 }; // Extract totalPrice from location state with a fallback
  const [paymentMethod, setPaymentMethod] = useState<'CashOnDelivery' | 'Stripe' | ''>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { data: cartItems } = useGetCartQuery({});
  const [placeOrder] = usePlaceOrderMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  useEffect(() => {
    if (!location.state) {
      console.error('totalPrice is not provided. Redirecting to cart.');
      navigate('/cart'); // Redirect to cart if totalPrice is missing
    }
  }, [location.state, navigate]);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      if (!paymentMethod) return; // Ensure a payment method is selected

      if (paymentMethod === 'Stripe') {
        Swal.fire('Error', 'This payment method is temporarily unavailable. Please choose another.', 'error');
        return;
      }

      // Construct the order payload
      const orderPayload = {
        name,
        email,
        phone,
        address,
        paymentMethod,
        totalPrice,
        items: cartItems?.map((item:CartItem) => ({
          productId: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        }))
      };

      console.log('Order Payload:', orderPayload); // Add this line

      // Place order logic
      const orderResult = await placeOrder(orderPayload).unwrap();
      console.log('Order placed successfully:', orderResult);

      // Update product quantities
      if (cartItems) {
        for (const item of cartItems) {
          await updateProduct({
            id: item.product._id,
            quantity: item.product.quantity - item.quantity
          }).unwrap();
          Swal.fire("Success", "Your Order has been placed successfully", "success");
          // Optionally, remove item from cart
          await removeFromCart(item.product._id).unwrap();
        }
      }
     
      // Redirect to success page or another confirmation page
      navigate('/success');
    } catch (error) {
      console.error('Failed to place order:', error);
      Swal.fire('Error', 'Failed to place order. Please try again.', 'error');
    }
  };

  const handlePaymentMethodChange = (method: 'CashOnDelivery' | 'Stripe') => {
    if (method === 'Stripe') {
      Swal.fire('Error', 'This payment method is temporarily unavailable. Please choose another.', 'error');
    } else {
      setPaymentMethod((prevMethod) => (prevMethod === method ? '' : method));
    }
  };

  return (
    <div className="w-2/3 p-6 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <p>Total amount: ${totalPrice.toFixed(2)}</p>
      <form onSubmit={handlePlaceOrder}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="address">
            Delivery Address
          </label>
          <textarea
            id="address"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Choose Payment Method:</p>
          <Button
            className={`mr-4 ${paymentMethod === 'CashOnDelivery' ? 'bg-blue-500 text-white' : 'bg-slate-400'}`}
            onClick={() => handlePaymentMethodChange('CashOnDelivery')}
            type="button"
          >
            Cash on Delivery
          </Button>
          <Button
            className={`mr-4 ${paymentMethod === 'Stripe' ? 'bg-blue-500 text-white' : 'bg-slate-400'}`}
            onClick={() => handlePaymentMethodChange('Stripe')}
            type="button"
          >
            Stripe
          </Button>
        </div>
        <Button
          type="submit"
          disabled={!paymentMethod}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${!paymentMethod && 'opacity-50 cursor-not-allowed'}`}
        >
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
