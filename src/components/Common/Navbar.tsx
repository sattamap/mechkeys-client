import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
//import { useSelector } from "react-redux";
//import { RootState } from "@/store"; // Adjust the import path as necessary

interface IconProps {
  className?: string;
}

const Navbar: React.FC = () => {
  //const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6">
           <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/" className="flex items-center">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <div className="grid gap-2 py-6">
              <NavLink to="/" className="flex w-full items-center py-2 text-lg font-semibold">
                Home
              </NavLink>
              <NavLink to="/products" className="flex w-full items-center py-2 text-lg font-semibold">
                Products
              </NavLink>
              <NavLink to="/about-us" className="flex w-full items-center py-2 text-lg font-semibold">
                About Us
              </NavLink>
              <NavLink to="/contact-us" className="flex w-full items-center py-2 text-lg font-semibold">
                Contact Us
              </NavLink>
              <NavLink to="/dashboard" className="flex w-full items-center py-2 text-lg font-semibold">
                Dashboard
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>
      <Link to="/" className="ml-4 flex items-center">
        <MountainIcon className="h-6 w-6" />
        <span className="ml-2 text-xl font-bold">MechKeys</span>
      </Link>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-100 text-gray-900" : "bg-white hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                Home
              </NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-100 text-gray-900" : "bg-white hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                Products
              </NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-100 text-gray-900" : "bg-white hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                About Us
              </NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-100 text-gray-900" : "bg-white hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-100 text-gray-900" : "bg-white hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center">
        <NavLink to="/cart" className="relative flex items-center">
          <CartIcon className="h-6 w-6" />
          {/* <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {cartItemCount}
          </span> */}
        </NavLink>
     
      </div>
    </header>
  );
};

const MenuIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const MountainIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const CartIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.18-6.39H6" />
  </svg>
);

export default Navbar;
