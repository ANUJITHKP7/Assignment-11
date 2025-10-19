import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-3">About This App</h2>
      <p className="mb-4">This application is built using React Router to navigate between multiple pages.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
};

export default About;
