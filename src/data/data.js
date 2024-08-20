import { FiMonitor, FiStopCircle, FiVideo, FiCoffee, FiMusic, FiWatch, FiBox, FiTarget, FiPenTool,FiBook, FiSmartphone, FiActivity, FiSmile, FiAward, FiThumbsUp, FiAirplay, FiAperture, FiCamera, FiCompass, FiSettings, FiPhone, FiMail, FiMapPin} from '../assets/icons/vander'
import { FiGitlab, FiGithub, FiCode, FiShuffle, FiLink2, FiLayers, FiDatabase, FiImage } from 'react-icons/fi';
import portfolio1 from '../assets/images/portfolio/1.jpg'
import portfolio2 from '../assets/images/portfolio/2.jpg'
import portfolio3 from '../assets/images/portfolio/3.jpg'
import portfolio4 from '../assets/images/portfolio/4.jpg'
import portfolio5 from '../assets/images/portfolio/5.jpg'
import portfolio6 from '../assets/images/portfolio/6.jpg'

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'
import client6 from '../assets/images/client/06.jpg'

import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'
import blog4 from '../assets/images/blog/04.jpg'
import blog5 from '../assets/images/blog/05.jpg'
import blog6 from '../assets/images/blog/06.jpg'
import blog7 from '../assets/images/blog/07.jpg'
import blog8 from '../assets/images/blog/08.jpg'

export const portfolioData = [
    {
        image: portfolio1,
        title: 'Website Development',
        name: 'Otomatiks Website 1',
        category:'Next Js'
    },
    {
        image: portfolio2,
        title: 'Website Development',
        name: 'Otomatiks Website 2',
        category:'Next Js'
    },
    {
        image: portfolio3,
        title: 'Website Development',
        name: 'Farming Website',
        category:'React Js'
    },
    {
        image: portfolio4,
        title: 'Website Development',
        name: 'My Personal Protfolio',
        category:'React Js'
    },
    {
        image: portfolio5,
        title: 'Website Development',
        name: 'QBee Academy Website',
        category:'React Js'
    },
    {
        image: portfolio6,
        title: 'Graphic Design',
        name: 'Poster',
        category:'Graphic Designer'
    },
    {
        image: portfolio6,
        title: 'Graphic Design',
        name: 'Pamplet',
        category:'Graphic Designer'
    },
    {
        image: portfolio6,
        title: 'photography',
        name: 'Function Photographer',
        category:'Photography'
    },
    {
        image: portfolio6,
        title: 'photography',
        name: 'Travel Photographer',
        category:'Photography'
    },
]



export const portfolioImage = [ portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6]





export const hobbiesData = [
    {
        icon: FiGitlab,  // Represents Git
        title: 'Git'
    },
    {
        icon: FiGithub,  // Represents GitHub
        title: 'GitHub'
    },
    {
        icon: FiCode,  // Represents HTML5
        title: 'HTML 5'
    },
    {
        icon: FiCode,  // Represents CSS3
        title: 'CSS 3'
    },
    {
        icon: FiCode,  // Represents JavaScript
        title: 'JavaScript'
    },
    {
        icon: FiCode,  // Represents Java
        title: 'Java'
    },
    {
        icon: FiCode,  // Represents Python
        title: 'Python'
    },
    {
        icon: FiShuffle,  // Represents ReactJs
        title: 'ReactJs'
    },
    {
        icon: FiShuffle,  // Represents Redux
        title: 'Redux'
    },
    {
        icon: FiLink2,  // Represents React Router-Dom
        title: 'React Router-Dom'
    },
    {
        icon: FiLayers,  // Represents Next.js
        title: 'Next.js'
    },
    {
        icon: FiLayers,  // Represents Tailwind CSS
        title: 'Tailwind CSS'
    },
    {
        icon: FiLayers,  // Represents Bootstrap
        title: 'Bootstrap'
    },
    {
        icon: FiDatabase,  // Represents SQL
        title: 'SQL'
    },
    {
        icon: FiDatabase,  // Represents DynamoDB
        title: 'DynamoDB'
    },
    {
        icon: FiImage,  // Represents Canva
        title: 'Canva'
    },
];

export const counterData = [
    {
        icon: FiSmile,
        target: '1251',
        title: 'Happy Client'
    },
    {
        icon: FiAward,
        target: '15',
        title: 'Award Won'
    },
    {
        icon: FiCoffee,
        target: '3261',
        title: 'Cup of Coffee'
    },
    {
        icon: FiThumbsUp,
        target: '36',
        title: 'Project Complete'
    },
]


export const offerData = [
    {
        icon: FiAirplay,  // Icon representing web development
        title: 'Web Development',
        desc: 'We build responsive and efficient websites that provide seamless user experiences across all devices.'
    },
    {
        icon: FiAirplay,  // Icon representing UX / UI design (digital interface)
        title: 'UX / UI Design',
        desc: 'Crafting visually appealing and intuitive interfaces to enhance user interaction and satisfaction.'
    },
    {
        icon: FiPenTool,  // Icon representing graphic design (tools for creative work)
        title: 'Graphic Design',
        desc: 'Creating compelling visual content that communicates your brand message through modern design techniques.'
    },
    {
        icon: FiSmartphone,  // Icon representing mobile app development
        title: 'Mobile App Development',
        desc: 'Developing user-friendly mobile applications for both iOS and Android, tailored to meet your business needs.'
    },
    {
        icon: FiCamera,  // Icon representing photography
        title: 'Photography',
        desc: 'Capturing high-quality images that tell your story with precision and creativity, perfect for personal or professional use.'
    },
    {
        icon: FiWatch,  // Icon representing 24 / 7 service (time or constant support)
        title: '24 / 7',
        desc: 'We offer round-the-clock support to ensure that your digital platforms are always functioning smoothly.'
    },
];



export const workTabData = [
    {
        title:'React js',
        value: '80%'
    },
    {
        title:'Next js',
        value: '75%'
    },
    {
        title:'Java Script',
        value: '85%'
    },
    {
        title:'Tailwind Css',
        value: '64%'
    },
    {
        title:'Bootsrap',
        value: '75%'
    },
    {
        title:'Html',
        value: '95%'
    },
    {
        title:'Css',
        value: '85%'
    },
    {
        title:'Java',
        value: '70%'
    },
    {
        title:'Python',
        value: '60%'
    },
    {
        title:'Canva',
        value: '80%'
    },
   
]



export const clientData = [
    {
        image: client1,
        name: 'Erich Bissonette',
        brand: 'Oppo',
        title: '" Design Quality "',
        desc: 'There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        image: client2,
        name: 'Tina Meyer',
        brand: 'Vivo',
        title: '" Code Quality "',
        desc: 'There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        image: client3,
        name: 'Sharon Murdock',
        brand: 'Apple',
        title: '" Feature Availability "',
        desc: 'There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        image: client4,
        name: 'Jesse Hunt',
        brand: 'Samsung',
        title: '" Customizability "',
        desc: 'There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        image: client5,
        name: 'Andrea Toy',
        brand: 'Nokia',
        title: '" Flexibility "',
        desc: 'There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
        image: client6,
        name: 'Jay Allums',
        brand: 'RedMI',
        title: '" Development "',
        desc: 'There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which dont look even slightly believable.'
    },
]

export const blogData = [
    {
        id:1,
        image: blog1,
        title: 'Our Home Entertainment has Evolved Significantly',
        name: 'Cristino',
        tag: 'Branding',
        date: '13th Sep 2023'        
    },
    {
        id:2,
        image: blog2,
        title: 'These Are The Voyages of The Starship Enterprise',
        name: 'Tina Meyer',
        tag: 'Development',
        date: '29th Nov 2023'        
    },
    {
        id:3,
        image: blog3,
        title: 'Three Reasons Visibility Matters in Supply Chain',
        name: 'Jay Allums',
        tag: 'designing',
        date: '29th Dec 2023'        
    },
    {
        id:4,
        image: blog4,
        title: 'Our Home Entertainment has Evolved Significantly',
        name: 'Andrea Toy',
        tag: 'photography',
        date: '13th March 2023'        
    },
    {
        id:5,
        image: blog5,
        title: 'These Are The Voyages of The Starship Enterprise',
        name: 'Cristino',
        tag: 'Branding',
        date: '5th May 2023'        
    },
    {
        id:6,
        image: blog6,
        title: 'Three Reasons Visibility Matters in Supply Chain',
        name: 'Sharon Murdock',
        tag: 'photography',
        date: '19th June 2023'        
    },
    {
        id:7,
        image: blog7,
        title: 'Our Home Entertainment has Evolved Significantly',
        name: 'Erich Bissonette',
        tag: 'Branding',
        date: '20th June 2023'        
    },
    {
        id:8,
        image: blog8,
        title: 'These Are The Voyages of The Starship Enterprise',
        name: 'Cristino',
        tag: 'Development',
        date: '31st Aug 2023'        
    },
]

export const contactData = [
    {
        icon: FiPhone,
        title: 'Phone',
        desc: 'Reach out to us directly via phone for any inquiries or support.',
        link:'+91 63837 91772',
        linkData: 'tel:+91 63837 91772'
    },
    {
        icon: FiMail,
        title: 'Email',
        desc: 'Feel free to send us an email, and we’ll get back to you as soon as possible.',
        link:'arungwork63@gmail.com',
        linkData: 'mailto:arungwork63@gmail.com'
    },
    {
        icon: FiMapPin,
        title: 'Location',
        desc: 'Visit our office at 862, Annanagar, Thottiyam(po), Chinnasalem(tk), Kallakurichi(Dt).',
        link:'https://maps.app.goo.gl/fLYwAFG1FaX1P4k39',
        linkData: 'https://maps.app.goo.gl/fLYwAFG1FaX1P4k39'
    },
];


export const recentPost = [
    {
        image: blog7,
        title: 'Consultant Business',
        date: '13th March 2023'
    },
    {
        image: blog8,
        title: 'Consultant Business',
        date: '5th May 2023'
    },
    {
        image: blog1,
        title: 'Consultant Business',
        date: '19th June 2023'
    },
]

export const blogComment = [
    {
        image: client1,
        name: 'Lorenzo Peterson',
        date: '13th March 1:00 pm',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
    },
    {
        image: client2,
        name: 'Tammy Camacho',
        date: '5th May 10:00 am',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
    },
    {
        image: client3,
        name: 'Eleanor Crisp',
        date: '19th June 9:00 am',
        desc: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
    },
    {
        image: client4,
        name: 'Richard Combs',
        date: '20th June 2:00 pm',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.'
    },
]