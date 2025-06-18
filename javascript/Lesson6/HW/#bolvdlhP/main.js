const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
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
const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Ace of Spade:', spadeAce);
const sixes = deck.filter(card => card.value === '6');
console.log('All sixes:', sixes);
const redCards = deck.filter(card => card.color === 'red');
console.log('All red cards:', redCards);
const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('All diamonds:', diamonds);
const highClubs = deck.filter(card => card.cardSuit === 'clubs' &&
    (parseInt(card.value) >= 9 || ['jack', 'queen', 'king', 'ace'].includes(card.value)));
console.log('All clubs from 9:', highClubs);
