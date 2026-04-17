import React from "react";
import { Heart, ShoppingBag, Truck, ShieldCheck, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white py-16 px-6 transition-colors duration-300">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-600">LumaShop</span>
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
          A modern shopping experience built with love, speed, and simplicity.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center border-t-4 border-blue-500">
          <ShoppingBag className="mx-auto text-blue-500 w-10 h-10" />
          <h3 className="mt-3 font-semibold text-lg">Best Products</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            High quality selected items just for you.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center border-t-4 border-green-500">
          <Truck className="mx-auto text-green-500 w-10 h-10" />
          <h3 className="mt-3 font-semibold text-lg">Fast Delivery</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Quick shipping right to your door.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center border-t-4 border-purple-500">
          <ShieldCheck className="mx-auto text-purple-500 w-10 h-10" />
          <h3 className="mt-3 font-semibold text-lg">Secure Payments</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Your data is always safe and protected.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center border-t-4 border-pink-500">
          <Heart className="mx-auto text-pink-500 w-10 h-10" />
          <h3 className="mt-3 font-semibold text-lg">Made with Love</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Built with passion and care.
          </p>
        </div>
      </div>

      {/* STORY */}
      <div className="max-w-5xl mx-auto mt-20 bg-white dark:bg-zinc-800 p-8 md:p-10 rounded-3xl shadow-xl border dark:border-zinc-700">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>

        <p className="text-gray-600 dark:text-gray-300 leading-7">
          LumaShop started with a vision to create a simple, fast and beautiful
          shopping experience. We focus on user experience, modern design,
          and high quality products.
        </p>
      </div>

      {/* TESTIMONIALS */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* CARD */}
          {[
            {
              text: "Amazing shopping experience! Everything is smooth and fast.",
              name: "Sara M.",
            },
            {
              text: "Great products and very clean design. I love it!",
              name: "Ahmed K.",
            },
            {
              text: "Fast delivery and secure payment. Highly recommended.",
              name: "Lina T.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex gap-1 text-yellow-400 mb-3">
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                “{item.text}”
              </p>

              <p className="mt-4 font-semibold">{item.name}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default About;