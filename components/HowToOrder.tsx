'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: '💬',
    title: 'Заявка',
    description: 'Оставьте заявку по телефону +375 29 784-95-44 или на сайте.',
  },
  {
    number: '02',
    icon: '📞',
    title: 'Согласование',
    description: 'Согласуем технику, стоимость и место работ.',
  },
  {
    number: '03',
    icon: '🚚',
    title: 'Доставка',
    description: 'Доставим экскаватор на объект в назначенное время.',
  },
  {
    number: '04',
    icon: '💳',
    title: 'Оплата',
    description: 'Оплата наличными или по безналу — после выполнения работ.',
  },
]

export default function HowToOrder() {
  return (
    <section className="py-16 bg-white/75">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Как заказать технику</h2>
          <p className="section-subtitle">Простой процесс заказа в 4 шага</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl card-hover text-center h-full">
                <div className="w-16 h-16 bg-main-brown text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold text-main-brown mb-3">
                  {step.title}
                </h3>
                <p className="text-main-brown-dark">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

