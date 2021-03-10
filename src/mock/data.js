import {nanoid} from 'nanoid';

// HEAD DATA
export const headData = {
    title: '', // e.g: 'Name | Developer'
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
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: '',
};

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: 'project.jpg',
        title: '',
        info: '',
        info2: '',
        url: '',
        repo: '', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project.jpg',
        title: '',
        info: '',
        info2: '',
        url: '',
        repo: '', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project.jpg',
        title: '',
        info: '',
        info2: '',
        url: '',
        repo: '', // if no repo, the button will not show up
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