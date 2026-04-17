import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-900 text-gray-700 dark:text-gray-300 pt-14 pb-6 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            🛍️ Luma Store
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-6">
            Your premier destination for fashion, electronics, home goods,
            and beauty products.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5 text-gray-500 dark:text-gray-400">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-blue-500 cursor-pointer transition" />
          </div>
        </div>

        {/* CATEGORY */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-4 relative w-fit
          after:block after:h-[2px] after:bg-blue-500 after:mt-1 after:w-10">
            Shop By Category
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              "Electronics",
              "Fashion",
              "Home & Living",
              "Beauty & Health",
              "Sports & Outdoors",
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-600 transition flex items-center gap-2"
              >
                <span className="text-blue-400">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-4 relative w-fit
          after:block after:h-[2px] after:bg-blue-500 after:mt-1 after:w-10">
            Customer Service
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              "Contact Us",
              "FAQ",
              "Shipping Policy",
              "Return Policy",
              "Privacy Policy",
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-600 transition flex items-center gap-2"
              >
                <span className="text-blue-400">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT + NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-4 relative w-fit
          after:block after:h-[2px] after:bg-blue-500 after:mt-1 after:w-10">
            Contact Info
          </h3>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Izmir, Turkey</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+90 555 000 0000</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>luma@gmail.com</span>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Newsletter
            </h4>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Subscribe for exclusive deals.
            </p>

            <div className="flex items-center bg-white dark:bg-zinc-800 rounded-full overflow-hidden shadow-sm border dark:border-zinc-700">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full outline-none text-sm bg-transparent text-black dark:text-white"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 border-t border-blue-200 dark:border-zinc-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        ©️ 2026 Luma Store. All rights reserved. made with love 
      </div>
    </footer>
  );
};

export default Footer;