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