
import AccordionComponent from "@/components/HomeComponents/Accordion";
import Featured from "@/components/HomeComponents/Featured";
import Hero from "@/components/HomeComponents/Hero";
import ServiceAdvertisement from "@/components/HomeComponents/ServiceAdvertisement";
import Testimonials from "@/components/HomeComponents/Testimonials";


const Home = () => {




    return (
        <div>
            <Hero/>
            <ServiceAdvertisement/>
            <Featured></Featured>
            <AccordionComponent/>
            <Testimonials/>
        </div>
    );
};

export default Home;