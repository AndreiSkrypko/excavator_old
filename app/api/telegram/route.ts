import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      )
    }

    // Если Telegram не настроен, возвращаем успех (для разработки)
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || TELEGRAM_BOT_TOKEN === 'ВАШ_ТОКЕН') {
      console.log('Telegram not configured, form data:', { name, phone, service, message })
      return NextResponse.json({ success: true, message: 'Форма отправлена (Telegram не настроен)' })
    }

    // Формируем сообщение для Telegram
    const text = `📝 <b>Новая заявка с сайта!</b>\n\n` +
                `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
                `📞 <b>Телефон:</b> ${escapeHtml(phone)}\n` +
                (service ? `🔧 <b>Услуга:</b> ${escapeHtml(service)}\n` : '') +
                (message ? `💬 <b>Сообщение:</b> ${escapeHtml(message)}\n` : '') +
                `⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}`

    // Отправляем в Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    })

    const data = await response.json()

    if (!data.ok) {
      console.error('Telegram API error:', data)
      return NextResponse.json(
        { error: 'Ошибка отправки сообщения' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string) {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

