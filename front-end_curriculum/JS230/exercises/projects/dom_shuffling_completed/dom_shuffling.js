let childrenFromBody = document.body.children;
let main = childrenFromBody[0]
let header = childrenFromBody[1];

document.body.insertBefore(header, main);

let h1 = main.firstElementChild;
let nav = header.firstElementChild;

header.insertBefore(h1, nav);

let figureList = document.querySelectorAll('figure');

let imgOfBaby = figureList[0].firstElementChild;
let imgOfChin = figureList[1].firstElementChild;

figureList[0].replaceChild(imgOfChin, imgOfBaby);
figureList[1].insertAdjacentElement('afterbegin', imgOfBaby)

let article = document.querySelector('article');
article.appendChild(figureList[0]);
article.appendChild(figureList[1]);