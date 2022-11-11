import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/blog">blog</Link>
    </div>
  );
};

export default Home;
