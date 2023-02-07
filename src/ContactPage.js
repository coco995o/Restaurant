export function createContactPage(){
    const container=document.querySelector('.container');
    container.innerHTML='';

    const newDiv=document.createElement('div');
    newDiv.classList.add('address-div');
    newDiv.innerHTML=`
        <div class="address-text">
            <h3>Contact Information</h3>
            <p>Address: Dumbravei Street, No 100</p>
            <p>Phone: 012345578</p>
            <p>Email: ouremail@gmail.com</p>
        </div>
        <div class="address-form">
            <form class="form">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
                <input type="email" id="email" name="email" placeholder="Your Email" required>
                <textarea id="message" name="message" placeholder="Message"></textarea>
                <button class="submit">Send Message</button>
            </form>
        </div>
    `;
    container.appendChild(newDiv);
}