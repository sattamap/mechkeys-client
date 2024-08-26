import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import kbd4 from '@/assets/images/kbd-4.jpg';
import kbd2 from '@/assets/images/kbd-2.jpg';
import kbd3 from '@/assets/images/kbd-3.jpg';
import kbd5 from '@/assets/images/kbd-5.png';

interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Gaming Keyboards',
    description: 'High-performance keyboards for gamers.',
    imageUrl: kbd4,
  },
  {
    id: 2,
    name: 'Custom Keyboards',
    description: 'Build your own custom keyboard.',
    imageUrl: kbd2,
  },
  {
    id: 3,
    name: 'Programming Keyboards',
    description: 'Designed for efficiency and comfort.',
    imageUrl: kbd3,
  },
  {
    id: 4,
    name: 'Accessories',
    description: 'Keycaps, switches, and more.',
    imageUrl: kbd5,
  },
];

const ProductCategories: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-dancing font-extrabold md:text-4xl text-center text-gray-800 mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="bg-white rounded-lg shadow-md">
              <CardHeader>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <CardTitle className="text-xl font-bold text-gray-800">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
