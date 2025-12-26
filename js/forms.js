// Улучшенная обработка форм
(function() {
    'use strict';

    // Отправка формы в Telegram (улучшенная версия)
    function initTelegramForms() {
        const TELEGRAM_BOT_TOKEN = 'ВАШ_ТОКЕН'; // TODO: Замените на реальный токен
        const TELEGRAM_CHAT_ID = 'ВАШ_CHAT_ID'; // TODO: Замените на реальный chat_id

        // Форма заказа в модальном окне
        const orderForm = document.querySelector('#orderModal form');
        if (orderForm) {
            orderForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const name = formData.get('name') || this.querySelector('input[name="name"]')?.value || '';
                const phone = formData.get('phone') || this.querySelector('input[name="phone"]')?.value || '';
                const service = formData.get('service') || this.querySelector('select[name="service"]')?.value || '';

                if (!name || !phone || !service) {
                    showNotification('Пожалуйста, заполните все поля!', 'error');
                    return;
                }

                // Используем FormSubmit как fallback, если Telegram не настроен
                if (TELEGRAM_BOT_TOKEN === 'ВАШ_ТОКЕН' || TELEGRAM_CHAT_ID === 'ВАШ_CHAT_ID') {
                    // Используем стандартную отправку через FormSubmit
                    this.submit();
                } else {
                    // Отправка в Telegram
                    sendToTelegram(name, phone, service, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID);
                }
            });
        }

        // Форма "Связаться с нами"
        const contactForm = document.getElementById('contact-form-modal');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = this.querySelectorAll('input, textarea');
                const data = {};
                inputs.forEach(input => {
                    if (input.value.trim()) {
                        data[input.placeholder || input.name || 'field'] = input.value.trim();
                    }
                });

                if (Object.keys(data).length < 2) {
                    showNotification('Пожалуйста, заполните все поля!', 'error');
                    return;
                }

                if (TELEGRAM_BOT_TOKEN !== 'ВАШ_ТОКЕН' && TELEGRAM_CHAT_ID !== 'ВАШ_CHAT_ID') {
                    sendContactToTelegram(data, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID);
                } else {
                    showNotification('Форма будет отправлена после настройки. Пожалуйста, свяжитесь по телефону.', 'info');
                }
            });
        }
    }

    function sendToTelegram(name, phone, service, botToken, chatId) {
        const text = `📝 <b>Новая заявка с сайта!</b>\n\n` +
                    `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
                    `📞 <b>Телефон:</b> ${escapeHtml(phone)}\n` +
                    `🔧 <b>Услуга:</b> ${escapeHtml(service)}\n` +
                    `⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML'
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                showNotification('✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.', 'success');
                
                // Закрываем модальное окно
                const modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
                if (modal) modal.hide();
                
                // Очищаем форму
                document.querySelector('#orderModal form').reset();
                
                // Отслеживаем событие
                if (window.Analytics) {
                    window.Analytics.trackEvent('Form', 'Submit', 'Order Form');
                }
            } else {
                showNotification('❌ Ошибка отправки. Попробуйте позже или свяжитесь по телефону.', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('❌ Ошибка отправки. Попробуйте позже или свяжитесь по телефону.', 'error');
        });
    }

    function sendContactToTelegram(data, botToken, chatId) {
        let text = `💬 <b>Новое сообщение с сайта!</b>\n\n`;
        
        Object.keys(data).forEach(key => {
            text += `<b>${key}:</b> ${escapeHtml(data[key])}\n`;
        });
        text += `\n⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML'
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                showNotification('✅ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.', 'success');
                const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
                if (modal) modal.hide();
                document.getElementById('contact-form-modal').reset();
            } else {
                showNotification('❌ Ошибка отправки. Попробуйте позже.', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('❌ Ошибка отправки. Попробуйте позже.', 'error');
        });
    }

    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Красивые уведомления
    function showNotification(message, type = 'info') {
        // Удаляем существующие уведомления
        const existing = document.querySelector('.custom-notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `custom-notification alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            min-width: 300px;
            max-width: 500px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            animation: slideInRight 0.3s ease;
        `;
        
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        document.body.appendChild(notification);

        // Автоматическое скрытие через 5 секунд
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Добавляем стили для анимации
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Инициализация при загрузке
    document.addEventListener('DOMContentLoaded', function() {
        initTelegramForms();
    });

    // Экспорт функций
    window.Forms = {
        showNotification,
        sendToTelegram,
        sendContactToTelegram
    };
})();

