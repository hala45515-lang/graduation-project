import React from "react";
import { FaTruck, FaShippingFast, FaUndo } from "react-icons/fa";

const Features = () => {
  const cards = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      text: "On orders over 1000 TRY",
      color: "bg-indigo-100 dark:bg-indigo-900",
      iconColor: "text-indigo-600 dark:text-indigo-300",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      text: "Delivery within 1–3 days",
      color: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      text: "Within 14 Days",
      color: "bg-pink-100 dark:bg-pink-900",
      iconColor: "text-pink-600 dark:text-pink-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-900 transition-colors duration-300">

      {cards.map((item, i) => (
        <div
          key={i}
          className="group bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-2xl p-8 text-center shadow-md
          hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >

          {/* ICON */}
          <div
            className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-5 ${item.color}`}
          >
            <span className={`text-2xl ${item.iconColor}`}>
              {item.icon}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            {item.title}
          </h3>

          {/* TEXT */}
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {item.text}
          </p>

        </div>
      ))}
    </div>
  );
};

export default Features;