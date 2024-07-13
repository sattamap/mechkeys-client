import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-8 text-justify">
          Welcome to our e-commerce site dedicated to mechanical keyboards! Our mission is to provide keyboard enthusiasts with the best selection of high-quality mechanical keyboards and accessories. Whether you're a gamer, a programmer, or someone who loves the tactile feel of mechanical keys, we have something for you.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-lg text-justify mb-8">
            Our team is passionate about mechanical keyboards and is committed to delivering exceptional customer service. We carefully curate our collection to ensure that every product meets our high standards of quality and performance.
          </p>
          <p className="text-lg text-justify mb-8">
            Thank you for choosing us as your go-to source for mechanical keyboards. We look forward to serving you and helping you find the perfect keyboard for your needs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8"
        >
          <Button className="bg-white text-purple-500 font-bold py-2 px-4 rounded-full">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
