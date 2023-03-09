var root =document.documentElement;
var percent = 40;

var percentTwo = 70;

var percentThree = 100;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 6000){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent', percent);
            root.style.setProperty('--nb-percent-str', '"'+percent+'%"')
        }, 1000);
    }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 6600) {
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-2', percentTwo);
            root.style.setProperty('--nb-percent-str-2', '"'+percentTwo+'%"')
        }, 1000);
    }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 6900) {
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-3', percentThree);
            root.style.setProperty('--nb-percent-str-3', '"'+percentThree+'%"')
        }, 1000);
    }
    yLastPosition = window.scrollY;
})