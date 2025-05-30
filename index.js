const navMenu = document.querySelector('.nav-menu')
const hamburger = document.querySelector('.hamburger')
const navItems = document.querySelectorAll('.nav-item')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    navMenu.classList.toggle('change')
    navMenu.classList.remove('hide-nav')
})

navItems.forEach((item) =>{
    item.addEventListener('click', () =>{
       navMenu.classList.toggle('hide-nav')
    })
})


const theme = document.getElementById("toggle-button")
const themeIcon = document.getElementById("theme-icon")
const bodyy = document.body

theme.addEventListener('click', function(){
    bodyy.classList.toggle('dark-mode')
   
    if(bodyy.classList.contains('dark-mode')){
        themeIcon.classList.remove('fa-sun')
        themeIcon.classList.add('fa-moon')
    }
    else{
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
    }
})

document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('contact-form')

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.getElementById('text').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;


        if(name && email && message){
            alert(`Thank you, ${name}. Your message has been sent.`);
            form.reset();
        }
        else{
            document.getElementById('errmsg').innerText ="Please fill out all fields."
        }
    })
})