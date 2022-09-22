// Cards animation

const cards = document.querySelectorAll('.pet-card');
const cardsPhoto = document.querySelectorAll('.pet-photo');
const cardsText = document.querySelectorAll('.pet-text');
const cardsTitle = document.querySelectorAll('.pet-title');
const cardsDestination = document.querySelectorAll('.pet-destination');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', () => {
        cardsPhoto[i].classList.add('card-transform');
        cardsTitle[i].classList.add('text-hover');
        cardsDestination[i].classList.add('text-hover');
    })
    cards[i].addEventListener('mouseout', () => {
        cardsPhoto[i].classList.remove('card-transform');
        cardsTitle[i].classList.remove('text-hover');
        cardsDestination[i].classList.remove('text-hover');
    })
}

// Social media animation

const socialMediaItems = document.querySelectorAll('.social-media-item');
const socialMediaIcons = document.querySelectorAll('.social-media-icon');
const socialMediaLinks = document.querySelectorAll('.social-media-link');

for (let i = 0; i < socialMediaItems.length; i++) {
    socialMediaItems[i].addEventListener('mouseover', () => {
        socialMediaIcons[i].classList.add('social-media-icon-hover');
        socialMediaLinks[i].classList.add('social-media-link-hover');
    })
    socialMediaItems[i].addEventListener('mouseout', () => {
        socialMediaIcons[i].classList.remove('social-media-icon-hover');
        socialMediaLinks[i].classList.remove('social-media-link-hover');
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