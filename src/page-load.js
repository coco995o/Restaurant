export function initialPage(){

    const content=document.getElementById('content');
    const header=document.createElement('div');  
    const container=document.createElement('div');
    container.classList.add('container');
    header.classList.add('header');
    const pageName=document.createElement('h2');
    const buttonsDiv=document.createElement('div');
    buttonsDiv.classList.add('buttonsDiv');
    buttonsDiv.innerHTML=`
        <a class="home tab" href="#">Home</a>
        <a class="menu tab" href="#">Menu</a>
        <a class="contact tab" href="#">Contact</a>
    `;
    const footer=document.createElement('div');
    footer.classList.add('footer');
    const about=document.createElement('p');
    about.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const facebook=document.createElement('a');
    facebook.innerHTML=`<i class="fa-brands fa-facebook"></i>`;
    const instagram=document.createElement('a');
    instagram.innerHTML=`<i class="fa-brands fa-instagram"></i>`; 
    footer.append(about, facebook, instagram);
    pageName.textContent='PizzaCut';
    header.appendChild(pageName);
    header.appendChild(buttonsDiv);

    content.appendChild(header);
    content.appendChild(container);
    content.appendChild(footer);
}