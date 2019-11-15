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
let allDates = document.querySelectorAll(".date");
let lastDate = allDates[allDates.length - 1];
let allLastDateLi = lastDate.querySelectorAll(".date__li");
let lastDateLi = allLastDateLi[allLastDateLi.length - 1];
openTheDateAppeals(lastDateLi);
let lastDateName = lastDate.querySelector(".date__name");
lastDateName.classList.remove("date__name_arrow-right");
lastDateName.classList.add("date__name_arrow-down");

const getTopAndButtomMarginsSum = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let elementStyles = window.getComputedStyle(element);
    let topAndButtomMargins = parseFloat(elementStyles["marginTop"]) 
        + parseFloat(elementStyles["marginBottom"]);

    return topAndButtomMargins;
};

const getLeftAndRightMarginsSum = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let elementStyles = window.getComputedStyle(element);
    let leftAndRightMargins = parseFloat(elementStyles["marginLeft"]) 
    + parseFloat(elementStyles["marginRight"]);

    return leftAndRightMargins;
};

const getElementAbsoluteHeight = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let topAndButtomMargins = getTopAndButtomMarginsSum(element);
    
    return Math.ceil(element.offsetHeight + topAndButtomMargins);
};

const getElementAbsoluteWidth = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;
    
    let leftAndRightMargins = getLeftAndRightMarginsSum(element);

    return Math.ceil(element.offsetWidth + leftAndRightMargins);
};

const resizeElements = () => {

    let sectionsButton = document.querySelector(".sections__button");
    let dates = document.querySelectorAll(".date");

    dates.forEach(date => {
        date.style.width =  + sectionsButton.offsetWidth + "px";
    });

    // give to .main-content width remaining from .dates-sidebar 
    let mainContent =  document.querySelector(".main-content");

    // delete main scrolling of the page
    let header = document.querySelector(".header");
    let headerAbsoluteHeight = getElementAbsoluteHeight(header);

    datesSidebar.style.height = `calc(100vh - ${headerAbsoluteHeight}px)`;
    mainContent.style.height = `calc(100vh - ${headerAbsoluteHeight}px)`;

    let sectionButtonWrapper =  document.querySelector(".section__button-wrapper");
    sectionButtonWrapper.style.width = `${getElementAbsoluteWidth(datesSidebar) 
        - getLeftAndRightMarginsSum(datesSidebar) - getLeftAndRightMarginsSum(sectionButtonWrapper)}px`;

    let searchInformation = document.querySelector(".search-information");
    let selectedAppeals = document.querySelector(".selected-appeals");
    appealsContainer.style.height = `calc(${getElementAbsoluteHeight(datesSidebar)}px 
        - ${getElementAbsoluteHeight(searchInformation)}px - ${getElementAbsoluteHeight(selectedAppeals)}px + 25px)`;
};

// datesSidebar.scrollTop = datesSidebar.scrollHeight;

// resizeElements();