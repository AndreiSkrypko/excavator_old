'use client'

import { motion } from 'framer-motion'

const advantages = [
  {
    icon: '🚚',
    title: 'Быстрая доставка',
    description: 'Оперативно прибываем на место благодаря исправной технике.',
  },
  {
    icon: '👷',
    title: 'Забота о вашем объекте',
    description: 'Работаем аккуратно и профессионально — с заботой о вашем участке.',
  },
  {
    icon: '🛠️',
    title: '10-летний опыт',
    description: 'С 2013 года выполнили более 2 000 работ разной сложности.',
  },
  {
    icon: '💰',
    title: 'Гарантия низких цен',
    description: 'Собственный парк техники — лучшие цены в регионе.',
  },
]

export default function Advantages() {
  return (
    <section className="py-16 bg-gradient-to-br from-main-yellow-light to-main-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="advantage-card text-center">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-main-brown mb-3">
                  {advantage.title}
                </h3>
                <p className="text-main-brown-dark">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

