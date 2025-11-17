import React from "react";
import {
  FiUsers,
  FiShoppingCart,
  FiCpu,
  FiShield,
  FiHeadphones,
  FiCheckCircle,
} from "react-icons/fi";

const features = [
 {
    icon: <FiShoppingCart size={38} className="text-[#1a1a1a]" />,
    title: "Zero Commission",
    desc: "Earn more with OnIt. No middlemen, no hidden cuts — your effort, your full reward.",
  },
  {
    icon: <FiHeadphones size={38} className="text-[#1a1a1a]" />,
    title: "24/7 Support",
    desc: "Our support team is always available to assist with issues, disputes, or guidance — anytime, anywhere.",
  },
  {
      icon: <FiCheckCircle size={38} className="text-[#1a1a1a]" />,
      title: "Verified Community",
      desc: "Every seeker and performer is verified for authenticity.",
    },
  {
    icon: <FiShield size={38} className="text-[#1a1a1a]" />,
    title: "Safe & Secure",
    desc: "End-to-end encryption and secure payments ensure peace of mind for all users.",
  },
  {
    icon: <FiUsers size={44} className="text-[#1a1a1a]" />,
    title: "Real Connections",
    desc: "Connecting people who need help with those ready to act — creating a trusted, helpful community.",
  },
  {
    icon: <FiCpu size={38} className="text-[#1a1a1a]" />,
    title: "Smart Matching",
    desc: "AI-powered task recommendations connect seekers and performers efficiently — saving time and effort.",
  },
];

export default function WhyChooseOnIt() {
  return (
    <section className="mb-10 flex flex-col justify-center items-center px-6 sm:px-10 lg:px-20 ">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-zinc-800 mb-10">
        Why Choose{" "}
        <span className="text-black">
          On<span className="text-green-500">IT</span>
        </span>
      </h2>

      {/* Bento Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-6 
          gap-2
          w-full 
          max-w-7xl
          min-h-[80vh]
        "
      >
        {/* Big Card - Left */}
        <div
          className="
            col-span-1 sm:col-span-2 lg:col-span-3 
            rounded-3xl p-4 sm:p-10 flex flex-col justify-center
            bg-gradient-to-br from-sky-100 via-indigo-100 to-indigo-200
            border border-gray-100
          "
        >
          <div className="mb-1">{features[0].icon}</div>
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
            {features[0].title}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {features[0].desc}
          </p>
        </div>

        {/* Top-right 3 small cards */}
        {features.slice(1, 4).map((feat, i) => (
          <div
            key={i}
            className="
              col-span-1 sm:col-span-1 lg:col-span-1 
              rounded-3xl p-6 sm:p-7 flex flex-col justify-center
              bg-gradient-to-br from-sky-100 via-indigo-100 to-indigo-200
              border border-gray-100
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300
            "
          >
            <div className="mb-3">{feat.icon}</div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              {feat.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}

        {/* Bottom-left card */}
        <div
          className="
            col-span-1 sm:col-span-2 lg:col-span-3 
            rounded-3xl p-8 sm:p-10 flex flex-col justify-center
            bg-gradient-to-br from-sky-100 via-indigo-100 to-indigo-200
            border border-gray-100
          "
        >
          <div className="mb-4">{features[5].icon}</div>
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
            {features[5].title}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {features[5].desc}
          </p>
        </div>

        {/* Bottom-right wide card */}
        <div
          className="
            col-span-1 sm:col-span-2 lg:col-span-3 
            rounded-3xl p-8 flex flex-col justify-center
            bg-gradient-to-br from-sky-100 via-indigo-100 to-indigo-200
            border border-gray-100
          "
        >
          <div className="mb-3">{features[4].icon}</div>
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
            {features[4].title}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {features[4].desc}
          </p>
        </div>
      </div>
    </section>
  );
}
