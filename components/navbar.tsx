"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { useShopInfo } from "@/hooks/use-shop-info"

export function Navbar() {
  const shop = useShopInfo()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/95 backdrop-blur-md border-b border-border"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <span className="font-display text-xl lg:text-2xl font-semibold text-foreground tracking-tight">
              {shop.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors"
            >
              Book Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium tracking-wide uppercase transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-lg font-medium tracking-wide uppercase text-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
