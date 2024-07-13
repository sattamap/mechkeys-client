import MainLayout from "@/components/layouts/MainLayout";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import Products from "@/pages/Products/Products";
import Success from "@/pages/Success/Success";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "products",
          element: <Products></Products>,
        },
        {
          path: "/product/:id",
          element: <ProductDetails></ProductDetails>,
        },
        {
          path: "carts",
          element: <Cart></Cart>,
        },
        {
          path: "checkout",
          element:<Checkout></Checkout> ,
        },
        {
          path: "success",
          element:<Success></Success> ,
        },
    ]

  },
]);

export default router;