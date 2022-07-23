import auth from './auth';
import home from './models/home';
import layout from './models/layout';
import about from './models/about';
import section_banners from './section_banners';
import stablish_dutch from './models/stablish_dutch';
import incorporate_fundation from './models/incorporate_fundation';
import accountants from './models/accountants';
import omzetting from './models/omzetting';
import incorporate_holding from './models/incorporate_holding';
import validations from './validations';
import memberships from './memberships';
import ligo_for_advisors from './models/ligo_for_advisors';

export default {
  en: 'Engels',
  nl: 'Nederlandse',
  login: 'Login',
  go_back: 'Ga terug',
  yes: 'JA',
  no: 'NEE',
  next: 'Volgende',
  proceed_to_payment: 'Ga door naar betaling',
  welcome: 'Welcome',
  welcome_to_ligo: 'Welkom bij Ligo!',
  back: 'back',
  register: 'Wie is de contactpersoon van de', //Nameles BV
  now: 'now!',
  bv_oprichten: 'BV oprichten',
  bv_english: 'BV english',
  omzetten: 'Eenmanszaak of VOF omzetten',
  service: 'Wat wil je', // incorporate
  questions: 'Heb je vragen? Bel ons op ', //phone_number
  enter_name: 'Vul de naam van je', //BV,
  incorporate: 'oprichten',
  cant_incorporate:
    'In dit geval is het helaas niet mogelijk om via ligo een BV op te richten.',
  language_acclaration:
    "Belangrijk: In het geval een van de aandeelhouders niet in het Nederlands kan spreken, lezen en schrijven, moet u de BV-oprichting starten in het Engels. Op voorwaarde echter dat zo'n aandeelhouder in het Engels kan spreken, lezen en schrijven. Anders kan de notaris de oprichting niet starten",
  other_services: 'Bekijk andere services',
  main_person:
    'Wie is de persoon die als vertegenwoordigingsbevoegde namens de aandeelhouder zal optreden? ',
  lorem_ipsum:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id duis sed semper quis. Volutpat ultrices ipsum ornare quis facilisis metus venenatis. Etiam ridiculus id sed mattis vehicula.',
  empty: '',
  space: '*',
  sad_to_see_you_go: 'We vinden het jammer dat je stopt',
  dont_worry: 'Maar maak je geen zorgen!',
  come_back: 'Je kan terugkomen wanneer je wil.',
  need_help: 'Heb je hulp nodig om verder te gaan?',
  call_us: 'Bel ons op',
  stay_finish: 'Blijf en voltooi',
  exit: 'Beëindig',
  known_from: 'Je kent ons van',
  question_title: 'Vragen?',
  question_subtitle:
    'We helpen je graag. Gebruik de chat rechtsonder op het scherm, of bel ons.',
  rating_banner: {
    left: 'Gebaseerd op',
    right: 'beoordelingen via',
    via: {
      kiyoh: 'kiyoh'
    }
  },
  already_a_user: 'Ben je al lid van Ligo? ',
  rating: { left: 'Gebaseerd op', right: 'beoordelingen' },
  more_questions: 'Vraag gratis adviesgesprek aan.',
  get_in_touch: 'We nemen binnen 2 dagen contact met je op.',
  send: 'Verstuur',
  sent: 'Verstuurd',
  welcome_banner: {
    title: 'Welkom op de Ligo website!',
    text:
      'We zijn verheugd om je een deel van ons nieuwe design te laten zien. Het zal in fases live gaan. Meer updates volgen snel.'
  },
  auth: auth,
  home: home,
  layout: layout,
  about: about,
  memberships: memberships,
  section_banners: section_banners,
  stablish_dutch: stablish_dutch,
  incorporate_fundation,
  accountants,
  omzetting,
  incorporate_holding,
  validations,
  ligo_for_advisors
};
