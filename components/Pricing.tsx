'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import OrderModal from './OrderModal'

export default function Pricing() {
  const [hours, setHours] = useState(4)
  const [total, setTotal] = useState(320)
  const [hasDiscount, setHasDiscount] = useState(false)

  useEffect(() => {
    const calculatedTotal = hours * 80
    if (hours >= 10) {
      setTotal(Math.round(calculatedTotal * 0.9))
      setHasDiscount(true)
    } else {
      setTotal(calculatedTotal)
      setHasDiscount(false)
    }
  }, [hours])

  return (
    <section className="py-16 bg-gradient-to-br from-main-yellow-light to-main-yellow" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="price-card grid md:grid-cols-2 gap-8 items-center">
            {/* Левая часть: Цена */}
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-black text-main-brown mb-2">
                80 Br
              </div>
              <div className="text-2xl text-main-brown-dark mb-6">в час</div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">⏰</span>
                  <span>Выезд в течение 2 часов</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">👷</span>
                  <span>Опытный водитель</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">💵</span>
                  <span>Все расходы включены</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">🌙</span>
                  <span>Работаем 24/7</span>
                </div>
              </div>

              <OrderModal trigger={
                <button className="btn-gradient w-full md:w-auto px-8 py-4 text-lg">
                  Заказать сейчас
                </button>
              } />
            </div>

            {/* Правая часть: Калькулятор */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-main-brown-dark mb-6">
                Калькулятор аренды
              </h3>
              
              <div className="mb-6">
                <label className="block text-lg mb-3 text-main-brown-dark font-medium">
                  Часов аренды:
                </label>
                <input
                  type="number"
                  min="4"
                  max="100"
                  value={hours}
                  onChange={(e) => setHours(Math.max(4, parseInt(e.target.value) || 4))}
                  className="input-field text-center text-2xl font-bold w-32 mx-auto"
                />
                <div className="mt-2 text-main-brown">× 80 Br/час</div>
              </div>

              <motion.div
                key={total}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="mb-4"
              >
                <div className="text-4xl font-black text-green-600 mb-2">
                  Итого: {total} Br
                </div>
                {hasDiscount && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl text-main-orange font-bold"
                  >
                    🎉 Скидка 10% за 10+ часов!
                  </motion.div>
                )}
              </motion.div>

              <p className="text-sm text-main-brown mt-4">
                Минимальный заказ — 4 часа. Скидка 10% при заказе от 10 часов.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

