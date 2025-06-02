sessionStorage.setItem('slideValue',1);
let crs = document.querySelector('.testimonies-container');
let crsSlides = document.querySelectorAll('.testimony-box').length;
let crsVisible = document.querySelector('.testimonies-visible');
let crsSlidesSize = crsVisible.offsetWidth;
let crsGap = +getNumeticalValue(getComputedStyle(crs).columnGap);
let crsPadding = +getNumeticalValue(getComputedStyle(crsVisible).paddingLeft)*2;
let virtualSlide = crsSlidesSize + crsGap - crsPadding;
let dotsAmount = document.querySelectorAll('.testimony-box').length;


window.addEventListener('load',()=>{
    generateCrsDots();
})


function animateCarousel(slideValue){
    if(slideValue === 5) slideValue = 0;
    if(slideValue < crsSlides){
        let transformValue = slideValue * virtualSlide;
        console.log(`translateX(-${transformValue})px)`);
        crs.style.transform = `translateX(-${transformValue}px)`;
        updateCrsDot(slideValue);
        slideValue++;
        sessionStorage.setItem('slideValue',slideValue);
    }
}

function getNumeticalValue(element){
    return element.slice(0, element.length - 2);
}

function generateCrsDots(){
    for(let i = 0; i < dotsAmount ; i++){
        let button = document.createElement('button');
        button.classList.add('testimonies-carousel-control');
        if(i ===0) button.classList.add('active');
        button.setAttribute('onclick', `updateCrsDot(${i}); animateCarousel((${i}))` )
        document.querySelector('.testimonies-carousel-controls').appendChild(button);
    }
}

function updateCrsDot(slideValue){
    document.querySelector('.testimonies-carousel-control.active').classList.remove('active');
    document.querySelectorAll('.testimonies-carousel-control')[slideValue].classList.add('active');
}