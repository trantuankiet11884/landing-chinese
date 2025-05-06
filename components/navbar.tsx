"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/45 border-cyan-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={"/logo.png"}
              alt="logo"
              height={40}
              width={40}
              className="object-cover h-20 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-base font-semibold transition-all hover:text-cyan-600 hover:scale-105 duration-300 ${
              pathname === "/" ? "text-cyan-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/learn-chinese"
            className={`text-base font-semibold transition-all hover:text-cyan-600 hover:scale-105 duration-300 ${
              pathname === "/learn-chinese" ? "text-cyan-600" : ""
            }`}
          >
            Learn
          </Link>
          <Link
            href="/blog"
            className={`text-base font-semibold transition-all hover:text-cyan-600 hover:scale-105 duration-300 ${
              pathname === "/blog" ? "text-cyan-600" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className={`text-base font-semibold transition-all hover:text-cyan-600 hover:scale-105 duration-300 ${
              pathname === "/about-us" ? "text-cyan-600" : ""
            }`}
          >
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
          >
            Get An App
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-cyan-700 hover:bg-cyan-50"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-cyan-200">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/"
                className={`text-lg font-semibold ${
                  pathname === "/" ? "text-cyan-600" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/learn-chinese"
                className={`text-lg font-semibold ${
                  pathname === "/learn-chinese" ? "text-cyan-600" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/blog"
                className={`text-lg font-semibold ${
                  pathname === "/blog" ? "text-cyan-600" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about-us"
                className={`text-lg font-semibold ${
                  pathname === "/about-us" ? "text-cyan-600" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                >
                  Get An App
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
