import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust the import path
import { Badge } from "../ui/badge";
import logo from "../../assets/logo.png";

interface IconProps {
  className?: string;
}

const Navbar: React.FC = () => {
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="flex h-24 w-full items-center px-4 md:px-6 sticky top-0 z-30 bg-white shadow-md">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" className="flex items-center">
            {/* <MountainIcon className="h-6 w-6 text-primary" />
            <span className="sr-only">MechKeys</span> */}
              <img src={logo} alt="logo"  className="w-4/5"/>
          </Link>
          <div className="grid gap-2 py-6">
            {['Home', 'Products', 'Carts', 'About Us', 'Contact Us', 'Dashboard'].map((page) => (
                <NavLink
                key={page}
                to={page === 'home' ? '/' : `/${page.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex w-full items-center py-2 text-lg font-semibold text-primary"
              >
                {page}
              </NavLink>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/" className="ml-4 flex items-center">
      <img src={logo} alt="logo"  className="w-4/5"/>
        {/* <MountainIcon className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold text-primary">MechKeys</span> */}
      </Link>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {['Home', 'Products', 'Carts', 'About Us', 'Contact Us', 'Dashboard'].map((page) => (
              <NavigationMenuLink asChild key={page}>
                <NavLink
                  to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) =>
                    `group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-gray-100 text-primary"
                        : "bg-white text-dark hover:bg-gray-100 hover:text-primary"
                    }`
                  }
                >
                  {page}
                </NavLink>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center mr-2 lg:mr-6">
        <NavLink to="/carts" className="relative inline-block">
          <CartIcon className="h-6 w-6 text-primary" />
          <Badge className="absolute -top-4 -right-3 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-medium">
            {cartItemCount}
          </Badge>
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

// const MountainIcon: React.FC<IconProps> = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//   </svg>
// );

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
