"use strict"

let openUl;
const showAndHideDateUl = (element, className) => {
    if (openUl == element) {
        element.classList.add(className);
        openUl = undefined;
    } else if (openUl) {
        openUl.classList.add(className);
        element.classList.remove(className);
        openUl = element;
    } else {
        element.classList.remove(className);
        openUl = element;
    }

};

let allDates = document.querySelectorAll(".date");
let lastDate = allDates[allDates.length - 1];
let lastDateName = lastDate.querySelector(".date__name");

let hoverDateName = lastDateName;
const dateHoverOnAndOff = (element) => {
    if (hoverDateName == element) {
        element.classList.remove("date__name_arrow-down");
        element.classList.add("date__name_arrow-right");
        hoverDateName = undefined;
    } else if (hoverDateName) {
        hoverDateName.classList.remove("date__name_arrow-down");
        hoverDateName.classList.add("date__name_arrow-right");
        element.classList.remove("date__name_arrow-right");
        element.classList.add("date__name_arrow-down");
        hoverDateName = element;
    } else {
        element.classList.remove("date__name_arrow-right");
        element.classList.add("date__name_arrow-down");
        hoverDateName = element
    }
};

let dates = document.querySelectorAll(".date");
let datesNames = document.querySelectorAll(".date__name");
datesNames.forEach((dateName, i) => {
    dateName.addEventListener("click", () => {
        let ul = dates[i].querySelector(".date__ul");
        showAndHideDateUl(ul, "date__ul_close");
        dateHoverOnAndOff(dateName);
    });
});

let sectionsNavBtn = document.querySelector(".sections__button");
let sectionsCurrentSection = sectionsNavBtn.querySelector(".sections__current-section");
let sectionsUl = document.querySelector(".sections__ul");

let wrapper = document.querySelector(".wrapper");
wrapper.onclick = function (event) {

    if (event.target !== sectionsUl
        && !(event.target.classList.contains("sections__link"))
        && !(event.target.classList.contains("sections__li"))
    ) {

        if (sectionsUl.classList.contains("sections__ul_close")
            && (event.target == sectionsNavBtn || event.target == sectionsCurrentSection)
        ) {
            sectionsUl.classList.remove("sections__ul_close");
        } else {
            sectionsUl.classList.add("sections__ul_close");
        }

    }

};

