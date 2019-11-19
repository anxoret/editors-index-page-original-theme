// primary on page we show latest date with its latest appeals  

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
        - ${getElementAbsoluteHeight(searchInformation)}px - ${getElementAbsoluteHeight(selectedAppeals)}px + 25px + 10px)`;
};