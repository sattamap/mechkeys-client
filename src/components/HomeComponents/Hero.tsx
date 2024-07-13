import React from 'react';
import { Link } from 'react-router-dom';
import kbd from '../../assets/images/kbd-3.jpg';
import { Button } from '@/components/ui/button';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${kbd})` }}
    >
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-48">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-6xl md:text-5xl lg:text-6xl font-extrabold text-black p-4 animate-fade-in-up">
            Welcome to Our Platform
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-black font-bold animate-fade-in-up delay-1s">
            We provide the best service for you
          </p>
          <Link to="products">
            <Button
              variant="default"
              size="lg"
              className="bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 animate-fade-in-up delay-2s"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
