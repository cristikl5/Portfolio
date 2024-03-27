import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'My Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Calaras Cristian',
  subtitle: 'Front End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'personal3x4.jpg',
  paragraphOne:
    "My name is Calaras Cristian I'm a  Front End Developer based in Chisinau.I describe myself as a passionate developer who loves coding, open source, and the web platform",
  paragraphTwo: '',
  paragraphThree: '',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bizleads-snapshot.png',
    title: 'Bizleads',
    info: 'Angular Development',
    info2: [
      'Created end-to-end tests using Protractor for robust and automated testing of application functionality later transitioned to using Cypress for improved testing efficiency and reliability',
      'Designed and developed a comprehensive management dashboard catering to staff needs, enhancing operational efficiency.',
      'Implemented a subscription based API for managing payments',
      'Subscription API Integration (Integrated a subscription-based API to facilitate seamless payment management)',
    ],
    url: 'https://bizleads.com/',
  },
  {
    id: nanoid(),
    img: 'img_4.png',
    title: 'boom! Mobile',
    info: 'Angular Development',
    info2: [
      'Designed and developed dashboard for customers with charts using Apex Charts and bootstrap tables',
      'Organized dashboard for reusable use on different roles',
      "Implemented REST API's",
    ],
    url: 'https://boom.us/',
  },
  {
    id: nanoid(),
    img: 'purple.png',
    title: 'Purple Personal Project',
    info: 'Angular Development',
    info2: [
      'Designed and developed dashboard for customers with charts using Apex Charts and bootstrap tables',
      'Used Angular signals',
      'Used Tailwind CSS for styling',
      'Organized dashboard for reusable use on different roles',
      "Implemented REST API's",
      'Implemented Firebase Authentication',
      'Added section for editing personal profile',
    ],
    url: 'https://angular-crud-firebase-cristikl5.vercel.app/auth/login',
    repo: 'https://github.com/cristikl5/Angular-16-CRUD',
  },
  {
    id: nanoid(),
    img: 'Shopify-Logo.png',
    title: 'Shopify Checkout extension',
    info: 'React + Typescript Development',
    info2: [
      'Create custom features for merchants.',
      'Integrate third-party services.',
      'Implemented page after checkout to activate purchased product right away',
    ],
  },
  {
    id: nanoid(),
    img: 'hr-portal.png',
    title: 'Company HR Portal',
    info: 'Angular + Tailwind Development',
    info2: [
      'Developed a custom dashboard interface for streamlined HR operations',
      'Integrated various APIs for seamless data exchange with external systems.',
      'Implemented user authentication and access control',
      'Received positive feedback from HR professionals for the intuitive design',
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Phone:+37360913145',
  btn: 'EMAIL',
  email: 'cristian.calaras88@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/cristikl',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
