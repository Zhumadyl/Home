import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Fetch translation data from the API
async function fetchTranslationData() {
  try {
    const response = await fetch(
      "https://652d5836f9afa8ef4b274b71.mockapi.io/Data"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch translation data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching translation data:", error);
    return null;
  }
}

// Initialize i18n after fetching translation data
async function initializeI18n() {
  const translationData = await fetchTranslationData();

  if (translationData) {
    const resources = {};
    translationData.forEach((item) => {
      for (const [language, translations] of Object.entries(item)) {
        resources[language] = { translation: translations };
      }
    });

    i18n.use(initReactI18next).init({
      resources,
      fallbackLng: "en",
      lng: "ru",
      interpolation: {
        escapeValue: false,
      },
    });
  }
}

initializeI18n();

export default i18n;
