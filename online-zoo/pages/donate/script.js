// Period form animation
/*
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
*/
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

// Amount item checked
/*
const amountItems = document.querySelectorAll('.amount-radio');

function changeChecked () {
    for (let i = 0; i < amountItems.length; i++) {
        if (window.innerWidth < 641) {
            amountItems[i].checked = false;
            amountItems[5].checked = true;
        } else {
            amountItems[i].checked = false;
            amountItems[2].checked = true;
        }
    }
}

window.addEventListener('resize', changeChecked);
*/

// Amount input

const amountItems = document.querySelectorAll('.amount-radio');
const amountSums = document.querySelectorAll('.amount-text');

for (let i = 0; i < amountSums.length; i++) {
    amountItems[i].addEventListener('click', () => {
        amountInput.value = amountSums[i].innerHTML;
    });

    amountInput.addEventListener('change', () => {
        if (amountInput.value == 5000) {
            amountItems[i].checked = false;
            amountItems[0].checked = true;
        }
        if (amountInput.value == 2000) {
            amountItems[i].checked = false;
            amountItems[1].checked = true;
        }
        if (amountInput.value == 1000) {
            amountItems[i].checked = false;
            amountItems[2].checked = true;
        }
        if (amountInput.value == 500) {
            amountItems[i].checked = false;
            amountItems[3].checked = true;
        }
        if (amountInput.value == 250) {
            amountItems[i].checked = false;
            amountItems[4].checked = true;
        }
        if (amountInput.value == 100) {
            amountItems[i].checked = false;
            amountItems[5].checked = true;
        }
        if (amountInput.value == 50) {
            amountItems[i].checked = false;
            amountItems[6].checked = true;
        }
        if (amountInput.value == 25) {
            amountItems[i].checked = false;
            amountItems[7].checked = true;
        }
        if (amountInput.value == 0) {
            amountItems[i].checked = false;
        }
    });
}

// Burger menu

const menuButton = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const dark = document.querySelector('.dark');
const burgerNavLinks = document.querySelectorAll('.burger-nav-link');
const burgerCredits = document.querySelector('.burger-credits');
const closeButton = document.querySelector('.close-button');

const openBurgerMenu = () => {
    burgerMenu.style.transform = 'translateX(0)';
    dark.style.display = 'block';
}

const closeBurgerMenu = () => {
    burgerMenu.style.transform = 'translateX(100%)';
    dark.style.display = 'none';
}

menuButton.addEventListener('click', openBurgerMenu);
closeButton.addEventListener('click', closeBurgerMenu);
burgerCredits.addEventListener('click', closeBurgerMenu);
for (let i = 0; i < burgerNavLinks.length; i++) {
    burgerNavLinks[i].addEventListener('click', closeBurgerMenu);
}

document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(burgerMenu) || event.composedPath().includes(menuButton);
    if ( !click ) closeBurgerMenu();
});

