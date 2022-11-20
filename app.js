let HTMLWrap = document.getElementById("idwrap");

let letters = ["a", "b", "c", "d", "e", "f", "g"];

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');
    HTMLWrap.style.gridTemplateRows = "170px 210px 61px 61px";
    HTMLWrap.style.gridTemplateColumns = "124px 376px 42px";
    clickedWrapper();
});

const clickedWrapper = function () {
    HTMLWrap.addEventListener('click', function () {
        console.log("clicked");
        let randomLetter = [];
        let randomRowAndColumn = [];
        for (let index = 0; index < 4; index++) {
            randomRowAndColumn.push(Math.floor(Math.random() * 200));
        }
        HTMLWrap.style.gridTemplateRows = `${randomRowAndColumn[0]}px ${randomRowAndColumn[1]}px ${randomRowAndColumn[2]}px ${randomRowAndColumn[3]}px`;
        HTMLWrap.style.gridTemplateColumns = `${randomRowAndColumn[0]}px ${randomRowAndColumn[1]}px ${randomRowAndColumn[2]}px`;
        for (let index = 0; index < letters.length; index++) {
            randomLetter.push(letters[Math.floor(Math.random() * letters.length)]);
        }
        HTMLWrap.innerHTML = ``;
        console.log(randomLetter);
        for (let index = 0; index < letters.length; index++) {
            HTMLWrap.innerHTML += `<div class="${randomLetter[index]}"></div>`;
        }
    });
};;;