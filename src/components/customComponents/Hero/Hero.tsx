"use client"
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 bg-opacity-0 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0 w-24">
            <img className="w-16 h-12 object-contain overflow-hidden" src="/assets/logo.webp" alt="Logo" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm text-white font-medium hover:font-bold hover:cursor-pointer">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm text-white font-medium hover:font-bold hover:cursor-pointer">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm text-white font-medium hover:font-bold hover:cursor-pointer">
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm text-white font-medium hover:font-bold hover:cursor-pointer">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm text-white font-medium hover:font-bold hover:cursor-pointer">
                  Contributor
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm text-white font-medium hover:font-bold hover:cursor-pointer">
                  Vision
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm text-white font-medium hover:font-bold hover:cursor-pointer">
                  Infrastructure      
                              </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button - with fixed width to balance logo */}
          <div className="md:hidden w-24 flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base text-white font-medium hover:font-bold"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base text-white font-medium hover:font-bold"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base text-white font-medium hover:font-bold"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base text-white font-medium hover:font-bold"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
export const Hero = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/mainhero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0" />
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};