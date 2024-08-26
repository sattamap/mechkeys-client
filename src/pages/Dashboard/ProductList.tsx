import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import UpdateProductModal from '@/components/DashboardComponents/ProductListComponents/UpdateProductModal';
import ConfirmationModal from '@/components/DashboardComponents/ProductListComponents/ConfirmationModal';
import { useGetProductsQuery, useDeleteProductMutation,  } from '@/redux/api/api';

interface Product {
  _id: string;
  name: string;
  quantity: number;
  stock: string;
  price: number;
  brand: string;
  // Add other properties if necessary
}

const ProductList: React.FC = () => {
  const { data: products, error, isLoading,refetch  } = useGetProductsQuery({});
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
      deleteProduct(selectedProduct._id).then(() => {
        refetch(); // Refetch the product list after deletion
        setIsConfirmationModalOpen(false);
      }).catch((error) => {
        console.error('Failed to delete product:', error); // Error log
      });
    } else {
      console.error('No product selected for deletion'); // Error log
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div >
      <Table className='w-5/6 mx-auto'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center text-base font-bold'>Sl. No.</TableHead>
            <TableHead className='text-center text-base font-bold'>Product Name</TableHead>
            <TableHead className='text-center text-base font-bold'>Available Items</TableHead>
            <TableHead className='text-center text-base font-bold'>Stock Status</TableHead>
            <TableHead className='text-center text-base font-bold'>Price</TableHead>
            <TableHead className='text-center text-base font-bold'>Brand</TableHead>
            <TableHead className='text-center text-base font-bold'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: Product,index: number) => (
            <TableRow key={product._id}>
              <TableCell className='text-center'>{index+1}</TableCell>
              <TableCell className='text-center'>{product.name}</TableCell>
              <TableCell className='text-center'>{product.quantity}</TableCell>
              <TableCell  className={
                product.stock === 'In Stock' ? 'text-green-500 text-center' : 'text-red-500 text-center'
              }>{product.stock}</TableCell>
              <TableCell className='text-center'>{product.price}</TableCell>
              <TableCell className='text-center'>{product.brand}</TableCell>
              <TableCell className='text-center'>
                <Button size="xs" className='mr-1 mb-1' onClick={() => handleUpdate(product)}>Update</Button>
                <Button size="xs" className='px-[11px]' variant="destructive" onClick={() => handleDelete(product)}>Delete</Button>
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
          onSuccess={() => refetch()}
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
