import MainLayout from "@/components/layouts/MainLayout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";

import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import Products from "@/pages/Products/Products";
import Success from "@/pages/Success/Success";

import { createBrowserRouter } from "react-router-dom";

import ProductList from "@/pages/Dashboard/ProductList";
import AddProduct from "@/pages/Dashboard/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "carts",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "product-list",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
