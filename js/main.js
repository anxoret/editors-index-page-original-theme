"use strict" 

// scroll width of .dates-sidebar 
let datesSidebar = document.querySelector(".dates-sidebar ");
let scrollWidth = datesSidebar.offsetWidth - datesSidebar.clientWidth;
// console.log(scrollWidth);
console.log(datesSidebar.offsetWidth);

const showAndHideDomElement = (element, className) => {
    element.classList.toggle(className);
};

let dates = document.querySelectorAll(".date");

dates.forEach(date => {
    date.addEventListener("click", () => {
        let ul = date.querySelector(".date__ul");
        showAndHideDomElement(ul, "date__ul_close");
    });
});

let sectionNavigationButton = document.querySelector(".sections-navigation__button");
sectionNavigationButton.addEventListener("click", () => {
    let ul = sectionNavigationButton.querySelector(".sections-navigation__ul");
    showAndHideDomElement(ul, "sections-navigation__ul_close");
});

