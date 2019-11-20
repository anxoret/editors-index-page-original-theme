"use strict"

// primary on page show latest date with its latest appeals  

let numberOfDateTimePeriods = document.querySelectorAll(".date__ul").length;
let lastDateTimePeriods = document.querySelectorAll(".date__ul")[numberOfDateTimePeriods - 1];

let numberOfDatesLi = lastDateTimePeriods.querySelectorAll(".date__li").length;
let lastDateLi = lastDateTimePeriods.querySelectorAll(".date__li")[numberOfDatesLi - 1];

showAndHideDateUl(lastDateTimePeriods, "date__ul_close");
dateHoverOnAndOff(lastDateName);
openTheDateAppeals(lastDateLi);

lastDateLi.classList.add("date__li_selected");