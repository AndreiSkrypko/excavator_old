'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import OrderModal from './OrderModal'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-xl' : 'bg-gradient-to-r from-main-yellow to-main-brown-light'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Логотип */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="Аренда экскаватора"
                width={140}
                height={100}
                className="h-20 md:h-24 w-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
                priority
              />
            </Link>
          </motion.div>

          {/* Рабочее время */}
          <div className="hidden md:block text-center">
            <span className="font-semibold text-main-brown-dark">
              Работаем <span className="text-main-orange font-bold">24/7</span>
            </span>
            <span className="text-main-brown text-sm ml-2">Без выходных и праздников</span>
          </div>

          {/* Контакты и соцсети */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="tel:+375297849544"
              className="btn-orange flex items-center gap-2 px-4 py-2 text-sm md:text-base"
            >
              <span>📞</span>
              <span className="hidden sm:inline">+375 29 784-95-44</span>
              <span className="sm:hidden">Звонок</span>
            </a>

            <a
              href="viber://chat?number=+375297849544"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link viber"
              aria-label="Viber"
            >
              <span>💜</span>
            </a>

            <a
              href="https://t.me/sashaamkador"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link telegram"
              aria-label="Telegram"
            >
              <span>✈️</span>
            </a>

            <a
              href="https://instagram.com/strelkov9606?igsh=MTJtNHIyd2Nyajk3cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
              aria-label="Instagram"
            >
              <span>📷</span>
            </a>

            <div className="md:hidden">
              <OrderModal trigger={
                <button className="btn-orange text-sm px-4 py-2">
                  Заказать
                </button>
              } />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

