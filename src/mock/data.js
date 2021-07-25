import {nanoid} from 'nanoid';

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
    img: 'MainPhoto.jpg',
    paragraphOne: 'My name is Calaras Cristian I\'m a Front End Developer based in Chisinau.I describe myself as a passionate developer who loves coding, open source, and the web platform',
    paragraphTwo: '',
    paragraphThree: '',
    resume: '',
};

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: 'img_2.png',
        title: 'React.js Expense Tracker',
        info: 'An expense tracker is a software or application that helps to keep an accurate record of your money inflow and outflow',
        info2: '',
        url: 'https://expense-tracker5.herokuapp.com/',
        repo: 'https://github.com/cristikl5/ExpenseTracker', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'img_1.png',
        title: ' Angular Login&Register App with Firebase and REST Api',
        info: 'Login&Register with Firebase and REST Api ',
        info2: '',
        url:'',
        repo: 'https://github.com/cristikl5/Angular-CRM-App', // if no repo, the button will not show up
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
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/cristikl5',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
