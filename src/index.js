import _ from 'lodash';
import './styles.css';
import { initialPage } from './page-load';
import { createHomePage } from './homePage';
import { createMenuPage } from './menuPage';
import { createContactPage } from './ContactPage';

initialPage();
createHomePage();

const firstButton=document.querySelector('.home');
firstButton.addEventListener('click', createHomePage);

const secondButton=document.querySelector('.menu');
secondButton.addEventListener('click', createMenuPage);

const contactButton=document.querySelector('.contact');
contactButton.addEventListener('click', createContactPage);

const tabs=document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', (e)=>{
        console.log(tabs);
        tabs.forEach(selectedTab=>{
            selectedTab.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});
