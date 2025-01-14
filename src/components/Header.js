import Link from "next/link";
import Button from "./ui/Button";
import { cn } from "@/utils/merge";

export const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        "flex justify-between items-center w-full px-6 py-4 bg-white shadow-md",
        className
      )}
      {...props}
    >
      <HeaderLogo />
      <HeaderNav />
      <HeaderActions />
    </header>
  );
};

const HeaderLogo = () => {
  return (
    <Link href="/"
       className="text-2xl font-bold text-primary">
        MyPlatform
     
    </Link>
  );
};

const HeaderNav = () => {
  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}
               className="text-gray-700 hover:text-primary">{link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HeaderActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost" className="text-primary">
        Login
      </Button>
      <Button variant="outline" className="text-primary border-primary hover:bg-gray-100">
        Sign Up
      </Button>
    </div>
  );
};
