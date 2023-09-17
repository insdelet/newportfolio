// Функція для оновлення всіх текстових елементів на сторінці на відповідну мову
function updateLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        element.textContent = translations[language][translationKey];
    });
}

// Функція для зміни мови
function toggleLanguage(language) {
    currentLanguage = language;
    updateLanguage(currentLanguage);
    // Приховуємо варіанти мови після вибору
    hideLanguageOptions();
}

// Ваш об'єкт з перекладами (залиште такий же)
const translations = {
    'en': {
        'home': 'Home',
        'about': 'About',
        'work': 'Work',
        'buy': 'Buy',
        'all-rights-reserved': 'All Rights Reserved',
        'pro': 'PRO',
        'developer-name': 'Maksym Hinhuliak',
        'developer-name1': 'Ivan Shcerbak',
        'developer-location': 'Poland / Poznań',
        'developer-location1': 'Ukraine / Khotyn',
        'developer-description': 'User interface designer and front-end developer Owner Tak Tak',
        'telegram': 'Telegram',
        'email': 'Email',
        'skills-title': 'Skills',
        'developer-level': 'Mid-Level Developer',
        'developer-level1': 'Junior Developer',
        'owner': 'Owner Tak Tak',
        'junior': 'Junior',
        'taktak': 'Tak Tak Studio: Your Partner in the World of Web Development and Design',
        // Додайте інші переклади тут

    },
    'ua': {
        'home': 'Головна',
        'about': 'Про нас',
        'work': 'Портфоліо',
        'buy': 'Послуги',
        'all-rights-reserved': 'Всі права захищені',
        'pro': 'PRO',
        'developer-name': 'Максим Гінгуляк',
        'developer-name1': 'Іван Щербак',
        'developer-location': 'Польща / Познань',
        'developer-location1': 'Україна / Хотин',
        'developer-description': 'Дизайнер інтерфейсу користувача та фронтенд-розробник, власник Tak Tak',
        'telegram': 'Telegram',
        'email': 'Email',
        'skills-title': 'Навички',
        'developer-level': 'Середній рівень розробника',
        'developer-level1': 'Початковий рівень розробника',
        'owner': 'Власник Tak Tak',
        'junior': 'Junior',
        'taktak': 'Tak Tak Studio: Ваш партнер у світі веб-розробки та дизайну',
        // Додайте інші переклади тут
    }
};


// Початкова мова (EN)
let currentLanguage = 'en';
updateLanguage(currentLanguage);

function openTelegram() {
    // Додайте посилання на Telegram
    window.open('https:t.me/proteintv', '_blank'); // Замініть 'посилання на Telegram' на фактичне посилання
}

function sendEmail() {
    // Додайте посилання на сторінку для відправлення електронного листа (наприклад, Gmail)
    window.open('taktakgamestudio@gmail.com', '_blank'); // Замініть 'посилання на Gmail' на фактичне посилання
}

function openTelegram(telegramLink) {
    // Відкрийте посилання на Telegram з вказаним параметром
    window.open(telegramLink, '_blank');
}

function sendEmail(emailAddress) {
    // Відкрийте посилання для відправлення електронного листа з вказаною адресою
    window.open('mailto:' + emailAddress);
}
