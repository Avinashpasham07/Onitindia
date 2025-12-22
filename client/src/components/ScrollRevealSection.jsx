import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    Zap,
    Shield,
    Users,
    CheckCircle
} from "lucide-react";
import realTasksImage from "../assets/realtask.png";

import verifiedImage from "../assets/securepayment.png";
import inter from "../assets/interaction.png"

// Content adapted for the "OnIT Campus" intro, but in the requested tabbed format
const features = [
    {
        id: "real-tasks",
        icon: <Zap className="w-5 h-5" />,
        title: "Real Tasks",
        heading: "Real-world experience, not simulations",
        desc: "Forget dummy data. Work on actual production tasks and internships that build a portfolio employers actually respect.",
        image: realTasksImage
    },
    {
        id: "industry",
        icon: <Users className="w-5 h-5" />,
        title: "Industry Connect",
        heading: "Direct pipeline to top tech giants",
        desc: "Startups and major companies like Google and Amazon post needs directly here. Skip the resume black hole.",
        image: inter
    },
    {
        id: "verified",
        icon: <Shield className="w-5 h-5" />,
        title: "Verified & Secure",
        heading: "Guaranteed payments & clear briefs",
        desc: "Every task is vetted. Payments are held in escrow. You focus on coding, we handle the security and admin.",
        image: verifiedImage
    }
];

const ScrollRevealSection = () => {
    const [activeTab, setActiveTab] = useState("real-tasks");
    const activeContent = features.find(c => c.id === activeTab) || features[0];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((current) => {
                const currentIndex = features.findIndex(c => c.id === current);
                const nextIndex = (currentIndex + 1) % features.length;
                return features[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <section id="introduction" className="bg-[#f3f4f6] min-h-screen sm:h-screen flex flex-col justify-center py-8 sm:py-10 px-4 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">

                {/* Section Heading */}
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-2 sm:mb-3 leading-tight">
                        Introducing <span className="text-green-600">OnIT Campus</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Learn-by-doing. Earn-as-you-grow.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {features.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveTab(feature.id)}
                            className={`
                                flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border
                                ${activeTab === feature.id
                                    ? "bg-green-600 text-white border-green-600 shadow-md scale-105"
                                    : "bg-white text-slate-500 border-slate-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200"}
                            `}
                        >
                            <span className="scale-75 sm:scale-100">{feature.icon}</span>
                            <span className="uppercase">{feature.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content Display */}
                <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl bg-white group border border-slate-200">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeContent.id}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={activeContent.image}
                                alt={activeContent.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Floating Text Card */}
                    <motion.div
                        key={activeContent.id + "-card"}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-8 md:left-8 md:right-auto md:w-[400px] bg-[#f3f4f6] backdrop-blur-xl p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl z-10"
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3 text-green-600">
                            <span className="scale-75 sm:scale-100">{activeContent.icon}</span>
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 leading-tight">
                            {activeContent.heading}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                            {activeContent.desc}
                        </p>

                        <div className="flex items-center text-[10px] sm:text-xs font-bold text-green-700 uppercase tracking-wider">
                            Learn More <CheckCircle className="w-3 h-3 ml-1.5 sm:ml-2" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ScrollRevealSection;
