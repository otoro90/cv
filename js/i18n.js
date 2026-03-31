/**
 * i18n Module - Lightweight internationalization for static CV
 * Supports: EN (default), ES
 * Uses: data-i18n attributes, localStorage persistence, smooth transitions
 */
const I18n = (() => {
    const STORAGE_KEY = 'cv-lang';
    const DEFAULT_LANG = 'en';
    const SUPPORTED_LANGS = ['en', 'es'];
    const translations = {};

    function getPreferredLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

        const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
        if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

        return DEFAULT_LANG;
    }

    async function loadTranslations(lang) {
        if (translations[lang]) return translations[lang];

        const response = await fetch(`i18n/${lang}.json`);
        if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
        translations[lang] = await response.json();
        return translations[lang];
    }

    function applyTranslations(dict) {
        // data-i18n: set textContent
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // data-i18n-html: set innerHTML (for content with <strong>, <br>, <a>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // data-i18n-attr: set attributes (e.g., content:meta.description)
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const pairs = el.getAttribute('data-i18n-attr').split(';');
            pairs.forEach(pair => {
                const [attr, key] = pair.split(':');
                if (attr && key && dict[key] !== undefined) {
                    el.setAttribute(attr.trim(), dict[key]);
                }
            });
        });

        // Update <title>
        if (dict['meta.title']) {
            document.title = dict['meta.title'];
        }
    }

    function updateLangAttribute(lang) {
        document.documentElement.setAttribute('lang', lang);
    }

    function updateSwitcherUI(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-current', isActive ? 'true' : 'false');
        });
    }

    function addTransitionEffect() {
        document.body.classList.add('i18n-transitioning');
        setTimeout(() => {
            document.body.classList.remove('i18n-transitioning');
        }, 300);
    }

    async function setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) return;

        addTransitionEffect();
        const dict = await loadTranslations(lang);
        applyTranslations(dict);
        updateLangAttribute(lang);
        updateSwitcherUI(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function bindSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    async function init() {
        const lang = getPreferredLang();

        // Preload both languages for instant switching
        await Promise.all(SUPPORTED_LANGS.map(l => loadTranslations(l)));

        await setLanguage(lang);
        bindSwitcher();
    }

    return { init, setLanguage };
})();
