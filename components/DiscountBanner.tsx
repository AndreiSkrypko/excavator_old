'use client'

import { motion } from 'framer-motion'

export default function DiscountBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-main-yellow-light to-main-yellow" aria-labelledby="discount-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-main-orange to-main-yellow rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div className="text-6xl animate-bounce">🎁</div>
          <div className="text-center md:text-left">
            <h2 id="discount-title" className="section-title text-2xl md:text-3xl mb-2">
              Скидка до 20% постоянным клиентам
            </h2>
            <p className="text-main-brown-dark text-lg font-medium">
              Второй и последующие заказы — дешевле!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

