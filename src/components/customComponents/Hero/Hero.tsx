

// components/customComponents/Hero/Hero.tsx
"use client"
import React, { useState, useEffect } from "react";
import {
  NavigationMenu, 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#hero", sectionId: "hero" },
  { name: "About", href: "#language-model", sectionId: "language-model" },
  { name: "Services", href: "#collaborator", sectionId: "collaborator" },
  { name: "Contact", href: "#tortoise", sectionId: "tortoise" },
  { name: "Contributor", href: "#collaborator", sectionId: "collaborator" },
  { name: "Vision", href: "#infrastructure", sectionId: "infrastructure" },
  { name: "Infrastructure", href: "#india-ai", sectionId: "india-ai" },
];

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <NavigationMenuLink
    href={href}
    className={`
      relative text-sm font-medium px-3 py-2
      transition-all duration-300 ease-in-out
      ${isActive ? 'text-white' : 'text-gray-200'}
      after:content-['']
      after:absolute
      after:w-0
      after:h-0.5
      after:bg-white
      after:left-0
      after:bottom-0
      after:transition-all
      after:duration-300
      ${isActive ? 'after:w-full' : 'hover:after:w-full'}
    `}
  >
    {children}
  </NavigationMenuLink>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navigationItems.map(item => {
        const element = document.getElementById(item.sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.sectionId,
            distance: Math.abs(rect.top),
            inView: rect.top <= 100 && rect.bottom >= 100
          };
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.reduce((acc, section) => {
        if (!acc || (section?.inView && section?.distance < acc.distance)) {
          return section;
        }
        return acc;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-[#07038d] backdrop-blur-md shadow-lg py-2' 
          : 'bg-[#07038d] py-4'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex-shrink-0 w-24 transition-transform duration-300 hover:scale-105">
            <img 
              className="w-16 h-12 object-contain" 
              src="/assets/logo.webp" 
              alt="Logo"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavLink 
                      href={item.href}
                      isActive={activeSection === item.sectionId}
                    >
                      {item.name}
                    </NavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden w-24 flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-white/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            overflow-hidden
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  block px-3 py-2 text-base font-medium
                  transition-all duration-300
                  hover:bg-white/10 hover:text-white rounded-md
                  ${activeSection === item.sectionId ? 'text-white bg-white/10' : 'text-gray-200'}
                `}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <div id="hero" className="relative w-full ">
      <div className="mb-20"> < Navbar  /> </div>
      <div className="relative w-full h-screen">
        <img
          src="/assets/mainhero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="eager"
          
        />
      </div>
    </div>
  );
};

export default Hero;