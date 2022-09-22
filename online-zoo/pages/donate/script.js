// Dots animation

const dots = document.querySelectorAll('.line-dot-wrapper');
const dollars = document.querySelectorAll('.dollar');
const amountText = document.querySelectorAll('.amount-text');

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

