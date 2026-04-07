export const languages = {
  en: 'English',
  nl: 'Nederlands',
};

export const defaultLang = 'nl';

export const ui = {
  en: {
    // homepage and menu
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.advice': 'Travel Tips',
    'nav.eguides': 'E-Guides',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    'button.book': 'Book Now',

    // carousel
    'carousel.subtitle': 'Hotspots',
    'carousel.title': 'In and around Australia',
    'carousel.desc': 'E-guides for iconic Australian routes and nature, plus logical trips to New Zealand and tropical Asia — with Google Maps, routes, and mini-guides.',
    'carousel.badge': 'Hotspot guide',
    'carousel.btn': 'View e-book',
    'carousel.features': 'Maps • Routes • Guides',
    'carousel.prev': 'Previous',
    'carousel.next': 'Next',
  },
  nl: {
    // homepage and menu
    'nav.home': 'Home',
    'nav.destinations': 'Bestemmingen',
    'nav.advice': 'Reisadvies',
    'nav.eguides': 'E-Gidsen',
    'nav.about': 'Over Mij',
    'nav.contact': 'Contact',
    'button.book': 'Boek Nu',

    // carousel
    'carousel.subtitle': 'Hotspots',
    'carousel.title': 'In en om Australië',
    'carousel.desc': 'E-gidsen voor iconische Australische routes en natuur, plus logische uitstapjes naar Nieuw-Zeeland en tropisch Azië — met Google Maps-kaarten, routes en minigidsen.',
    'carousel.badge': 'Hotspot gids',
    'carousel.btn': 'Bekijk e-book',
    'carousel.features': 'Maps • Routes • Minigidsen',
    'carousel.prev': 'Vorige',
    'carousel.next': 'Volgende',
  },
} as const;


// Helper function to get the translation
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}