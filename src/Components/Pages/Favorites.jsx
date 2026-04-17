import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../Redux/WishlisteSlice";
import { Heart, ShoppingCart } from "lucide-react";
import { addToCart } from "../Redux/appSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white px-4 py-14 transition-colors duration-300">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-pink-500">Favorites</span> ❤️
        </h1>

        <p className="text-gray-500 dark:text-gray-300 mt-3">
          All your saved products in one place
        </p>

        {/* ADD ALL TO CART */}
        {wishlist.length > 0 && (
          <button
            onClick={() => {
              wishlist.forEach((item) =>
                dispatch(addToCart({ ...item, quantity: 1 }))
              );
            }}
            className="mt-6 flex items-center gap-2 mx-auto bg-blue-600 text-white px-5 py-2 rounded-full
            hover:bg-blue-700 active:scale-95 transition"
          >
            <ShoppingCart size={18} />
            Add all to cart
          </button>
        )}
      </div>

      {/* EMPTY STATE */}
      {wishlist.length === 0 ? (
        <div className="text-center mt-20 animate-pulse">
          <div className="text-6xl">💔</div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
            No favorites yet... start adding products ❤️
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {wishlist.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-3xl shadow-md overflow-hidden p-5
              transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.04]"
            >

              {/* IMAGE */}
              <div className="h-44 flex justify-center items-center bg-pink-50 dark:bg-zinc-700 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  className="h-32 object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-sm font-semibold line-clamp-2 mt-4">
                {product.title}
              </h2>

              {/* PRICE */}
              <p className="text-red-600 font-bold mt-2 text-lg">
                ${product.price}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4">

                {/* REMOVE */}
                <button
                  onClick={() =>
                    dispatch(removeFromWishlist(product.id))
                  }
                  className="flex-1 flex items-center justify-center gap-2
                  bg-red-500 text-white py-2 rounded-xl
                  hover:bg-red-600 active:scale-95 transition"
                >
                  <Heart size={18} />
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Favorites;