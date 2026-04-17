import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Register from "./Components/Pages/Register";
import NavBar from "./Components/Pages/NavBar";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Favorites from "./Components/Pages/Favorites";
import ProductDetails from "./Components/Pages/ProductDetails";
import SignIn from "./Components/Pages/SignIn";



const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
        <Route path="/product/:id" element={<ProductDetails />} />
        </Route>

        
      
     
      <Route path ="/register" element={<Register />}></Route>
      <Route path ="/signin" element={<SignIn />}></Route>
      </Route>
    )
  );
  return (
    <div>
  
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
