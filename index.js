document.querySelector('.hamburger').addEventListener('click', function(){
    document.querySelector('.hamburger').classList.toggle('change')
    document.querySelector('.nav-menu').classList.toggle('change')
})

const theme = document.getElementById("toggle-button")
const themeIcon = document.getElementById("theme-icon")

theme.addEventListener('click', function(){
    document.getElementById('bodyy').classList.toggle('dark-mode')
   
    if(document.getElementById('bodyy').classList.contains('dark-mode')){
        themeIcon.classList.remove('fa-sun')
        themeIcon.classList.add('fa-moon')
    }
    else{
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
    }
})

function validation(){
    const firstName = document.forms['form1']['c-name'].value;
    const email = document.forms['form1']['c-email'].value
    const message = document.forms['form1']['c-message'].value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(firstName == ''){
        document.getElementById('name').innerHTML = "name must be filled"
        return false;
    }
   
    if(email == ''){
        document.getElementById('email').innerHTML = "Email must be filled"
        return false;
    }
    if  (!emailRegex.test(email)){
        document.getElementById('email').innerHTML = "Invalid email"
        return false;
    }
    
    if(message == ''){
        document.getElementById('message').innerHTML = "Password must be filled"
        return false;
    }
}


