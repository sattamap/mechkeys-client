import React, { useState } from "react";
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

  const handleAddToCart = async () => {
    if (product?.quantity > 0) {
      try {
        await addToCart({ productId: product._id, quantity: 1 }).unwrap();
        dispatch(addItem({ productId: product._id, quantity: 1 })); // Update the Redux state
        setError(null);
        Swal.fire("Success", "Product added to cart", "success");
      } catch (err) {
        setError("Failed to add product to cart");
        Swal.fire("Error", "Failed to add product to cart", "error");
      }
    } else {
      setError("Product is out of stock");
      Swal.fire("Error", "Product is out of stock", "error");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      {product ? (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.brand}</CardDescription>
          </CardHeader>
          <div className="h-48 bg-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover h-full w-full"
            />
          </div>
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
            <p>{product.description}</p>
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
        </Card>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
