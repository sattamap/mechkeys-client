import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-1" />
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-8 px-4 text-sm sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6" />
              <span className="font-semibold">MechKeys</span>
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link to="/blog">Blog</Link>
            <Link to="/documentation">Documentation</Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/support">Support</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Social</h3>
            <Link to="/twitter">Twitter</Link>
            <Link to="/facebook">Facebook</Link>
            <Link to="/linkedin">LinkedIn</Link>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-600 dark:text-gray-400">
          Copyright© 2024. MEchKeys. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

type IconProps = React.SVGProps<SVGSVGElement>;

const MountainIcon: React.FC<IconProps> = (props) => {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

export default Footer;
