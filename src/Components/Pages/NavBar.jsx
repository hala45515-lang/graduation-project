import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchQuary } from "../Redux/SearchSlice";
import Swal from "sweetalert2";
import { getAuth, signOut } from "firebase/auth";
import { LogOutUser } from "../Redux/appSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const wishlistCount = useSelector(
    (state) => state.wishlist.items.length
  );

  const products = useSelector((state) => state.app.products || []);
  const userInfo = useSelector((state) => state.app.userInfo);
  const query = useSelector((state) => state.search.query);

const handleLogout = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Logout'
  }).then((result) => {
    if (result.isConfirmed) {
      const auth = getAuth();
      signOut(auth).then(() => {
        dispatch(LogOutUser());
        Swal.fire(
          'Logged out!',
          'You have been logged out.',
          'success'
        )
      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message
        })
      });
    }
  })
}

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 shadow-md transition-colors duration-300 relative">

      {/* TOP BAR */}
      <div className="container mx-auto flex justify-between items-center h-[70px] px-4">

        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Luma<span className="text-gray-500 dark:text-gray-300">Shop</span>
        </h2>

        {/* DESKTOP */}
        <ul className="hidden md:flex gap-10 items-center text-gray-700 dark:text-gray-200">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              <Link to={link.path} className="pb-1 relative">
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}

          <li className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => dispatch(setSearchQuary(e.target.value))}
              placeholder="Search..."
              className="border border-blue-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 rounded-xl py-2 px-4 pl-10 text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-4 h-4" />
          </li>
        </ul>

        {/* ICONS DESKTOP */}
        <div className="hidden md:flex gap-5 items-center">

          <Link to="/favorites" className="relative">
            <Heart className="hover:text-red-500 cursor-pointer" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {wishlistCount}
              </span>
            )}
          </Link>

         

          <Link to="/cart" className="relative">
            <ShoppingCart />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {products.length}
              </span>
            )}
          </Link>



{/* USER ICON */}
            {userInfo ? (
              <>
              {userInfo.userName}
              <button
  onClick={handleLogout}
  className="flex items-center gap-2 px-4 py-2 rounded-lg 
             text-red-500 border border-red-200 
             hover:bg-red-500 hover:text-white 
             transition-all duration-300 shadow-sm hover:shadow-md"
  title="Logout"
>
  <LogOut size={14} />
  <span>Logout</span>
</button>
              </>
            ):(<>
            
            <Link to = "/signin">
            <User />
            </Link>
            </>)}
         



          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="md:hidden cursor-pointer hover:scale-110 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
{/* OVERLAY */}
{isMenuOpen && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    onClick={() => setIsMenuOpen(false)}
  />
)}

{/* SIDEBAR MOBILE */}
<div
  className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-zinc-900 z-50 shadow-xl transform transition-transform duration-300
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>

  {/* HEADER */}
  <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
    <h3 className="text-lg font-semibold">Menu</h3>
    <X
      className="cursor-pointer hover:text-red-500"
      onClick={() => setIsMenuOpen(false)}
    />
  </div>

  {/* SEARCH */}
  <div className="p-4 border-b dark:border-zinc-700 relative">
    <input
      type="text"
      value={query}
      onChange={(e) => dispatch(setSearchQuary(e.target.value))}
      placeholder="Search..."
      className="w-full border border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-xl py-2 px-4 pl-10 text-sm focus:outline-none"
    />
    <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
  </div>

  {/* LINKS */}
  <div className="flex flex-col p-4 gap-3 border-b dark:border-zinc-700">
    {navLinks.map((link, i) => (
      <Link
        key={i}
        to={link.path}
        onClick={() => setIsMenuOpen(false)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
      >
        {link.name}
      </Link>
    ))}
  </div>

  {/* CART + FAVORITES */}
  <div className="p-4 flex flex-col gap-3 border-b dark:border-zinc-700">

    <Link
      to="/cart"
      onClick={() => setIsMenuOpen(false)}
      className="flex justify-between items-center bg-blue-100 dark:bg-zinc-800 p-3 rounded-xl"
    >
      <div className="flex items-center gap-2">
        <ShoppingCart className="text-blue-600" />
        <span>My Cart</span>
      </div>
      <span>{products.length}</span>
    </Link>

    <Link
      to="/favorites"
      onClick={() => setIsMenuOpen(false)}
      className="flex justify-between items-center bg-red-100 dark:bg-zinc-800 p-3 rounded-xl"
    >
      <div className="flex items-center gap-2">
        <Heart className="text-red-500" />
        <span>Favorites</span>
      </div>
      <span>{wishlistCount}</span>
    </Link>

  </div>

  {/* DARK MODE */}
  <div className="p-4 border-b dark:border-zinc-700">
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center gap-2 w-full bg-gray-100 dark:bg-zinc-800 p-3 rounded-xl"
    >
      {darkMode ? <Sun /> : <Moon />}
      Toggle Mode
    </button>
  </div>

  {/* LOGIN / LOGOUT */}
  <div className="p-4">

    {userInfo ? (
      <button
        onClick={() => {
          handleLogout();
          setIsMenuOpen(false);
        }}
        className="flex items-center justify-center gap-2 w-full bg-red-100 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition"
      >
        <LogOut size={16} />
        Logout
      </button>
    ) : (
      <Link
        to="/signin"
        onClick={() => setIsMenuOpen(false)}
        className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white p-3 rounded-xl"
      >
        <User size={16} />
        Sign In
      </Link>
    )}

  </div>
</div>

    </div>
  );
};

export default NavBar;