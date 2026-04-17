import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/appSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  useEffect(() => {
    axios
      .get(`https://sandbox.mockerito.com/ecommerce/api/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
        <FadeLoader color="#2563eb" />
      </div>
    );
  }

  const discountedPrice = (product.price * 0.8).toFixed(2);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white px-4 py-8 transition-colors duration-300">

      {/* TOAST */}
      {toast && (
        <div className="fixed top-5 right-5 bg-white dark:bg-zinc-800 shadow-xl px-5 py-3 rounded-xl border-l-4 border-green-500 z-50">
          {toast}
        </div>
      )}

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 mb-6 transition"
      >
        <ArrowLeft size={18} />
        Continue Shopping
      </button>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="bg-gray-50 dark:bg-zinc-700 rounded-2xl flex items-center justify-center p-6">
          <img
            src={product.image}
            className="w-52 sm:w-64 md:w-80 lg:w-96 object-contain hover:scale-105 transition"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-4">

          <span className="text-blue-500 font-medium">
            {product.category}
          </span>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {product.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            ⭐⭐⭐⭐☆
            <span className="text-gray-500 dark:text-gray-300">
              (3 reviews)
            </span>
          </div>

          {/* PRICE */}
          <div className="flex flex-wrap items-center gap-3 mt-2">

            <span className="text-gray-400 line-through">
              ${product.price}
            </span>

            <span className="text-2xl md:text-3xl font-bold text-blue-600">
              ${discountedPrice}
            </span>

            <span className="text-green-600 text-sm font-medium">
              Save ${(product.price * 0.2).toFixed(2)}
            </span>

          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2 text-sm md:text-base">
            {product.description}
          </p>

          {/* STOCK */}
          <div className="text-green-600 font-medium mt-2">
            ✔ In Stock
          </div>

          {/* ADD TO CART */}
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
            className="mt-6 py-3 rounded-xl text-white font-semibold
            bg-gradient-to-r from-blue-500 to-blue-700
            hover:scale-105 transition"
          >
            Add To Cart
          </button>

          {/* EXTRA INFO */}
          <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-6">

            <div>
              🚚 <p>Free Shipping</p>
              <span className="text-xs">2 weeks</span>
            </div>

            <div>
              🔄 <p>Easy Returns</p>
              <span className="text-xs">1 year</span>
            </div>

            <div>
              🔒 <p>Secure</p>
              <span className="text-xs">100%</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;