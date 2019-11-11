"use strict" 

let openUl = lastDateTimePeriods;
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

let dates = document.querySelectorAll(".date");
let datesNames = document.querySelectorAll(".date__name");
let dateArrow = document.querySelectorAll(".date__arrow");

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
}

datesNames.forEach((dateName, i) => {
    dateName.addEventListener("click", () => {
        let ul = dates[i].querySelector(".date__ul");
        showAndHideDateUl(ul, "date__ul_close");
        // dateName.classList.toggle("date__name_arrow-right");

        dateHoverOnAndOff(dateName);
        // if (dateName.classList.contains("date__name_arrow-right")) {
        //     dateName.classList.remove("date__name_arrow-right");
        //     dateName.classList.add("date__name_arrow-down");
        // } else {
        //     dateName.classList.remove("date__name_arrow-down");
        //     dateName.classList.add("date__name_arrow-right");
        // }


        // dateName.classList.toggle("date-name_arrow-down");
        // dateArrow[i].classList.toggle("date__arrow_down");
    });
});

let sectionsNavBtn = document.querySelector(".sections__button_first-theme");
sectionsNavBtn.addEventListener("click", () => {
    let ul = document.querySelector(".sections__ul");
    ul.classList.toggle("sections__ul_close");
});



