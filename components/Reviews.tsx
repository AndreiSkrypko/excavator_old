'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const reviews = [
  {
    name: 'Вера, Лида',
    service: 'Уборка снега',
    text: 'Очень понравилось, что приехали быстро и аккуратно убрали снег. Оператор вежливый, техника современная. Буду обращаться ещё!',
    rating: 5,
  },
  {
    name: 'Андрей, Берёзовка',
    service: 'Планировка участка',
    text: 'Работа выполнена качественно и в срок. Всё объяснили, помогли с выбором услуги. Спасибо за профессионализм!',
    rating: 5,
  },
  {
    name: 'Ирина, Лида',
    service: 'Погрузка песка',
    text: 'Очень удобно, что можно заказать технику даже вечером. Всё сделали быстро, цена приятная. Рекомендую друзьям!',
    rating: 5,
  },
  {
    name: 'Сергей, Щучин',
    service: 'Земельные работы',
    text: 'Экскаватор приехал вовремя, водитель опытный. Всё сделали за один день, участок остался чистым. Спасибо за работу!',
    rating: 5,
  },
  {
    name: 'Елена, Лида',
    service: 'Вывоз грунта',
    text: 'Все вопросы решили по телефону, работа выполнена чётко и без задержек. Очень довольна сервисом!',
    rating: 5,
  },
]

function getInitials(name: string) {
  return name
    .split(',')[0]
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-main-yellow-light to-blue-50" aria-labelledby="reviews-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="reviews-title" className="section-title">Отзывы клиентов</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <article className="review-card">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                    {getInitials(review.name)}
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="font-bold text-main-brown-dark mb-1">
                    {review.name}
                  </div>
                  <div className="text-sm text-main-brown mb-2">
                    {review.service}
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>

                <p className="text-main-brown-dark leading-relaxed">
                  {review.text}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

