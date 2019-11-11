"use strict" 

let openUl = lastDateTimePeriods;

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
let dateArrow = document.querySelectorAll(".date__arrow");

datesNames.forEach((dateName, i) => {
    dateName.addEventListener("click", () => {
        let ul = dates[i].querySelector(".date__ul");
        showAndHideDateUl(ul, "date__ul_close");
        // dateName.classList.toggle("date__name_arrow-right");

        if (dateName.classList.contains("date__name_arrow-right")) {
            dateName.classList.remove("date__name_arrow-right");
            dateName.classList.add("date__name_arrow-down");
        } else {
            dateName.classList.remove("date__name_arrow-down");
            dateName.classList.add("date__name_arrow-right");
        }
        // dateName.classList.toggle("date-name_arrow-down");
        // dateArrow[i].classList.toggle("date__arrow_down");
    });
});

let sectionsNavBtn = document.querySelector(".sections__button_first-theme");
sectionsNavBtn.addEventListener("click", () => {
    let ul = document.querySelector(".sections__ul");
    ul.classList.toggle("sections__ul_close");
});



