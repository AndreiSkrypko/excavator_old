'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Сколько стоит аренда экскаватора?',
    answer: 'Стоимость зависит от объёма и типа работ. Минимальная цена 80 Br/час. Позвоните нам или оставьте заявку — мы быстро рассчитаем цену под вашу задачу!',
  },
  {
    question: 'Как быстро вы приезжаете на объект?',
    answer: 'Обычно мы выезжаем в течение 1-2 часов после подтверждения заказа. Работаем 24/7, без выходных!',
  },
  {
    question: 'Какие документы нужны для заказа?',
    answer: 'Для частных лиц — только телефон и адрес. Для организаций — реквизиты для договора. Всё просто!',
  },
  {
    question: 'Можно ли заказать экскаватор на выходные или ночью?',
    answer: 'Да, мы работаем круглосуточно и без выходных. Просто позвоните или оставьте заявку на сайте!',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-main-yellow-light to-main-yellow rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="section-title text-center mb-8">Нас часто спрашивают</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-lg text-main-brown-dark hover:text-main-brown transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl transform transition-transform duration-200">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-main-brown-dark">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

