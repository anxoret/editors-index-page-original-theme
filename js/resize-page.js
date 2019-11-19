"use strict"

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
        date.style.width =  sectionsButton.offsetWidth + "px";
    });

    // delete main vertical scrolling of the page
    let header = document.querySelector(".header");
    let headerAbsoluteHeight = getElementAbsoluteHeight(header);

    datesSidebar.style.height = `calc(100vh - ${headerAbsoluteHeight}px)`;

    let mainContent =  document.querySelector(".main-content");
    mainContent.style.height = `calc(100vh - ${headerAbsoluteHeight}px)`;

    let sectionButtonWrapper =  document.querySelector(".section__button-wrapper");
    sectionButtonWrapper.style.width = `${getElementAbsoluteWidth(datesSidebar) 
        - getLeftAndRightMarginsSum(datesSidebar) - getLeftAndRightMarginsSum(sectionButtonWrapper)}px`;

    let searchInformation = document.querySelector(".search-information");
    let selectedAppeals = document.querySelector(".selected-appeals");
    appealsContainer.style.height = `calc(${getElementAbsoluteHeight(datesSidebar)}px 
        - ${getElementAbsoluteHeight(searchInformation)}px - ${getElementAbsoluteHeight(selectedAppeals)}px + 25px + 10px)`;
};