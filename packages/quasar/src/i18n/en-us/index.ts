import section_banners from './section_banners';
import auth from './auth';
import home from './models/home';
import layout from './models/layout';
import about from './models/about';
import stablish_dutch from './models/stablish_dutch';
import incorporate_fundation from './models/incorporate_fundation';
import accountants from './models/accountants';
import omzetting from './models/omzetting';
import incorporate_holding from './models/incorporate_holding';
import validations from './validations';
import memberships from './memberships';
import ligo_for_advisors from './models/ligo_for_advisors';

export default {
  login: 'Login',
  en: 'English',
  nl: 'Dutch',
  go_back: 'Go Back',
  yes: 'YES',
  no: 'NO',
  next: 'Next',
  proceed_to_payment: 'Proceed to payment',
  welcome: 'Welcome',
  welcome_to_ligo: 'Welcome To Ligo!',
  back: 'back',
  register: 'Who is the main contact person of', //Nameles BV
  now: 'now!',
  bv_oprichten: 'BV oprichten',
  bv_english: 'BV english',
  omzetten: 'Eenmanszaak of VOF omzetten',
  service: 'What service do you want to', // incorporate
  questions: 'Do you have questions? Call us at ', //phone_number
  enter_name: 'Enter the name of your', //BV,
  incorporate: 'incorporate',
  cant_incorporate:
    'In this case, it is unfortunately not possible as an incorporator to set up a BV with Ligo.',
  language_acclaration:
    'Important: In case one of the shareholders cannot speak, read and write in Dutch, you need to start the BV incorporation is English. Provided however, that such a shareholder can speak, read and write in English. Otherwise, the notary cannot start the incorporation',
  other_services: 'Check other services',
  main_person:
    'Who is the person who will act as representative on behalf of the shareholder?',
  lorem_ipsum:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id duis sed semper quis. Volutpat ultrices ipsum ornare quis facilisis metus venenatis. Etiam ridiculus id sed mattis vehicula.',
  empty: '',
  space: '*',
  sad_to_see_you_go: 'We are sad to see you go',
  dont_worry: "But don't worry!",
  come_back: 'you can comeback whenever you want',
  need_help: 'Need some help to continue?',
  call_us: 'Call us at',
  stay_finish: 'Stay & Finish',
  exit: 'Exit',
  shareholder: 'Shareholder',
  already_a_user: 'I am already a Ligo user',
  known_from: 'Known from',
  question_title: 'Question?',
  question_subtitle:
    'We are happy to help you, please use the chat at the bottom right of the screen.',
  rating_banner: {
    left: 'Bassed on',
    right: 'reviews via',
    via: {
      kiyoh: 'kiyoh'
    }
  },
  rating: { left: 'Bassed on', right: 'reviews' },
  more_questions: 'Contact us now for a free consultation.',
  get_in_touch: 'We will get back to you within 2 business days.',
  send: 'Send',
  sent: 'Sent',
  welcome_banner: {
    title: 'Welcome to Ligo Platform!',
    text:
      "We're excited to show you our new and refreshed design. You can see this in parts of our website already, and more updates will follow."
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
