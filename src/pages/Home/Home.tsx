
import AccordionComponent from "@/components/HomeComponents/Accordion";
import Hero from "@/components/HomeComponents/Hero";
import Testimonials from "@/components/HomeComponents/Testimonials";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AccordionComponent></AccordionComponent>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;