import React from "react";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4 text-primary">
        Page Under Construction
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        We're working hard to bring this page to you. Stay tuned!
      </p>
      <Link to="/" className="text-cyan-500 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default ComingSoon;
