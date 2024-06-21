import React from "react";
import Navbar from "../src/components/Navbar";
import "./App.css";
import { DetailCard } from "../src/components/Detail-Card/detail-card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import Signup from "../src/components/Signup";
import Login  from "../src/components/Login";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          
          <Route path="/brewer/:id" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}