import React from 'react';
import { Link } from 'react-router-dom';
import kbd from '../../assets/images/kbd-3.jpg'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${kbd})` }}
    >
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-48">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-6xl md:text-5xl lg:text-6xl font-extrabold   text-black p-4">
            Welcome to Our Platform
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-black font-bold">We provide the best service for you</p>
          <Link
            to="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
