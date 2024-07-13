import React from 'react';

const ServiceAdvertisement: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-r from-blue-400 to-green-400">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Free Shipping"
            description="Enjoy free shipping on all orders, because we value your satisfaction."
            gradient="from-blue-600 to-blue-400"
            animation="animate-fade-in-up"
          />
          <ServiceCard
            title="Quick Payment"
            description="Experience quick and hassle-free payment options for seamless shopping."
            gradient="from-purple-600 to-purple-400"
            animation="animate-fade-in-up delay-100"
          />
          <ServiceCard
            title="Big Cashback"
            description="Earn big cashback rewards with every purchase, making your shopping more rewarding."
            gradient="from-yellow-400 to-yellow-300"
            animation="animate-fade-in-up delay-200"
          />
          <ServiceCard
            title="24/7 Service"
            description="Get round-the-clock support from our dedicated team, ensuring assistance whenever you need it."
            gradient="from-red-500 to-red-400"
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
    <div className={`p-6 rounded-lg shadow-md ${gradient} ${animation}`}>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white mb-4">{description}</p>
    </div>
  );
};

export default ServiceAdvertisement;
