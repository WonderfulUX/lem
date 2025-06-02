let closeBtns = document.querySelectorAll('.close');
let modals = document.querySelectorAll('.modal');

//LOCAL STORAGE
!(localStorage.getItem('lang')) && localStorage.setItem('lang', 'french');


//CHANGE LANGUAGE

function changeLanguage(){
    language.classList.toggle('en')
    language.classList.contains('en') ? switchTo('English') : switchTo('Français')
}


function triggerSwitchTo(ele){
    if(!(ele.closest('li').classList.contains('active'))){
        document.querySelector("#language-modal .active").classList.remove('active');
        ele.closest('li').classList.add('active');
    }
    let languageShort = ele.querySelector('.language-label').innerText;
    switchTo(languageShort);
    document.querySelector('#language-modal .close').click();
}
function switchTo(lang){
    switch (lang){
        case 'Français':
            [... document.querySelectorAll('.fr')].map(ele=>ele.classList.remove('dn'));
            [... document.querySelectorAll('.en')].map(ele=>ele.classList.add('dn'));
            [... document.querySelectorAll('.pt')].map(ele=>ele.classList.add('dn'));
            localStorage.setItem('lang', 'french')
            break;
        case 'English':
            [... document.querySelectorAll('.fr')].map(ele=>ele.classList.add('dn'));
            [... document.querySelectorAll('.en')].map(ele=>ele.classList.remove('dn'));
            [... document.querySelectorAll('.pt')].map(ele=>ele.classList.add('dn'));
            localStorage.setItem('lang', 'english')
            break;
    }
}

closeBtns.forEach((ele)=>{
    ele.addEventListener('click',(ele)=>{
        if(ele.target.parentElement.tagName==="BUTTON"){
            ele.target.parentElement.parentElement.querySelector('.modal-content').classList.remove('displayed');
            setTimeout(()=>{
                ele.target.parentElement.parentElement.classList.remove('poppedUp');
            },450)
        }
        else{
            ele.target.parentElement.querySelector('.modal-content').classList.remove('displayed');
            setTimeout(()=>{
                ele.target.parentElement.classList.remove('poppedUp');
            },450)
        }
    })
})

document.addEventListener('DOMContentLoaded',()=>{
    let lang = localStorage.getItem('lang');
    if(lang === 'french') {
        switchTo('Français');
        language.classList.remove('en')
    } 
    else{
        switchTo('English')
        language.classList.add('en')
    }
})