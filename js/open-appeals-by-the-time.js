"use strict"

const openTheDateAppeals = (dateLi) => {
    let date = dateLi.parentElement.parentElement;
    let dateName = date.querySelector(".date__name");
    let dateDay = dateName.querySelector(".date__day").innerText;
    let dateMonth = getMonthNameByName(dateName.querySelector(".date__month").innerText);
    let startHour = dateLi.querySelector(".date__start-hour-span").innerText;

    let appealsContainer = document.querySelector(".appeals-container");
    appealsContainer.innerHTML = "";

    let appealsArray = createArrayOfAppeals((new Date()).getFullYear(), dateDay, dateMonth, startHour);
    showAppealsInDOM(sortArrayOfAppealsByTime(appealsArray));

    let mainContentDay = document.querySelector(".main-content__day");
    mainContentDay.textContent = dateDay;
    let mainContentMonth = document.querySelector(".main-content__month");
    mainContentMonth.textContent = getMonthNameByNumber(dateMonth);
    let mainContentTimeSpan = document.querySelector(".main-content__time-span");
    mainContentTimeSpan.textContent = `${startHour}:00 - ${startHour}:59`;
};

let arrayOfDatesLi = document.querySelectorAll(".date__li");
arrayOfDatesLi.forEach(dateLi => {
    dateLi.addEventListener("click", () => {
        openTheDateAppeals(dateLi);
    });
});

// primary on page Editors index page we show latest date with its latest appeals  
let allDatesLi = document.querySelectorAll(".date__li");
let lastDateLi = allDatesLi[allDatesLi.length - 1];
openTheDateAppeals(lastDateLi);