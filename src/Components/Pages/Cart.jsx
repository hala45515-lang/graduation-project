import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../Redux/appSlice";
import { FaTrash, FaStar, FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.app.products || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">

      {/* 🔙 BACK */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white mb-4"
      >
        <FaArrowLeft />
        <span>Continue Shopping</span>
      </button>

      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Shopping Cart
      </h1>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <FaShoppingCart className="text-6xl text-gray-300 dark:text-gray-600 mb-4" />
          
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6">
            Looks like you haven’t added anything yet.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* PRODUCTS */}
          <div className="lg:col-span-2 space-y-5">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm flex justify-between items-center hover:shadow-md transition"
              >
                {/* LEFT */}
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div>
                    <div className="flex gap-2 mb-1">
                      <span className="text-xs bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300 px-2 py-1 rounded-full">
                        Beauty
                      </span>
                      <span className="text-xs bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full">
                        -18% OFF
                      </span>
                    </div>

                    <h2 className="font-semibold text-lg text-black dark:text-white">
                      {item.title}
                    </h2>

                    <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      <span className="text-gray-500 dark:text-gray-400 ml-2 text-xs">
                        (3 reviews)
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6">

                  {/* QTY */}
                  <div className="flex items-center border dark:border-gray-600 rounded-lg overflow-hidden">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      −
                    </button>

                    <span className="px-3 text-black dark:text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>

                  {/* PRICE */}
                  <div className="font-semibold w-20 text-right text-black dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-gray-400 hover:text-red-500 text-lg transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md h-fit">
            <h2 className="text-xl font-bold mb-5 text-black dark:text-white">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-2">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>

            <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-4">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6 text-black dark:text-white">
              <span>Total</span>
              <span className="text-blue-600">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;