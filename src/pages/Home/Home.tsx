
import AccordionComponent from "@/components/HomeComponents/Accordion";
import Featured from "@/components/HomeComponents/Featured";
import Hero from "@/components/HomeComponents/Hero";
import ProductCategories from "@/components/HomeComponents/ProductCategories";
import ServiceAdvertisement from "@/components/HomeComponents/ServiceAdvertisement";
import Testimonials from "@/components/HomeComponents/Testimonials";


const Home = () => {




    return (
        <div>
            <Hero/>
            <ServiceAdvertisement/>
            <Featured></Featured>
            <ProductCategories></ProductCategories>
            <AccordionComponent/>
            <Testimonials/>
        </div>
    );
};

export default Home;