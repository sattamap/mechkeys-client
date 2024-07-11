import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import AccordionComponent from "@/components/HomeComponents/Accordion";
import Hero from "@/components/HomeComponents/Hero";
import Testimonials from "@/components/HomeComponents/Testimonials";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AccordionComponent></AccordionComponent>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;