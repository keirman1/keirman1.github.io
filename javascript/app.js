
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})




var i = 0;
var txt = 'Keiran Codes';
var speed = 100;
var done = false;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function typeWriter() {
    if (i < txt.length) {
        speed = getRndInteger(79, 134)
        document.getElementById("navbar__logo").innerHTML = document.getElementById("navbar__logo").innerHTML.slice(0,document.getElementById("navbar__logo").innerHTML.length - 1);
        document.getElementById("navbar__logo").innerHTML += txt.charAt(i) + "|";
        i++;
        
    }
    else{
        done = true;
    }
    

    if(document.getElementById("navbar__logo").innerHTML.charAt(document.getElementById("navbar__logo").innerHTML.length - 1) == "|" && done == true){
        speed = 370;
        document.getElementById("navbar__logo").innerHTML = document.getElementById("navbar__logo").innerHTML.slice(0,document.getElementById("navbar__logo").innerHTML.length - 1);
        
    }
    else{
        if(done == true)
            document.getElementById("navbar__logo").innerHTML += "|";
    }
    
    setTimeout(typeWriter, speed);
}
   

typeWriter();