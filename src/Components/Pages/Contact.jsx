import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 💙");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white py-16 px-6 transition-colors duration-300">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
          We'd love to hear from you. Send us a message anytime 💬
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border-t-4 border-blue-500">
          <Phone className="mx-auto text-blue-500 w-10 h-10" />
          <h3 className="mt-3 font-semibold">Phone</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
            +90 555 123 456
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border-t-4 border-purple-500">
          <Mail className="mx-auto text-purple-500 w-10 h-10" />
          <h3 className="mt-3 font-semibold">Email</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
            support@lumashop.com
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border-t-4 border-pink-500">
          <MapPin className="mx-auto text-pink-500 w-10 h-10" />
          <h3 className="mt-3 font-semibold">Location</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
            Izmir, Turkey
          </p>
        </div>

      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto mt-20 bg-white dark:bg-zinc-800 p-6 md:p-10 rounded-3xl shadow-xl border dark:border-zinc-700">

        <h2 className="text-2xl font-bold text-center mb-6">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border dark:border-zinc-700 bg-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border dark:border-zinc-700 bg-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            className="border dark:border-zinc-700 bg-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl
            hover:bg-blue-700 active:scale-95 transition"
          >
            <Send size={18} />
            Send Message
          </button>

        </form>
      </div>

    </div>
  );
};

export default Contact;