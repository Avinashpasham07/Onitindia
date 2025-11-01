import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Domain from "./components/Domains";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Task_see from "./components/task_seeker";
import Task_Performers from "./components/Task_Performers";
import WhyChooseUs from "./components/WhyChooseUs";
import KnowAboutUs from "./components/KnowAboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

// Home component with all sections
function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-20"><Landingpage /></section>
      <section id="knowaboutus" className="scroll-mt-20"><KnowAboutUs /></section>
      <section id="tasksee" className="scroll-mt-20"><Task_see /></section>
      <section id="domain" className="scroll-mt-20"><Domain /></section>
      <section id="whychooseus" className="scroll-mt-20"><WhyChooseUs /></section>
      <section id="marquee" className="scroll-mt-20"><Marquee /></section>
      <section id="testimonials" className="scroll-mt-20"><Testimonials /></section>
      <section id="footer" className="scroll-mt-20"><Footer /></section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-100 overflow-hidden">
        {/* Navbar always visible */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task-performers" element={<Task_Performers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
