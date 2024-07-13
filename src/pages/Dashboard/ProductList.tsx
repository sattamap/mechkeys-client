import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import UpdateProductModal from '@/components/DashboardComponents/ProductListComponents/UpdateProductModal';
import ConfirmationModal from '@/components/DashboardComponents/ProductListComponents/ConfirmationModal';
import { useGetProductsQuery, useDeleteProductMutation,  } from '@/redux/api/api';

interface Product {
  _id: string;
  name: string;
  price: number;
  brand: string;
  // Add other properties if necessary
}

const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  //const [updateProduct] = useUpdateProductMutation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleUpdate = (product: Product) => {
    console.log('Selected product for update:', product); // Debugging log
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (product: Product) => {
    console.log('Selected product for delete:', product); // Debugging log
    setSelectedProduct(product);
    setIsConfirmationModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedProduct) {
      console.log('Deleting product with id:', selectedProduct._id); // Debugging log
      deleteProduct(selectedProduct._id).then(() => {
        setIsConfirmationModalOpen(false);
      });
    } else {
      console.error('No product selected for deletion'); // Error log
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: Product) => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdate(product)}>Update</Button>
                <Button variant="destructive" onClick={() => handleDelete(product)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isUpdateModalOpen && selectedProduct && (
        <UpdateProductModal
          product={selectedProduct}
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
        />
      )}
      {isConfirmationModalOpen && selectedProduct && (
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={() => setIsConfirmationModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default ProductList;
