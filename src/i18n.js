import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Наш словарь переводов
const resources = {
  de: {
    translation: {
      "nav": {
        "startseite": "Startseite",
        "baeder": "Bäder",
        "sauna": "Sauna",
        "preise": "Preise & Zeiten",
        "wohnmobile": "Wohnmobile",
        "jobs": "Jobs",
        "partner": "Partner",
        "kontakt": "Kontakt"
      },
      "alert": "WICHTIGE INFO: Der Solebereich wird im Sommer 2026 wiedereröffnet!"
    }
  },
  en: {
    translation: {
      "nav": {
        "startseite": "Home",
        "baeder": "Pools",
        "sauna": "Sauna",
        "preise": "Prices & Times",
        "wohnmobile": "Camping",
        "jobs": "Jobs",
        "partner": "Partners",
        "kontakt": "Contact"
      },
      "alert": "IMPORTANT INFO: The saltwater area will reopen in summer 2026!"
    }
  },
  nl: {
    translation: {
      "nav": {
        "startseite": "Home",
        "baeder": "Zwembaden",
        "sauna": "Sauna",
        "preise": "Prijzen & Tijden",
        "wohnmobile": "Camperplaatsen",
        "jobs": "Vacatures",
        "partner": "Partners",
        "kontakt": "Contact"
      },
      "alert": "BELANGRIJKE INFO: Het zoutwaterbad gaat in de zomer van 2026 weer open!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "de", // Язык по умолчанию
    fallbackLng: "en", // Если перевода нет, показать английский
    interpolation: {
      escapeValue: false // React сам защищает от XSS
    }
  });

export default i18n;