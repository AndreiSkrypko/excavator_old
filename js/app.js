// Главный файл приложения - Улучшенная версия
(function() {
    'use strict';

    // Улучшенная инициализация при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
        initApp();
    });

    function initApp() {
        initCalculator();
        initFAQ();
        initScrollTop();
        initScrollReveal();
        initFormValidation();
        initPhoneMask();
        initAnimations();
        initParallax();
        initModalEnhancements();
        initServiceCardInteractions();
        initLazyLoading();
    }

    // Калькулятор аренды с улучшениями
    function initCalculator() {
        const hoursInput = document.getElementById('hoursInput');
        const calcResult = document.getElementById('calcResult');
        const calcDiscount = document.getElementById('calcDiscount');

        if (!hoursInput || !calcResult) return;

        function updateRentCalc() {
            const hours = Math.max(4, parseInt(hoursInput.value) || 4);
            let total = hours * 80;
            let discount = 0;
            
            if (hours >= 10) {
                discount = 0.1;
                total = Math.round(total * 0.9);
                if (calcDiscount) {
                    calcDiscount.style.display = 'block';
                    calcDiscount.classList.add('animate__animated', 'animate__pulse');
                }
            } else {
                if (calcDiscount) {
                    calcDiscount.style.display = 'none';
                    calcDiscount.classList.remove('animate__animated', 'animate__pulse');
                }
            }
            
            // Плавное обновление результата
            calcResult.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                calcResult.textContent = `Итого: ${total} Br`;
            }, 100);
            setTimeout(() => {
                calcResult.classList.remove('animate__animated', 'animate__pulse');
            }, 500);
        }

        hoursInput.addEventListener('input', updateRentCalc);
        hoursInput.addEventListener('change', updateRentCalc);
        updateRentCalc();
    }

    // FAQ аккордеон с улучшениями
    function initFAQ() {
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', function() {
                const item = this.closest('.faq-item');
                const icon = this.querySelector('.faq-icon i');
                
                document.querySelectorAll('.faq-item').forEach(i => {
                    if (i !== item) {
                        i.classList.remove('open');
                        const otherIcon = i.querySelector('.faq-icon i');
                        if (otherIcon) {
                            otherIcon.classList.remove('bi-chevron-up');
                            otherIcon.classList.add('bi-chevron-down');
                        }
                    }
                });
                
                item.classList.toggle('open');
                if (icon) {
                    icon.classList.toggle('bi-chevron-up');
                    icon.classList.toggle('bi-chevron-down');
                }
            });
        });
    }

    // Улучшенная кнопка "Вверх"
    function initScrollTop() {
        const scrollTopBtn = document.getElementById("scrollTopBtn");
        if (!scrollTopBtn) return;

        function handleScroll() {
            if (window.pageYOffset > 200) {
                scrollTopBtn.style.display = "block";
                scrollTopBtn.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                scrollTopBtn.style.display = "none";
                scrollTopBtn.classList.remove('animate__animated', 'animate__fadeIn');
            }
        }

        window.addEventListener('scroll', handleScroll);
        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        handleScroll(); // Проверяем при загрузке
    }

    // Scroll reveal для секций
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.discount-section, .price-section, .advantages-section, .how-to-order-section, .services-section, .faq-section, .order-section, .reviews-section').forEach(sec => {
            observer.observe(sec);
        });
    }

    // Валидация форм
    function initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                if (!form.checkValidity()) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }

    // Маска для телефонов
    function initPhoneMask() {
        const phoneInputs = document.querySelectorAll('input[type="tel"], input[placeholder*="Телефон"], input[placeholder*="телефон"]');
        
        phoneInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.startsWith('375')) {
                    // Формат для Беларуси: +375 (XX) XXX-XX-XX
                    if (value.length > 3) {
                        value = '+375 (' + value.substring(3, 5);
                        if (value.length > 10) {
                            value += ') ' + value.substring(10, 13);
                            if (value.length > 16) {
                                value += '-' + value.substring(16, 18) + '-' + value.substring(18, 20);
                            }
                        }
                    } else {
                        value = '+375';
                    }
                } else if (value.length > 0) {
                    value = '+375 (29) ' + value.substring(0, 3) + '-' + value.substring(3, 5) + '-' + value.substring(5, 7);
                }
                
                e.target.value = value;
            });
        });
    }

    // Улучшенные анимации
    function initAnimations() {
        // Анимация появления элементов при скролле
        const animatedElements = document.querySelectorAll('.advantage-card, .service-card, .step-card, .review-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Параллакс эффект
    function initParallax() {
        if (window.innerWidth > 991) {
            const heroBg = document.querySelector('.hero-bg');
            if (!heroBg) return;

            // Параллакс при движении мыши (только если есть элемент .hero-bg)
            window.addEventListener('mousemove', function(e) {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 10;
                if (heroBg) {
                    heroBg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
                }
            });
        }
    }

    // Улучшения модальных окон
    function initModalEnhancements() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            modal.addEventListener('shown.bs.modal', function() {
                const firstInput = modal.querySelector('input, textarea, select');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 300);
                }
            });
        });
    }

    // Интерактивность карточек услуг
    function initServiceCardInteractions() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Lazy loading для изображений
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Экспорт функций для использования в других скриптах
    window.ExcavatorApp = {
        initCalculator,
        initFAQ,
        initScrollTop
    };
})();

