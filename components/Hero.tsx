'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import OrderModal from './OrderModal'

export default function Hero() {
  return (
    <section 
      className="relative min-h-[75vh] flex items-center justify-center text-center overflow-hidden"
      role="banner"
      aria-label="Главная секция"
    >
      {/* Фоновое изображение с параллаксом */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/amkodor.webp"
          alt="Экскаватор в работе"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent"
          style={{ background: 'linear-gradient(120deg, rgba(26,35,126,0.82) 0%, rgba(255,214,0,0.25) 100%)' }}
        />
        <div className="absolute inset-0 bg-[rgba(44,32,7,0.55)]" />
      </div>

      {/* Контент */}
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 hero-title">
            Аренда экскаватора в г.Лида и Лидском районе
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
        >
          Профессиональные услуги спецтехники для любых задач. Быстро, аккуратно, выгодно!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <OrderModal trigger={
            <button className="btn-gradient text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl">
              <span className="mr-2">📞</span> Заказать услугу
            </button>
          } />
        </motion.div>
      </div>
    </section>
  )
}

