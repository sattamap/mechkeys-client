import React from 'react';

const ServiceAdvertisement: React.FC = () => {
  return (
    <section className="mt-20 md:mx-20 rounded-xl py-4 md:py-8 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl md:text-4xl font-dancing font-bold text-center text-gray-800">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <ServiceCard
            title="Free Shipping"
            description="Enjoy free shipping on all orders, because we value your satisfaction."
            gradient="from-blue-500 to-blue-300"
            animation="animate-fade-in-up"
          />
          <ServiceCard
            title="Quick Payment"
            description="Experience quick and hassle-free payment options for seamless shopping."
            gradient="from-green-500 to-green-300"
            animation="animate-fade-in-up delay-100"
          />
          <ServiceCard
            title="Big Cashback"
            description="Earn big cashback rewards with every purchase, making your shopping more rewarding."
            gradient="from-orange-500 to-orange-300"
            animation="animate-fade-in-up delay-200"
          />
          <ServiceCard
            title="24/7 Service"
            description="Get round-the-clock support from our dedicated team, ensuring assistance whenever you need it."
            gradient="from-purple-500 to-purple-300"
            animation="animate-fade-in-up delay-300"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  gradient: string;
  animation: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, gradient, animation }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md bg-gradient-to-r ${gradient} ${animation} flex-1`}>
      <h3 className="text-xl font-dancing font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-black mb-4">{description}</p>
    </div>
  );
};

export default ServiceAdvertisement;
