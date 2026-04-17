import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { addToCart } from "./Redux/appSlice";
import { addToWishlist } from "./Redux/WishlisteSlice";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useSelector((state) => state.search.query);
  const wishlist = useSelector((state) => state.wishlist.items);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [toast, setToast] = useState(null);

  const prefix = (text, length = 100) => {
    if (!text) return "";
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  useEffect(() => {
    axios
      .get("https://sandbox.mockerito.com/ecommerce/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchSearch = product.title
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchCategory && matchSearch;
  });

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
        <FadeLoader color="#2563eb" />
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500 dark:text-red-400">
        Error: {error}
      </h1>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 bg-white dark:bg-zinc-900 text-black dark:text-white">

      {/* TOAST */}
      {toast && (
        <div className="fixed top-5 right-5 bg-white dark:bg-zinc-800 shadow-xl px-5 py-3 rounded-xl border-l-4 border-green-500 z-50">
          {toast}
        </div>
      )}

      {/* CATEGORY */}
      <div className="mb-10 flex justify-start">
        <div className="flex items-center gap-3 bg-white dark:bg-zinc-800 px-5 py-3 rounded-2xl shadow border dark:border-zinc-700">
          <label className="text-gray-600 dark:text-gray-300 font-medium">
            Category:
          </label>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-full border bg-gray-50 dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {filteredProducts.map((product) => {
          const discountedPrice = (product.price * 0.8).toFixed(2);
          const isFav = wishlist.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="group bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-2xl shadow-md overflow-hidden
              transition hover:shadow-xl hover:-translate-y-1"
            >

              {/* IMAGE */}
              <div className="relative h-52 flex items-center justify-center bg-blue-50 dark:bg-zinc-700 overflow-hidden">

                <img
                  src={product.image}
                  className="h-36 object-contain group-hover:scale-110 transition duration-300"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                  opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0
                  transition duration-300">

                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white dark:bg-zinc-900 px-6 py-2 rounded-full text-sm font-semibold
                    shadow-lg border dark:border-zinc-600 hover:bg-blue-600 hover:text-white transition">
                    View Details
                  </button>

                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-2">

                <h2 className="text-sm font-semibold line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {prefix(product.description)}
                </p>

                <span className="text-xs text-blue-500">
                  {product.category}
                </span>

                <div className="flex justify-between items-center">

                  <div className="flex gap-2">
                    <span className="line-through text-gray-400 text-sm">
                      ${product.price}
                    </span>
                    <span className="font-bold text-blue-600">
                      ${discountedPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      dispatch(addToWishlist(product));
                      showToast("Added to wishlist ❤️");
                    }}
                    className={`transition hover:scale-125 ${
                      isFav ? "text-red-500" : "text-gray-400 dark:text-gray-300"
                    }`}
                  >
                    <Heart size={20} />
                  </button>
                </div>

                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        ...product,
                        price: discountedPrice,
                        quantity: 1,
                      })
                    );
                    showToast("Added to cart 🛒");
                  }}
                  className="w-full mt-2 py-2 bg-blue-600 text-white rounded-lg
                  hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;