'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

const links = [
  { href: '#que-ofrecemos', label: 'Servicios' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#quienes-somos', label: 'Nosotros' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openAsociateModal } = useModal();

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-15 h-15 md:w-18 md:h-18 relative top-[.33rem] md:top-2 
               transition-transform duration-300 ease-in-out 
               group-hover:scale-105"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg md:text-xl tracking-tight text-primary">
              MAR & SIERRAS
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-text-secondary hover:text-primary transition-colors group"
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </nav>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={openAsociateModal}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium text-text-on-primary bg-btn-primary hover:bg-btn-hover transition-colors shadow-sm cursor-pointer"
              >
                Asociate
              </button>
            </motion.div>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <motion.div whileTap={{ scale: 0.95 }}>
              <button
                onClick={openAsociateModal}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-medium text-text-on-primary bg-btn-primary hover:bg-btn-hover transition-colors cursor-pointer"
              >
                Asociate
              </button>
            </motion.div>
            <button
              onClick={() => setOpen(!open)}
              className="text-text-primary hover:text-primary transition-colors focus:outline-none p-1"
              aria-label="Menú"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-border bg-white"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}