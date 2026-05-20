"use client";

import { motion } from "framer-motion";
import { Download, Menu } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-background/62 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#accueil" className="font-display text-sm font-bold tracking-[0.22em] text-white">
          BYK<span className="text-cyan">.AI</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="/cv-bel-khsiry-yassine.pdf" download>
              <Download className="h-4 w-4" />
              CV
            </a>
          </Button>
          <Button variant="secondary" size="icon" className="lg:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
