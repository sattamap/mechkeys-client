import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery, useAddToCartMutation } from "@/redux/api/api";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/features/cartSlice";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(id as string);
  const [addToCart] = useAddToCartMutation();
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [isProductAdded, setIsProductAdded] = useState(false); // Track if product is added to cart

  const handleAddToCart = async () => {
    if (product?.quantity > 0) {
      try {
        await addToCart({ productId: product._id, quantity: 1 }).unwrap();
        dispatch(addItem({ productId: product._id, quantity: 1 })); // Update the Redux state
        setError(null);
        Swal.fire("Success", "Product added to cart", "success");
        setIsProductAdded(true); // Mark product as added
      } catch (err) {
        setError("Failed to add product to cart");
        Swal.fire("Error", "Failed to add product to cart", "error");
      }
    } else {
      setError("Product is out of stock");
      Swal.fire("Error", "Product is out of stock", "error");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isProductAdded) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isProductAdded]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      {product ? (
        <Card className="shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-10">
            <div className="flex-1 order-2 md:order-1">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">${product.price}</p>
                <div className="text-yellow-500">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <span key={i} className="inline-block">
                      &#9733;
                    </span>
                  ))}
                  {Array.from({ length: 5 - product.rating }, (_, i) => (
                    <span key={i} className="inline-block text-gray-300">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p>
                  <span>Available Products : </span>
                  {product.quantity}
                </p>
                <p
                  className={`text-sm font-semibold mt-2 ${
                    product.quantity > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </p>
                <p className="text-justify">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className={`${product.quantity === 0 ? "disabled" : ""}`}
                  onClick={handleAddToCart}
                  disabled={product.quantity === 0}
                >
                  Add to Cart
                </Button>
                {error && <p className="text-red-500 mt-2 ">{error}</p>}
              </CardFooter>
            </div>

            <div className=" flex-1 order-1 md:order-2 p-4">
              <img
                src={product.image}
                alt={product.name}
                className=" object-cover border rounded-lg"
              />
            </div>
          </div>
        </Card>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
