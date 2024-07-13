import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '@/redux/api/api';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  _id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  rating: number;
  quantity: number;
  description: string;
  stock: string;
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('');
  const { data: products = [], isLoading } = useGetProductsQuery({
    search,
    brand,
    minPrice,
    maxPrice,
    sort,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => setBrand(e.target.value);
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setMaxPrice(e.target.value);
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value);
  const handleClearFilters = () => {
    setSearch('');
    setBrand('');
    setMinPrice('');
    setMaxPrice('');
    setSort('');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearchChange}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={handleBrandChange}
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="border p-2 rounded mr-2"
        />
        <select value={sort} onChange={handleSortChange} className="border p-2 rounded mr-2">
          <option value="">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
        <Button onClick={handleClearFilters} className="bg-red-500 text-white p-2 rounded">
          Clear Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <Card key={product._id} className="shadow-lg">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.brand}</CardDescription>
            </CardHeader>
            <div className="h-48 bg-gray-200">
              <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
            </div>
            <CardContent>
              <p className="text-lg font-semibold">${product.price}</p>
              <div className="text-yellow-500">
                {Array.from({ length: product.rating }, (_, i) => (
                  <span key={i} className="inline-block">&#9733;</span>
                ))}
                {Array.from({ length: 5 - product.rating }, (_, i) => (
                  <span key={i} className="inline-block text-gray-300">&#9733;</span>
                ))}
              </div>
              <p className={`text-sm font-semibold mt-2 ${product.stock === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
                {product.stock}
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => navigate(`/product/${product._id}`)}>
                Show Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
