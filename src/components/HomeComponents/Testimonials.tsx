import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-slate-200 rounded-xl p-6 md:p-10 md:m-20 m-6">
      <div className="container bg-white p-8 md:p-16 rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-4 text-2xl font-dancing font-bold md:text-4xl text-center">
            What Our Customers Say
          </h2>
          <p className="mb-8 md:mb-12 max-w-xs md:max-w-md text-center text-gray-500 dark:text-gray-400">
            Hear from our satisfied customers about their experience with our product.
          </p>
          <Carousel className="w-full max-w-md md:max-w-3xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 p-4 md:p-12">
                  <blockquote className="text-center text-lg md:text-xl font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    &quot;The customer service I received was exceptional. The support team went above and beyond to address my concerns.&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">Jules Winnfield</div>
                    <div className="text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 p-4 md:p-12">
                  <blockquote className="text-center text-lg md:text-xl font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    &quot;I was hesitant at first, but the onboarding process was so smooth and the platform has been a game-changer for my business.&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">Mia Wallace</div>
                    <div className="text-gray-500 dark:text-gray-400">Founder, Pied Piper</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 p-4 md:p-12">
                  <blockquote className="text-center text-lg md:text-xl font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    &quot;The features are top-notch, and the team is always responsive and helpful. I couldn&apos;t be happier with my decision to use this product.&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">Vincent Vega</div>
                    <div className="text-gray-500 dark:text-gray-400">CTO, Stark Industries</div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-1 md:p-2 text-black shadow-md transition-colors hover:bg-white dark:bg-gray-950/50 dark:text-gray-200 dark:hover:bg-gray-950">
              <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-1 md:p-2 text-black shadow-md transition-colors hover:bg-white dark:bg-gray-950/50 dark:text-gray-200 dark:hover:bg-gray-950">
              <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

export default Testimonials;
