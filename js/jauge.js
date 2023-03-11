var root =document.documentElement;
var percent = 40;

var percentTwo = 70;

var percentThree = 100;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 6000 && largeur < 768){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent', percent);
            root.style.setProperty('--nb-percent-str', '"'+percent+'%"')
        }, 1000);
    }
    if(window.scrollY > 5200 && largeur > 768){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent', percent);
            root.style.setProperty('--nb-percent-str', '"'+percent+'%"')
        }, 1000);
    }
    if(window.scrollY > 3400 && largeur > 992){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent', percent);
            root.style.setProperty('--nb-percent-str', '"'+percent+'%"')
        }, 1000);
    }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 6600 && largeur < 768) {
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-2', percentTwo);
            root.style.setProperty('--nb-percent-str-2', '"'+percentTwo+'%"')
        }, 1000);
    }
    if(window.scrollY > 5700 && largeur > 768){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-2', percentTwo);
            root.style.setProperty('--nb-percent-str-2', '"'+percentTwo+'%"')
        }, 1000);
    }
    if(window.scrollY > 3400 && largeur > 992){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-2', percentTwo);
            root.style.setProperty('--nb-percent-str-2', '"'+percentTwo+'%"')
        }, 1000);
    }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 6900 && largeur < 768) {
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-3', percentThree);
            root.style.setProperty('--nb-percent-str-3', '"'+percentThree+'%"')
        }, 1000);
    }
    if(window.scrollY > 6000 && largeur > 768){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-3', percentThree);
            root.style.setProperty('--nb-percent-str-3', '"'+percentThree+'%"')
        }, 1000);
    }
    if(window.scrollY > 3400 && largeur > 992){
        setTimeout(function(){
            var DOMStyle =getComputedStyle(root);
            root.style.setProperty('--nb-percent-3', percentThree);
            root.style.setProperty('--nb-percent-str-3', '"'+percentThree+'%"')
        }, 1000);
    }
    yLastPosition = window.scrollY;
})