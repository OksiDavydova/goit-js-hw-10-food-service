import menu from "../menu.json";
import cardsTpl from "../templates/cards.hbs";


const menuList = document.querySelector('.js-menu');

const menuMarkup = cardsTpl(menu);
// console.log(menuMarkup);
menuList.insertAdjacentHTML('beforeend', menuMarkup);


// console.log(menuList);
// function markupMenuCards(menu) {
//   return menu.map(cardTpl).join('');
// }
