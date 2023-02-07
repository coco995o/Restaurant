import MyImage from './images/chef.png';
import { createMenuPage } from './menuPage';

export function createHomePage(){
    const container=document.querySelector('.container');
    container.innerHTML="";
    const newDiv=document.createElement('div');
    newDiv.classList.add('newDiv');
    const textDiv=document.createElement('div');
    textDiv.classList.add('textDiv');
    const myButton=document.createElement('button');
    myButton.innerHTML="Order Now";
    myButton.addEventListener('click', createMenuPage);
    myButton.classList.add('order');
    const myText=document.createElement('p');
    myText.innerHTML="Come to our Restaurant to taste the best pizza in town";
    const welcome=document.createElement('h3');
    welcome.innerHTML='Welcome';
    const chefImage=new Image();
    chefImage.src=MyImage;
    textDiv.appendChild(welcome);
    textDiv.appendChild(myText);
    textDiv.appendChild(myButton);

    newDiv.appendChild(textDiv);
    newDiv.appendChild(chefImage);
    container.appendChild(newDiv);
}