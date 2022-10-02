// Cards animation

const cards = document.querySelectorAll('.pet-card');
const cardsPhoto = document.querySelectorAll('.pet-photo');
const cardsText = document.querySelectorAll('.pet-text');
const cardsTitle = document.querySelectorAll('.pet-title');
const cardsDestination = document.querySelectorAll('.pet-destination');
const cardsIcons = document.querySelectorAll('.pet-icon');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', () => {
        cardsPhoto[i].classList.add('card-transform');
        cardsTitle[i].classList.add('text-hover');
        cardsDestination[i].classList.add('text-hover');
        cardsIcons[i].classList.add('icon-hover');
    })
    cards[i].addEventListener('mouseout', () => {
        cardsPhoto[i].classList.remove('card-transform');
        cardsTitle[i].classList.remove('text-hover');
        cardsDestination[i].classList.remove('text-hover');
        cardsIcons[i].classList.remove('icon-hover');
    })
}

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

// Burger menu

const menuButton = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const dark = document.querySelector('.dark');
const burgerNavLinks = document.querySelectorAll('.burger-nav-link');
const burgerCredits = document.querySelector('.burger-credits');

const openBurgerMenu = () => {
    burgerMenu.style.transform = 'translateX(0)';
    dark.style.display = 'block';
}

const closeBurgerMenu = () => {
    burgerMenu.style.transform = 'translateX(100%)';
    dark.style.display = 'none';
}

menuButton.addEventListener('click', openBurgerMenu);
burgerCredits.addEventListener('click', closeBurgerMenu);
for (let i = 0; i < burgerNavLinks.length; i++) {
    burgerNavLinks[i].addEventListener('click', closeBurgerMenu);
}

document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(burgerMenu) || event.composedPath().includes(menuButton);
    if ( !click ) closeBurgerMenu();
});

