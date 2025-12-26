'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface OrderFormData {
  name: string
  phone: string
  service: string
}

interface OrderModalProps {
  trigger: React.ReactNode
}

export default function OrderModal({ trigger }: OrderModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<OrderFormData>()
  
  const phoneValue = watch('phone')
  
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '')
    if (digits.startsWith('375')) {
      const code = digits.substring(3, 5)
      const first = digits.substring(5, 8)
      const second = digits.substring(8, 10)
      const third = digits.substring(10, 12)
      if (digits.length <= 3) return '+375'
      if (digits.length <= 5) return `+375 (${code}`
      if (digits.length <= 8) return `+375 (${code}) ${first}`
      if (digits.length <= 10) return `+375 (${code}) ${first}-${second}`
      return `+375 (${code}) ${first}-${second}-${third}`
    }
    if (digits.length === 0) return ''
    return `+375 (29) ${digits.substring(0, 3)}${digits.length > 3 ? '-' + digits.substring(3, 5) : ''}${digits.length > 5 ? '-' + digits.substring(5, 7) : ''}`
  }
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setValue('phone', formatted, { shouldValidate: true })
  }

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitting(false)
        setIsOpen(false)
        reset()
        alert('✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.')
      } else {
        throw new Error(result.error || 'Ошибка отправки')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      alert('❌ Ошибка отправки. Попробуйте позже или свяжитесь по телефону.')
    }
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl transform transition-all">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-main-brown hover:text-main-orange transition-colors text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-main-brown-dark text-center mb-6">
              Заказать услугу
            </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <input
                        {...register('name', { required: 'Обязательное поле' })}
                        type="text"
                        placeholder="Ваше имя"
                        className="input-field"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <input
                        {...register('phone', { required: 'Обязательное поле' })}
                        type="tel"
                        placeholder="+375 (29) 784-95-44"
                        className="input-field"
                        onChange={handlePhoneChange}
                        value={phoneValue || ''}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <select
                        {...register('service', { required: 'Выберите услугу' })}
                        className="input-field"
                      >
                        <option value="">Выберите услугу</option>
                        <option value="Уборка снега">Уборка снега</option>
                        <option value="Планировка участка">Планировка участка</option>
                        <option value="Погрузка/выгрузка песка и гравия">Погрузка/выгрузка песка и гравия</option>
                        <option value="Земельные работы">Земельные работы</option>
                        <option value="Другие работы">Другие работы</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gradient w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    </button>
                  </form>
          </div>
        </div>
      )}
    </>
  )
}

