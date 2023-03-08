let sectionWidth = document.getElementById('enzymes')
let cardOne = document.querySelector(".card1")
let cardTwo = document.querySelector('.card2')
let cardThree = document.querySelector('.card3')
let yLastPosition;
let largeur = sectionWidth.offsetWidth

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 2200 && largeur < 768){
        cardOne.classList.add('slideinright')
    }
    if(window.scrollY > 1600 && largeur > 768){
        cardOne.classList.add('slideinright')
    }
    if(window.scrollY > 1300 && largeur > 992){
        cardOne.classList.add('slideinright')
    }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 2600 && largeur < 768){
        cardTwo.classList.add('slideinleft')
    }
    if(window.scrollY > 2000 && largeur > 768){
        cardTwo.classList.add('slideinleft')
    }
    if(window.scrollY > 1400 && largeur > 992){
        cardTwo.classList.add('slideinleft')
    }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 3000 && largeur < 768){
        cardThree.classList.add('slideinrighttwo')
    }
    if(window.scrollY > 2400 && largeur > 768){
        cardThree.classList.add('slideinrighttwo')
    }
    if(window.scrollY > 1500 && largeur > 992){
        cardThree.classList.add('slideinrighttwo')
    }
    yLastPosition = window.scrollY;
})

