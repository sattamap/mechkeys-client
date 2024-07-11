import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-slate-200 rounded-xl p-10 m-8 md:m-16">
      <div className="text-center md:text-left">
        <p className='text-4xl font-bold text-center'>Have a question ? <br />We are here to help.</p>
        <p className='text-base font-medium text-center md:text-left mt-4'>Check out the full FAQ page or reach out to our customer support team.</p>
        <div className="hidden md:flex items-center justify-center mt-4">
          <div className="h-4 w-6 md:w-12 lg:w-24 bg-black"></div>
          <div className="w-0 h-0 
              border-t-4 border-t-transparent
              border-b-4 border-b-transparent
              border-l-4 border-l-black
              md:border-t-[12px] md:border-b-[12px] md:border-l-[12px]
              lg:border-t-[16px] lg:border-b-[16px] lg:border-l-[16px]"></div>
        </div>
      </div>
      <div className='bg-white p-6 md:p-10 rounded-xl w-full md:max-w-2xl'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why Choose Mechanical Keyboards?</AccordionTrigger>
            <AccordionContent>
              Mechanical keyboards offer a variety of benefits over standard membrane keyboards. They provide a more tactile and responsive typing experience, with each key press giving a satisfying feel and sound. They are also highly durable and customizable, allowing users to swap out keycaps and switches to suit their preferences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are the different types of switches?</AccordionTrigger>
            <AccordionContent>
              Mechanical keyboards come with various types of switches, such as linear, tactile, and clicky. Each type offers a different feel and sound, catering to different typing and gaming preferences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I customize my mechanical keyboard?</AccordionTrigger>
            <AccordionContent>
              Customizing a mechanical keyboard can involve changing keycaps, switches, and even the case. Many enthusiasts also add custom lighting, artisan keycaps, and other unique modifications to personalize their keyboards.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are mechanical keyboards more durable?</AccordionTrigger>
            <AccordionContent>
              Yes, mechanical keyboards are generally more durable than membrane keyboards. They are designed to withstand millions of key presses, making them a long-lasting choice for heavy typists and gamers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionComponent;
