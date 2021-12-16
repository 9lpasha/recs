import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import coursera from './images/coursera.jpg';
import stepik from './images/stepik.jpg';

let courses = [
    {
        href: 'https://www.coursera.org/professional-certificates/google-ux-design',
        img: coursera,
        name: 'Google UX Design',
        author: 'Google',
        rating: 4.8,
        number: 320000
    },
    {
        href: 'https://stepik.org/course/102520/promo',
        img: stepik,
        name: 'Веб дизайн в Figma с нуля до результата! Основы UX UI',
        author: 'Дмитрий Фокеев',
        rating: 4.9,
        number: 335
    },
    {
        href: 'https://www.coursera.org/specializations/ui-ux-design',
        img: coursera,
        name: 'UI / UX Design',
        author: 'California Institute of the Arts',
        rating: 4.7,
        number: 200000
    },
    {
        href: 'https://www.coursera.org/specializations/user-interface-design',
        img: coursera,
        name: 'Google UX Design',
        author: 'University of Minnesota',
        rating: 4.6,
        number: 74000
    },
    {
        href: 'https://www.coursera.org/learn/ux-design-fundamentals',
        img: coursera,
        name: 'Google UX Design',
        author: 'California Institute of the Arts',
        rating: 4.8,
        number: 74000
    }
]

ReactDOM.render(
    <App data={courses}/>,
  document.getElementById('root')
);
