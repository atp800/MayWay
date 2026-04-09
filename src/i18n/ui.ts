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

    // about
    'about.title': 'About me | MAYWAY Travels',
    'about.description': 'Hi! I am Mayra. Discover my passion for travel.',
    'about.location': 'Great Ocean Road — Australia',
    'about.heading': "Hi! I'm Mayra",
    'about.p1': 'With a curious perspective and routes I have tried myself, I help you discover Australia and the region — always looking for moments that truly make you feel something. I love pushing my boundaries, embracing new experiences, and sharing what I learn with you.',
    'about.p2': 'For me, the secret of traveling lies in the details: unexpected encounters, the colors of a sunset on an empty beach, and the excitement of new flavors. I believe travel broadens your horizons. With practical tips and personal e-guides, I want to show you that your adventure is within reach — without unnecessary stress.',
    'about.follow': 'Follow me on Instagram',

    // contact
    'contact.title': 'Contact | MAYWAY Travels',
    'contact.heading': "Let's talk",
    'contact.intro': 'Have a question about an itinerary, an e-guide, or just want to bounce some ideas around? I’d love to help make your dream trip a reality.',
    'contact.intake.title': 'Ready for the next step?',
    'contact.intake.desc': 'Book a 1-on-1 intake session for a travel plan tailored 100% to you.',
    'contact.intake.btn': 'Schedule your intake',
    'contact.form.nameLabel': 'Full name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailLabel': 'Email address',
    'contact.form.emailPlaceholder': 'you@example.com',
    'contact.form.subjectLabel': 'Subject',
    'contact.form.subjectPlaceholder': 'What is your question about?',
    'contact.form.messageLabel': 'Message',
    'contact.form.messagePlaceholder': 'Tell me briefly about your plans...',
    'contact.form.submit': 'Send message',
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

    // about
    'about.title': 'Over mij | MAYWAY Travels',
    'about.description': 'Hi! Ik ben Mayra. Ontdek mijn passie voor reizen.',
    'about.location': 'Great Ocean Road — Australië',
    'about.heading': 'Hi! Ik ben Mayra',
    'about.p1': 'Met een nieuwsgierige blik en routes die ik zelf heb uitgeprobeerd, help ik jou om Australië en de regio te ontdekken — altijd op zoek naar momenten die je echt iets laten voelen. Ik verleg graag mijn grenzen, omarm nieuwe ervaringen en deel wat ik leer met jou.',
    'about.p2': 'Voor mij zit het geheim van reizen in de details: onverwachte ontmoetingen, de kleuren van een zonsondergang op een leeg strand en de opwinding van nieuwe smaken. Ik geloof dat reizen je blik verruimt. Met praktische tips en persoonlijke e-gidsen wil ik laten zien dat jouw avontuur binnen handbereik ligt — zonder onnodige stress.',
    'about.follow': 'Volg mij op Instagram',

    // contact
    'contact.title': 'Contact | MAYWAY Travels',
    'contact.heading': 'Laten we praten',
    'contact.intro': 'Heb je een vraag over een route, een e-gids of wil je even overleggen? Ik help je graag om jouw droomreis werkelijkheid te maken.',
    'contact.intake.title': 'Klaar voor de volgende stap?',
    'contact.intake.desc': 'Boek een 1-op-1 intakegesprek voor een reisplan dat 100% bij jou past.',
    'contact.intake.btn': 'Plan jouw intake',
    'contact.form.nameLabel': 'Volledige naam',
    'contact.form.namePlaceholder': 'Jouw naam',
    'contact.form.emailLabel': 'E-mailadres',
    'contact.form.emailPlaceholder': 'jij@voorbeeld.nl',
    'contact.form.subjectLabel': 'Onderwerp',
    'contact.form.subjectPlaceholder': 'Waar gaat je vraag over?',
    'contact.form.messageLabel': 'Bericht',
    'contact.form.messagePlaceholder': 'Vertel me kort iets over je plannen...',
    'contact.form.submit': 'Verstuur bericht',
  },
} as const;


// Helper function to get the translation
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}