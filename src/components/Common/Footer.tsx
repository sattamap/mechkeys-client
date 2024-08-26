import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-1" />
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-8 px-4 text-sm sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-12" />
            <p className="ml-2 text-xl font-bold text-primary">
              Mech<span className="text-cyan-500">Keys</span>
            </p>
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link to="/about-us">About</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link to="/blog">Blog</Link>
            <Link to="/documentation">Documentation</Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/contact-us">Support</Link>
          </div>
          <div className="grid gap-0">
            <h3 className="font-semibold">Social</h3>
            <Link to="https://www.facebook.com/sattam.chakma/">Facebook</Link>
            <Link to="https://www.instagram.com/sattamchakma/">Instagram</Link>
            <Link to="https://www.linkedin.com/in/sattam-chakma/">LinkedIn</Link>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-600 dark:text-gray-400">
          Copyright© 2024. MEchKeys. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};



export default Footer;
