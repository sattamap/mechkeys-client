import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import icon from '@/assets/icon.png';
import { useGetProductsQuery } from '@/redux/api/api';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const { refetch } = useGetProductsQuery({}); // Assuming you have a refetch method available here

  // Check if the current path matches the route
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Refetch products if a new product has been added
    if (state?.productAdded) {
      refetch();
    }
  }, [state, refetch]);
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Sidebar hidden on small screens */}
      <aside className="fixed inset-y-0 left-0 z-10 w-24 flex-col border-r bg-background hidden bg-emerald-300 sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/dashboard/product-list"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive('/dashboard/product-list')
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  <ProductListIcon className="h-5 w-5" />
                  <span className="sr-only">Product List</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Product List</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/dashboard/add-product"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive('/dashboard/add-product')
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  <AddProductIcon className="h-5 w-5" />
                  <span className="sr-only">Add Product</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Add Product</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    isActive('/')
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  <HomeIcon className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-gray-300">
        {/* Navbar */}
        <header className="sticky top-0 z-20 md:z-0 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex items-center gap-4 ">
            {/* Dropdown menu for small screens */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/product-list">
                    <ProductListIcon className="mr-2 h-4 w-4" />
                    <span>Product List</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/add-product">
                    <AddProductIcon className="mr-2 h-4 w-4" />
                    <span>Add Product</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="text-sm md:text-2xl font-bold ml-6 md:ml-10 ">Dashboard</div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {/* Profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                  <img
                    src={icon}
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/contact-us">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about-us">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1  bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ProductListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      <path d="M4 6h16M4 12h16m-7 6h7" />
      <circle cx="4" cy="6" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="4" cy="18" r="1" />
    </svg>
  );
}

function AddProductIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      <path d="M12 5v14m-7-7h14" />
    </svg>
  );
}
