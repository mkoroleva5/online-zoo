// Dots animation

const dots = document.querySelectorAll('.line-dot-wrapper');
const dollars = document.querySelectorAll('.dollar');
const amountText = document.querySelectorAll('.amount-text');
const amountItems = document.querySelectorAll('.form-line-amount-item');

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('mouseover', () => {
        dots[i].classList.add('hover-dot');
        dollars[i].classList.add('hover-dollar');
        amountText[i].classList.add('hover-amount');
    })
    dots[i].addEventListener('mouseout', () => {
        dots[i].classList.remove('hover-dot');
        dollars[i].classList.remove('hover-dollar');
        amountText[i].classList.remove('hover-amount');
    })
}

// Period form animation

const options = document.querySelectorAll('.period-option');
const optionDots = document.querySelectorAll('.period-option-dot');

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('mouseover', () => {
        optionDots[i].classList.add('hover-option-dot');
        
    })
    options[i].addEventListener('mouseout', () => {
        optionDots[i].classList.remove('hover-option-dot');
        
    })
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
        optionDots[0].classList.remove('active-option-dot');
        optionDots[1].classList.remove('active-option-dot');
        optionDots[i].classList.add('active-option-dot');  
    })
}

// Panda gif 

const feedButton = document.querySelector('.feed-button');
const popUp = document.querySelector('.panda-gif-wrapper');
const pandaGif = document.querySelector('.panda-gif');
const amountInput = document.querySelector('.amount-input');



feedButton.addEventListener('click', () => {
    let randomNum = Math.ceil(Math.random() * 3, 1);
    if (amountInput.value && amountInput.value < 10000) {
        pandaGif.style.background = `center / contain url('../../assets/images/panda-gif-${randomNum}.gif') no-repeat`
        popUp.style.transform = 'translateY(0)';
    } else if (!amountInput.value || amountInput.value > 9999) {
        amountInput.style.animation = 'swing 0.6s ease';
        amountInput.addEventListener('animationend', () => {
            amountInput.style.animation = 'none';
        })
    }
})

document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(popUp) || event.composedPath().includes(feedButton);
    if ( !click ) {
        popUp.style.transform = 'translateY(-150%)';
    }
});

// Credits animation

const creditsLink = document.querySelector('.credits-link');
const creditsLinkText = document.querySelectorAll('.credits-text');

for (let i = 0; i < creditsLinkText.length; i++) {
    creditsLink.addEventListener('mouseover', () => {
        creditsLinkText[i].classList.add('credits-link-hover');
    })
    creditsLink.addEventListener('mouseout', () => {
        creditsLinkText[i].classList.remove('credits-link-hover');
    })
}

