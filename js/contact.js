let contact = document.querySelector(".link");
let myForm = document.querySelector(".contact");
let myCross = document.querySelector(".cross");



contact.addEventListener('click', showContactForm);
myCross.addEventListener('click', hideContactForm);

function showContactForm(e){
    myForm.classList.add('active');
}

function hideContactForm(e){
    myForm.classList.remove('active');
    navLinksContainer.classList.remove('open')
    burgerToggler.classList.remove('open')
}