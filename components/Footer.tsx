'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-main-yellow-light to-main-yellow border-t-4 border-main-yellow mt-16 py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* О компании */}
          <div>
            <Image
              src="/img/logo.png"
              alt="Логотип"
              width={140}
              height={100}
              className="h-20 w-auto mb-4"
            />
            <p className="text-main-brown-dark mb-4">
              Услуги аренды экскаватора в Лиде и Лидском районе. Круглосуточно, без выходных и праздников.
            </p>
            <div className="flex gap-3">
              <a
                href="viber://chat?number=+375297849544"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link viber"
                aria-label="Viber"
              >
                💜
              </a>
              <a
                href="https://t.me/sashaamkador"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link telegram"
                aria-label="Telegram"
              >
                ✈️
              </a>
              <a
                href="https://instagram.com/strelkov9606?igsh=MTJtNHIyd2Nyajk3cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold text-main-brown-dark mb-4">
              Контакты
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+375297849544"
                className="flex items-center gap-3 text-main-brown-dark hover:text-main-brown transition-colors"
              >
                <span className="text-2xl">📞</span>
                <span>+375 29 784-95-44</span>
              </a>
              <a
                href="mailto:excavatorlida@gmail.com"
                className="flex items-center gap-3 text-main-brown-dark hover:text-main-brown transition-colors"
              >
                <span className="text-2xl">✉️</span>
                <span>excavatorlida@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-main-brown-dark">
                <span className="text-2xl">📍</span>
                <span>г. Лида, Лидский район</span>
              </div>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-xl font-bold text-main-brown-dark mb-4">
              Наши услуги
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-main-brown-dark hover:text-main-orange transition-colors">
                  Уборка снега
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-main-brown-dark hover:text-main-orange transition-colors">
                  Планировка участка
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-main-brown-dark hover:text-main-orange transition-colors">
                  Погрузка/выгрузка
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-main-brown-dark hover:text-main-orange transition-colors">
                  Земельные работы
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t-2 border-main-brown pt-6 text-center text-main-brown-dark">
          <p>
            © 2025 excavatorLida. Все права защищены. Работаем{' '}
            <span className="text-main-orange font-bold">24/7</span>
          </p>
          <p className="mt-2">УНП 591388079</p>
        </div>
      </div>
    </footer>
  )
}

