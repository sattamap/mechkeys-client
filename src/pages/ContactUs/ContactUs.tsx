import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Swal from 'sweetalert2';

const ContactUs: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      Swal.fire({
        icon: 'success',
        title: 'Thanks for sending message',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        if (formRef.current) {
          formRef.current.reset();
        }
      });
    };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg mb-8">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-lg mx-auto"
        >
          <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
            <div>
              <label className="block text-left mb-2">Name</label>
              <Input type="text" placeholder="Your Name" className="w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-left mb-2">Email</label>
              <Input type="email" placeholder="Your Email" className="w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-left mb-2">Message</label>
              <Textarea placeholder="Your Message" className="w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows={4} />
            </div>
            <Button type="submit" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full">
              Send Message
            </Button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Contact Information</h2>
          <p className="text-lg mb-2">Email: contact@mechkeys.com</p>
          <p className="text-lg mb-2">Phone: +88018-58271527</p>
          <p className="text-lg mb-2">Address: 23/7 Agrabad, Computer City, Shop No. 12345</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
