"use strict" 

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

let sectionNavigationButton = document.querySelector(".section-navigation__button");
sectionNavigationButton.addEventListener("click", () => {
    let ul = sectionNavigationButton.querySelector(".section-navigation__ul");
    showAndHideDomElement(ul, "section-navigation__ul_close");
});

