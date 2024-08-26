// UpdateProductModal.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUpdateProductMutation } from '@/redux/api/api';

interface UpdateProductModalProps {
    product: {
      _id: string;
      name: string;
      price: number;
      brand: string;
      quantity: number; // Added quantity field
    };
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

interface IFormInput {
  name: string;
  price: number;
  brand: string;
  quantity: number; // Added quantity field
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({ product, isOpen, onClose, onSuccess }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    defaultValues: {
      name: product.name,
      price: product.price,
      brand: product.brand,
      quantity: product.quantity, // Added quantity default value
    }
  });

  const [updateProduct] = useUpdateProductMutation();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateProduct({ id: product._id, ...data })
      .unwrap()
      .then(() => {
        if (onSuccess) onSuccess();
        reset();
        onClose();
      })
      .catch((err) => {
        console.error('Failed to update product:', err);
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Modify the product details and click "Save Changes" to update.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input {...register("name", { required: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" {...register("price", { required: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            {errors.price && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <input {...register("brand", { required: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            {errors.brand && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input type="number" {...register("quantity", { required: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            {errors.quantity && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductModal;
