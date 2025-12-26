'use client'

import OrderModal from './OrderModal'

export default function ContactButton() {
  return (
    <section className="py-12 text-center">
      <div className="container mx-auto px-4">
        <OrderModal trigger={
          <button className="btn-gradient text-xl px-12 py-6">
            Остались вопросы? Напишите нам!
          </button>
        } />
      </div>
    </section>
  )
}

