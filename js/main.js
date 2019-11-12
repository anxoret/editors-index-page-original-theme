"use strict"

window.addEventListener("load", resizeElements);
window.addEventListener("resize", () => {
    console.log("Запуск!");
    setTimeout( () => resizeElements(), 1000)
});
// resizeElements();

// console.log(getElementAbsoluteHeight(wrapper)); //1956
// let header = document.querySelector(".header");
// console.log(getElementAbsoluteHeight(header)); //154
// console.log(getElementAbsoluteHeight(datesSidebar)); //1093
// let mainContent =  document.querySelector(".main-content");
// console.log(getElementAbsoluteHeight(mainContent)); //2321
// console.log(`${getElementAbsoluteHeight(mainContent) + getElementAbsoluteHeight(header)} 
// = ${getElementAbsoluteHeight(wrapper)}`); //2475 = 722
let searchInformation = document.querySelector(".search-information");
console.log(getElementAbsoluteHeight(searchInformation));
// console.log(getTopAndButtomMarginsSum(searchInformation));

// let elementStyles = window.getComputedStyle(appealsContainer);
// console.log(elementStyles.height);

// console.log(appealsContainer.clientHeight);
// console.log(appealsContainer.scrollHeight);
// console.log(appealsContainer.style.height);
