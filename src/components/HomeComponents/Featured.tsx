import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '@/redux/api/api';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
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
  image: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
}

const Featured: React.FC = () => {
  const { data: products } = useGetProductsQuery({});
  const featuredProducts = products?.filter((product: Product) => product.rating > 3).slice(-6).reverse();

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl text-center text-primary">Featured Products</h2>
        <Swiper 
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pause on mouse enter
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper mt-20"
        >
          {featuredProducts?.map((product: Product) => (
            <SwiperSlide key={product._id}>
              <Card className="bg-white p-6 rounded-lg shadow-md">
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <CardTitle className="text-lg font-bold mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mb-1">Brand: {product.brand}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-1">Available Quantity: {product.quantity}</p>
                  <p className="text-sm text-gray-500 mb-1">Price: ${product.price}</p>
                  <p className="text-sm text-gray-500 mb-1">Rating: {Array.from({ length: product.rating }, () => '⭐')}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/product/${product._id}`} className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded hover:from-purple-600 hover:to-pink-600">
                    See Details
                  </Link>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-12">
          <Link to="/products">
            <Button className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded hover:from-purple-600 hover:to-pink-600">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
