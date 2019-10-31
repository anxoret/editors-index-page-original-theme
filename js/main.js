"use strict" 

let openUl = false;

const showAndHideDateUl = (element, className) => {
    if (openUl == element) {
        element.classList.add(className);
        openUl = false;
    } else if (openUl) {
        openUl.classList.add(className);
        element.classList.remove(className);
        openUl = element;
    } else {
        element.classList.remove(className);
        openUl = element;
    }
};

let dates = document.querySelectorAll(".date");
let datesNames = document.querySelectorAll(".date__name");

datesNames.forEach((dateName, i) => {
    dateName.addEventListener("click", () => {
        let ul = dates[i].querySelector(".date__ul");
        showAndHideDateUl(ul, "date__ul_close");
    });
});

let sectionsNavBtn = document.querySelector(".sections-navigation__button_first-theme");
sectionsNavBtn.addEventListener("click", () => {
    let ul = document.querySelector(".sections-navigation__ul");
    ul.classList.toggle("sections-navigation__ul_close");
});

