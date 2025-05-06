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
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/45 border-gray-300">
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
            className={`text-base font-semibold transition-all hover:text-[#3aaffe] hover:scale-105 duration-300 ${
              pathname === "/" ? "text-[#3aaffe]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/learn-chinese"
            className={`text-base font-semibold transition-all hover:text-[#3aaffe] hover:scale-105 duration-300 ${
              pathname === "/learn-chinese" ? "text-[#3aaffe]" : ""
            }`}
          >
            Learn
          </Link>
          <Link
            href="/blog"
            className={`text-base font-semibold transition-all hover:text-[#3aaffe] hover:scale-105 duration-300 ${
              pathname === "/blog" ? "text-[#3aaffe]" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className={`text-base font-semibold transition-all hover:text-[#3aaffe] hover:scale-105 duration-300 ${
              pathname === "/about-us" ? "text-[#3aaffe]" : ""
            }`}
          >
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Get An App
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/"
                className={`text-lg font-semibold ${
                  pathname === "/" ? "text-[#3aaffe]" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/learn-chinese"
                className={`text-lg font-semibold ${
                  pathname === "/learn-chinese" ? "text-[#3aaffe]" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/blog"
                className={`text-lg font-semibold ${
                  pathname === "/blog" ? "text-[#3aaffe]" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about-us"
                className={`text-lg font-semibold ${
                  pathname === "/about-us" ? "text-[#3aaffe]" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" size="sm">
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
