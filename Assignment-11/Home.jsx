import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the React Router App!</h1>
      <p className="mb-6">This app demonstrates multi-page routing in React.</p>
      <div className="space-x-4">
        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded">
          About
        </Link>
        <Link to="/users" className="bg-green-500 text-white px-4 py-2 rounded">
          Users
        </Link>
      </div>
    </div>
  );
};

export default Home;
