import React from "react";
import { Link } from "react-router-dom";
import kbd from "../../assets/images/kbd-3.jpg";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
// import Lottie from "lottie-react";
// import typing from "../../../typing.json";

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
          <div className="flex gap-1 justify-center text-xl md:text-2xl lg:text-3xl text-black font-bold">
            <p className="font-dancing">We provide</p>
            <div className="font-dancing">
              <Typewriter
                options={{
                  strings: [
                    "the best product for you",
                    "the best experience for you.",
                    "the best service for you",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* <div className="sm:disabled md:w-16 md:h-16">
                <Lottie animationData={typing} loop={true} />
            </div>  */}
          </div>
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
