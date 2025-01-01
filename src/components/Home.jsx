/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link className="text-center hover:text-cyan-600" to={"/dashboard"}>
      Go Home
    </Link>
  );
};

export default Home;
