// Функція для показу варіантів мови при наведенні курсору
function showLanguageOptions() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = 'block';
}

// Функція для приховування варіантів мови при знятті курсору
function hideLanguageOptions() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = 'none';
}

// Функція для оновлення годинника
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Оновлюємо годинник кожну секунду
setInterval(updateClock, 1000);

// Викликаємо функцію для оновлення годинника одразу після завантаження сторінки
updateClock();

// Об'єкт з перекладами
const translations = {
    'en': {
        'home': 'Home',
        'about': 'About',
        'work': 'Work',
        'buy': 'Buy',
        'all-rights-reserved': 'All Rights Reserved'
        // Додайте інші переклади тут
    },
    'ua': {
        'home': 'Головна',
        'about': 'Про нас',
        'work': 'Портфоліо',
        'buy': 'Послуги',
        'all-rights-reserved': 'Всі права захищені'
        // Додайте інші переклади тут
    }
};

// Функція для оновлення всіх текстових елементів на сторінці на відповідну мову
function updateLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        element.textContent = translations[language][translationKey];
    });
}

// Початкова мова (EN)
let currentLanguage = 'en';
updateLanguage(currentLanguage);

// Функція для зміни мови
function toggleLanguage(language) {
    currentLanguage = language;
    updateLanguage(currentLanguage);
    // Приховуємо варіанти мови після вибору
    hideLanguageOptions();
}
