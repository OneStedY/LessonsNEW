const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        });
    }
}


const groupedBySuit = deck.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(groupedBySuit);
