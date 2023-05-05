import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Task from "../components/Task";
import { useTodoContext } from "@/context/todoContext";

const Home = () => {
  
  return (
    <>
      <Navbar />
      <Task />
    </>
  );
};

export default Home;
