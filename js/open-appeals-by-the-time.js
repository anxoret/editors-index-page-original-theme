"use strict"

// open and close all appeal text
const openAndCloseAllAppealText = () => {
    let appealsInDOM = document.querySelectorAll(".appeal");

    appealsNumbersWithBigTexts.forEach( (appealNumber, i) => {
        let appealArrows = appealsInDOM[appealNumber].querySelector(".appeal__arrows");
            appealArrows.addEventListener("click", () => {
                let appealRestText = document.querySelectorAll(".appeal__rest-text-span")[i];
                appealRestText.classList.toggle("appeal__rest-text-span_close");

                let appealEllipsisSpan = document.querySelectorAll(".appeal__ellipsis-span")[i];
                appealEllipsisSpan.classList.toggle("appeal__ellipsis-span_close");

                appealArrows.classList.toggle("appeal__arrows_up");
            });
    });
};

const openTheDateAppeals = (dateLi) => {
    let date = dateLi.parentElement.parentElement;
    let dateName = date.querySelector(".date__name");
    let dateDay = dateName.querySelector(".date__day").innerText;
    let dateMonth = getMonthNameByName(dateName.querySelector(".date__month").innerText);
    let startHour = dateLi.querySelector(".date__start-hour-span").innerText;

    let appealsContainer = document.querySelector(".appeals-container");
    appealsContainer.innerHTML = "";

    let appealsArray = createArrayOfAppeals((new Date()).getFullYear(), dateDay, dateMonth, startHour);
    appealsNumbersWithBigTexts = [];    
    showAppealsInDOM(appealsArray);

    let mainContentDay = document.querySelector(".main-content__day");
    mainContentDay.textContent = dateDay;
    let mainContentMonth = document.querySelector(".main-content__month");
    mainContentMonth.textContent = getMonthNameByNumber(dateMonth);
    let mainContentTimeSpan = document.querySelector(".main-content__time-span");
    mainContentTimeSpan.textContent = `${startHour}:00-${startHour}:59`;

    giveAppealsOpportunityToGetMarked();
    openAndCloseAllAppealText();
};

let arrayOfDatesLi = document.querySelectorAll(".date__li");
arrayOfDatesLi.forEach(dateLi => {
    dateLi.addEventListener("click", () => {
        openTheDateAppeals(dateLi);
        dateLiSelected = document.querySelector(".date__li_selected");
        dateLiSelected.classList.remove("date__li_selected");
        dateLi.classList.add("date__li_selected");
        dateLiSelected.querySelector(".date__appeal-refresh-span").classList.toggle("date__appeal-refresh-span_close");
        dateLiSelected = dateLi;
        dateLiSelected.querySelector(".date__appeal-refresh-span").classList.toggle("date__appeal-refresh-span_close");
    });
});

// primary on page Editors index page we show latest date with its latest appeals  
let allDatesLi = document.querySelectorAll(".date__li");
let lastDateLi = allDatesLi[allDatesLi.length - 1];
openTheDateAppeals(lastDateLi);

// delete main scrolling of the page
const getElementAbsoluteHeight = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let elementStyles = window.getComputedStyle(element);
    let topAndButtomMargins = parseFloat(elementStyles["marginTop"]) 
        + parseFloat(elementStyles["marginBottom"]);
    
    return Math.ceil(element.offsetHeight + topAndButtomMargins);
};

let header = document.querySelector(".header");
let headerAbsoluteHeight = getElementAbsoluteHeight(header);

datesSidebar.style.height = `calc(100vh - ${headerAbsoluteHeight}px - 10px)`;

let mainContent =  document.querySelector(".main-content");
mainContent.style.height = `calc(100vh - ${headerAbsoluteHeight}px)`;

// search-information
// appeals-container
let searchInformation = document.querySelector(".search-information");

appealsContainer.style.height = (getElementAbsoluteHeight(mainContent) 
    - getElementAbsoluteHeight(searchInformation) - 20) + "px";