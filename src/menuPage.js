import Pizza1 from './images/pizza1.png';
import Pizza2 from './images/pizza2.png';
import Pizza3 from './images/pizza3.png';
import Pizza4 from './images/pizza4.png';


export function createMenuPage(){
    const container=document.querySelector('.container');
    container.innerHTML='';

    const menuDiv=document.createElement('div');
    menuDiv.classList.add('menuDiv');
    
    const pizza1=document.createElement('div');
    pizza1.classList.add('pizza');
    const cheesePizza=new Image();
    cheesePizza.src=Pizza1;
    const title1=document.createElement('h3');
    title1.textContent='Cheese Pizza'
    const p1=document.createElement('p');
    p1.textContent='Pizza cheese encompasses several varieties and types of cheeses and dairy products that are designed and manufactured for use specifically on pizza.';
    pizza1.append(title1,cheesePizza,p1);
    
    const pizza2=document.createElement('div');
    pizza2.classList.add('pizza');
    const pepperoniPizza=new Image();
    pepperoniPizza.src=Pizza2;
    const title2=document.createElement('h3');
    title2.textContent='Pepperoni';
    const p2=document.createElement('p');
    p2.textContent='Made of pizza crust, pizza sauce, cheese, and pepperoni. Pepperoni is basically an American version of salami. Pepperoni is a meat mixture of beef and pork that has been cured and seasoned with paprika and chili powder.';
    pizza2.append(title2,pepperoniPizza, p2);

    const pizza3=document.createElement('div');
    pizza3.classList.add('pizza');
    const veggiePizza=new Image();
    veggiePizza.src=Pizza3;
    const title3=document.createElement('h3');
    title3.textContent='Vegetarian Pizza'
    const p3=document.createElement('p');
    p3.textContent='It’s fresh and full of flavor, featuring cherry tomatoes, artichoke, bell pepper, olives, red onion and some hidden baby spinach';
    pizza3.append(title3,veggiePizza, p3);

    const pizza4=document.createElement('div');
    pizza4.classList.add('pizza');
    const margherita=new Image();
    margherita.src=Pizza4;
    const title4=document.createElement('h3');
    title4.textContent='Margherita'
    const p4=document.createElement('p');
    p4.textContent='Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.';
    pizza4.append(title4,margherita, p4);

    menuDiv.style.transition='all 10s';

    menuDiv.append(pizza1, pizza2, pizza3, pizza4);
    container.appendChild(menuDiv);
}