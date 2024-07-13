import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/redux/hook";
import { baseApi } from "@/redux/api/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  price: z
    .string()
    .refine((val) => !isNaN(Number(val)), { message: "Price must be a number" })
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: "Price must be a positive number." }),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  quantity: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Quantity must be a number",
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 1, { message: "Quantity must be at least 1." }),
  rating: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Rating must be a number",
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 1 && val <= 5, {
      message: "Rating must be between 1 and 5.",
    }),
  brand: z.string().min(2, { message: "Brand must be at least 2 characters." }),
  image: z.any(),
});

const AddProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      quantity: 0,
      rating: 0,
      brand: "",
      image: null,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const formData = new FormData();
      if (data.image) {
        formData.append("image", data.image); // Append the single file
      }

      const uploadResponse = await dispatch(
        baseApi.endpoints.uploadImage.initiate(formData)
      ).unwrap();
      console.log(uploadResponse);
      if (uploadResponse && uploadResponse.data && uploadResponse.data.url) {
        const imageUrl = uploadResponse.data.url;
        const productData = { ...data, image: imageUrl };

        await dispatch(
          baseApi.endpoints.createProduct.initiate(productData)
        ).unwrap();
        form.reset(); // Clear the form

        // Display sweet alert
        Swal.fire({
          title: "Success!",
          text: "Product added successfully",
          icon: "success",
          confirmButtonText: "OK",
        });

        navigate("/dashboard"); // Redirect to the dashboard after successful submission
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Failed to add product:", error);

      // Display error sweet alert
      Swal.fire({
        title: "Error!",
        text: "Failed to add product",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="lg:flex-1">
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Product Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="lg:flex-1">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="lg:flex-1">
                    <FormLabel>Available Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Quantity" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem className="lg:flex-1">
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Rating" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem className="lg:flex-1">
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Brand" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="lg:flex-1">
                    <FormLabel>Product Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files) {
                            field.onChange(e.target.files[0]); // Update to a single file
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Add Product</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddProductForm;
