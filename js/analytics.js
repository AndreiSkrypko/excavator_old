// Аналитика и отслеживание
(function() {
    'use strict';

    // Google Analytics 4
    function initGoogleAnalytics() {
        // Замените G-XXXXXXXXXX на ваш ID Google Analytics
        const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Замените на реальный ID
        
        if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
            // Google Analytics 4
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', GA_MEASUREMENT_ID, {
                'page_title': document.title,
                'page_location': window.location.href
            });

            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            document.head.appendChild(script);

            const inlineScript = document.createElement('script');
            inlineScript.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
            `;
            document.head.appendChild(inlineScript);
        }
    }

    // Yandex Metrika
    let YANDEX_COUNTER_ID = 'XXXXXXXX'; // TODO: Замените на реальный ID
    
    function initYandexMetrika() {
        // Замените XXXXXXXX на ваш ID Яндекс.Метрики
        if (YANDEX_COUNTER_ID && YANDEX_COUNTER_ID !== 'XXXXXXXX') {
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(YANDEX_COUNTER_ID, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
        }
    }

    // Отслеживание событий
    function trackEvent(category, action, label) {
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }

        // Yandex Metrika
        if (typeof ym !== 'undefined' && YANDEX_COUNTER_ID && YANDEX_COUNTER_ID !== 'XXXXXXXX') {
            ym(YANDEX_COUNTER_ID, 'reachGoal', action);
        }
    }

    // Отслеживание кликов по кнопкам
    function trackButtonClicks() {
        document.querySelectorAll('a[data-bs-target="#orderModal"], button[data-bs-target="#orderModal"], .btn-gradient, .service-btn, .price-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const buttonText = this.textContent.trim() || this.getAttribute('aria-label') || 'Unknown button';
                trackEvent('Button', 'Click', buttonText);
            });
        });
    }

    // Отслеживание отправки форм
    function trackFormSubmissions() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function() {
                const formId = this.id || 'unknown-form';
                trackEvent('Form', 'Submit', formId);
            });
        });
    }

    // Отслеживание звонков
    function trackPhoneCalls() {
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', function() {
                trackEvent('Contact', 'Phone Call', this.getAttribute('href'));
            });
        });
    }

    // Отслеживание времени на странице
    function trackTimeOnPage() {
        let startTime = Date.now();
        
        window.addEventListener('beforeunload', function() {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            trackEvent('Engagement', 'Time on Page', timeSpent + ' seconds');
        });
    }

    // Инициализация аналитики
    document.addEventListener('DOMContentLoaded', function() {
        initGoogleAnalytics();
        initYandexMetrika();
        trackButtonClicks();
        trackFormSubmissions();
        trackPhoneCalls();
        trackTimeOnPage();
    });

    // Экспорт функций
    window.Analytics = {
        trackEvent,
        initGoogleAnalytics,
        initYandexMetrika
    };
})();

