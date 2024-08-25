import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();

  return (
    <header className="fixed z-10 flex items-center w-full h-16 gap-4 px-4 border-b bg-background md:px-6">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <Link
          className={`${location.pathname === "/dash" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
          to={`/dash`}
        >
          Dashboard
        </Link>
        <Link
          className={`${location.pathname === "/highlight" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
          to={`/highlight`}
        >
          Highlight
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              LOGO
              <span className="sr-only">Acme Inc</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Orders
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Products
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Customers
            </a>
            <a href="#" className="hover:text-foreground">
              Settings
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
