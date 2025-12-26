'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import OrderModal from './OrderModal'

const services = [
  {
    id: 'snow',
    image: '/img/snow.webp',
    title: 'Уборка снега',
    alt: 'Уборка снега экскаватором в Лиде',
  },
  {
    id: 'planning',
    image: '/img/planirovka.webp',
    title: 'Планировка участка',
    alt: 'Планировка участка',
  },
  {
    id: 'loading',
    image: '/img/pogruzka.webp',
    title: 'Погрузка/выгрузка песка и гравия',
    alt: 'Погрузка/выгрузка песка и гравия',
  },
  {
    id: 'earthworks',
    image: '/img/zeml.webp',
    title: 'Земельные работы',
    alt: 'Земельные работы',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-br from-main-yellow-light to-main-yellow" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="services-title" className="section-title">Наши услуги</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <article className="service-card">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-main-brown mb-4">
                    {service.title}
                  </h3>
                  <OrderModal trigger={
                    <button className="btn-gradient w-full py-3">
                      Заказать
                    </button>
                  } />
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

