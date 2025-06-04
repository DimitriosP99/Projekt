const translations = {
    // Header & Navigation
    skipToMain: { de: "Zum Hauptinhalt springen.", en: "Skip to main content." },
    altLogo: { de: "Ruhpolding Tourismus Logo, anklicken um zur Homepage zu gelangen.", en: "Ruhpolding Tourism Logo, click for returning to homepage" },
    navCulture: { de: "Kultur", en: "Culture" },
    navWellness: { de: "Wellness & Gesundheit", en: "Wellness & Health" },
    navWalks: { de: "Leichte Wanderungen", en: "Walks" },
    languageSwitchLabel: { de: "Sprache wechseln", en: "Switch language" },
    increaseTextLabel: { de: "Textgröße erhöhen", en: "Increase text size" },
    decreaseTextLabel: { de: "Textgröße verringern", en: "Decrease text size" },
    openMainMenu: { de: "Hauptmenü öffnen", en: "Open main menu" },
    navMobileCulture: { de: "Kultur", en: "Culture" },
    navMobileWellness: { de: "Wellness & Gesundheit", en: "Wellness & Health" },
    navMobileWalks: { de: "Leichte Wanderungen", en: "Walks" },
    
    // Hero Section
    heroTitle: { de: "Ruhpolding: Alpine Schönheit, Sanftes Tempo", en: "Ruhpolding: Alpine Beauty, Gentle Pace" },
    heroCta: { de: "Ihr Weg nach Ruhpolding", en: "Your way to Ruhpolding" },

    // Placeholder for Culture Page
    culturePagePlaceholder: { de: "Inhalte für die Kultur-Seite werden hier in Kürze folgen.", en: "Content for the culture page will follow here shortly." },

    // Placeholder for Wellness Page
    wellnessPagePlaceholder: { de: "Inhalte für die Wellness & Gesundheit-Seite werden hier in Kürze folgen.", en: "Content for the Wellness & Health page will follow here shortly." },

    // Placeholder for Walks Page
    walksPagePlaceholder: { de: "Inhalte zur Seite für Leichte Wanderungen werden hier in Kürze folgen.", en: "Content for the Easy Walks page will follow here shortly." },

    // Footer
    footerBrandName: { de: "Ruhpolding Tourismus", en: "Ruhpolding Tourism" },
    footerTagline: { de: "Ihr Partner für unvergessliche Urlaubsmomente in den bayerischen Alpen.", en: "Your partner for unforgettable holiday moments in the Bavarian Alps." },
    ariaFacebook: { de: "Facebook", en: "Facebook" },
    ariaInstagram: { de: "Instagram", en: "Instagram" },
    ariaTwitter: { de: "Twitter", en: "Twitter" },
    footerImprint: { de: "Impressum", en: "Imprint" },
    footerPrivacy: { de: "Datenschutz", en: "Privacy Policy" },
    footerAccessibility: { de: "Barrierefreiheitserklärung", en: "Accessibility Statement" },
    footerContact: { de: "Kontakt", en: "Contact" },
    footerCopyright: { de: "© 2025 Ruhpolding Tourismus. Alle Rechte vorbehalten.", en: "© 2025 Ruhpolding Tourism. All rights reserved." }
};

let currentLang = 'de';

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[key] && translations[key][lang]) {
            el.innerHTML = translations[key][lang];
        }
    });

    document.querySelectorAll('[data-lang-alt-key]').forEach(el => {
        const key = el.getAttribute('data-lang-alt-key');
        if (translations[key] && translations[key][lang]) {
            el.alt = translations[key][lang];
        }
    });

    document.querySelectorAll('[data-lang-aria-label-key]').forEach(el => {
        const key = el.getAttribute('data-lang-aria-label-key');
        if (translations[key] && translations[key][lang]) {
            el.setAttribute('aria-label', translations[key][lang]);
        }
    });

    // Update button titles and text for accessibility controls
    const increaseTextBtn = document.getElementById('increase-text');
    const decreaseTextBtn = document.getElementById('decrease-text');
    const langSwitchBtn = document.getElementById('language-switch');
    const langSwitchMobileBtn = document.getElementById('language-switch-mobile');

    increaseTextBtn.setAttribute('aria-label', translations.increaseTextLabel[lang]);
    increaseTextBtn.setAttribute('title', translations.increaseTextLabel[lang]);

    decreaseTextBtn.setAttribute('aria-label', translations.decreaseTextLabel[lang]);
    decreaseTextBtn.setAttribute('title', translations.decreaseTextLabel[lang]);

    langSwitchBtn.setAttribute('aria-label', translations.languageSwitchLabel[lang]);
    langSwitchBtn.setAttribute('title', translations.languageSwitchLabel[lang]);
    langSwitchBtn.textContent = lang === 'de' ? 'EN' : 'DE';

    if (langSwitchMobileBtn) {
        langSwitchMobileBtn.setAttribute('aria-label', translations.languageSwitchLabel[lang]);
        langSwitchMobileBtn.setAttribute('title', translations.languageSwitchLabel[lang]);
        langSwitchMobileBtn.textContent = lang === 'de' ? 'EN' : 'DE';
    }
}

// Language switch button (Desktop)
const languageSwitchButton = document.getElementById('language-switch');
languageSwitchButton.addEventListener('click', () => {
    const newLang = currentLang === 'de' ? 'en' : 'de';
    setLanguage(newLang);
});

// Language switch button (Mobile)
const languageSwitchMobileButton = document.getElementById('language-switch-mobile');
if (languageSwitchMobileButton) {
    languageSwitchMobileButton.addEventListener('click', () => {
        const newLang = currentLang === 'de' ? 'en' : 'de';
        setLanguage(newLang);
    });
}

// Mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    const openMenuTextEl = menuButton.querySelector('span.sr-only');
    if (openMenuTextEl) {
         openMenuTextEl.textContent = translations.openMainMenu[currentLang];
    }

    if (!isExpanded) {
        menuButton.innerHTML = `<span class="sr-only">${translations.openMainMenu[currentLang]}</span><svg class="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`;
    } else {
        menuButton.innerHTML = `<span class="sr-only">${translations.openMainMenu[currentLang]}</span><svg class="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>`;
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        const openMenuTextEl = menuButton.querySelector('span.sr-only');
        menuButton.innerHTML = `<span class="sr-only">${openMenuTextEl ? translations.openMainMenu[currentLang] : ''}</span><svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>`;
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            if(this.hash !== "#") e.preventDefault();
            const hash = this.hash;
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                const headerOffset = document.getElementById('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }
    });
});

// Text resizing
const increaseTextButton = document.getElementById('increase-text');
const decreaseTextButton = document.getElementById('decrease-text');
const htmlElement = document.documentElement;

let currentRootFontSize = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue('font-size'));
const initialRootFontSize = 16; 
const step = 1;

increaseTextButton.addEventListener('click', () => {
    currentRootFontSize = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue('font-size'));
    if (currentRootFontSize < initialRootFontSize + (step * 3) ) {
         htmlElement.style.fontSize = (currentRootFontSize + step) + 'px';
    }
});

decreaseTextButton.addEventListener('click', () => {
    currentRootFontSize = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue('font-size'));
    if (currentRootFontSize > initialRootFontSize - (step * 2)) {
        htmlElement.style.fontSize = (currentRootFontSize - step) + 'px';
    }
});

// Intersection Observer for animations
const animatedElements = document.querySelectorAll('.animate-fadeIn, .animate-fadeInUp');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// HIER WAR DER FEHLER - DIESER BLOCK WAR UNVOLLSTÄNDIG
animatedElements.forEach(el => {
    el.classList.add('opacity-0', 'transition-all', 'duration-1000', 'ease-out');
    if (el.classList.contains('animate-fadeInUp')) {
        el.classList.add('translate-y-10');
    }
    observer.observe(el);
});
  
// --- Initial Setup ---
window.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang); // Set initial language
});