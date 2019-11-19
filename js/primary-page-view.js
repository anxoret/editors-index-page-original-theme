"use strict"

// primary on page we show latest date with its latest appeals  

let allDates = document.querySelectorAll(".date");
let lastDate = allDates[allDates.length - 1];
let allLastDateLi = lastDate.querySelectorAll(".date__li");
let lastDateLi = allLastDateLi[allLastDateLi.length - 1];
openTheDateAppeals(lastDateLi);
let lastDateName = lastDate.querySelector(".date__name");
lastDateName.classList.remove("date__name_arrow-right");
lastDateName.classList.add("date__name_arrow-down");