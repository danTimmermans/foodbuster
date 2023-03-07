
let cardOne = document.querySelector(".card1")
let cardTwo = document.querySelector('.card2')
let cardThree = document.querySelector('.card3')
let yLastPosition;
// let largeur = sectionWidth.offsetWidth
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 2200){
        cardOne.classList.add('slideinright')
    }
    // if(window.scrollY > 1500){
    //     cardOne.classList.add('slideinright')
    // }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 2300){
        cardTwo.classList.add('slideinleft')
    }
    // if(window.scrollY > 1600){
    //     cardTwo.classList.add('slideinleft')
    // }
    yLastPosition = window.scrollY;
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 2400){
        cardThree.classList.add('slideinright')
    }
    if(window.scrollY > 1700){
        cardThree.classList.add('slideinright')
    }
    yLastPosition = window.scrollY;
})

