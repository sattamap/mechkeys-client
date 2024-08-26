import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetCartQuery, useUpdateCartMutation, useRemoveFromCartMutation } from '@/redux/api/api';
import { removeItem, updateQuantity } from '@/redux/features/cartSlice';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CartItem {
  _id: string;
  productId: string;
  quantity: number;
  product: {
    name: string;
    image: string;
    price: number;
    quantity: number;  // Add this to track available quantity
  };
}

const Cart: React.FC = () => {
  const { data: cartItems = [], isLoading, isError, refetch } = useGetCartQuery({});
  const [updateCart] = useUpdateCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleRemoveItem = async (productId: string) => {
    console.log(`Removing item with productId: ${productId}`);
    await removeFromCart(productId);
    dispatch(removeItem({ productId }));
    refetch();
  };

  const handleUpdateQuantity = async (productId: string, newQuantity: number, availableQuantity: number) => {
    console.log(`Updating item with productId: ${productId}, newQuantity: ${newQuantity}, availableQuantity: ${availableQuantity}`);
    if (newQuantity >= 1 && newQuantity <= availableQuantity) {
      try {
        console.log('Sending payload:', { productId, quantity: newQuantity });
        await updateCart({ productId, quantity: newQuantity });
        dispatch(updateQuantity({ productId, quantity: newQuantity }));
        refetch();
      } catch (error) {
        console.error('Failed to update cart item:', error);
      }
    } else if (newQuantity > availableQuantity) {
      alert('Cannot add more than available quantity in stock.');
    }
  };

  const totalPrice = cartItems.reduce((total: number, item: CartItem) => total + item.product.price * item.quantity, 0);

  // Filter out items that are out of stock
  const [cartItemsFiltered, setCartItemsFiltered] = useState<CartItem[]>([]);
  
  useEffect(() => {
    const filteredItems = cartItems.filter((item: CartItem) => item.product.quantity > 0);
    setCartItemsFiltered(filteredItems);
  }, [cartItems]);

  const allItemsInStock = cartItemsFiltered.length === cartItems.length;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading cart items.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItemsFiltered.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4">
            {cartItems.map((item: CartItem) => (
              <Card key={item._id} className="shadow-lg">
                <CardHeader>
                  <CardTitle>{item.product.name}</CardTitle>
                  {item.product.quantity === 0 && (
                    <span className="ml-2 text-red-500">Out of Stock</span>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <img src={item.product.image} alt={item.product.name} className="h-24 w-24 object-cover mr-4" />
                    <div>
                      <p className="text-lg font-semibold">${item.product.price}</p>
                      <div className="flex items-center">
                        <Button size='xs' onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1, item.product.quantity)}>-</Button>
                        <p className="mx-2">{item.quantity}</p>
                        <Button size='xs' onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1, item.product.quantity)}>+</Button>
                      </div>
                      <Button size='xs' onClick={() => handleRemoveItem(item.productId)} className="mt-2">Remove</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h3>
            {!allItemsInStock && (
              <p className="text-red-500">Please remove out of stock items before proceeding to checkout.</p>
            )}
            <Button 
              className="mt-4"
              onClick={() => navigate('/checkout',{ state: { totalPrice } })}
              disabled={!allItemsInStock}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
