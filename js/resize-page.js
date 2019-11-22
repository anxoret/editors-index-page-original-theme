"use strict"

const getTopButtomMarginsSum = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let elementStyles = window.getComputedStyle(element);
    let topAndButtomMargins = parseFloat(elementStyles["marginTop"])
        + parseFloat(elementStyles["marginBottom"]);

    return topAndButtomMargins;
};

const getLeftRightMarginsSum = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let elementStyles = window.getComputedStyle(element);
    let leftAndRightMargins = parseFloat(elementStyles["marginLeft"])
        + parseFloat(elementStyles["marginRight"]);

    return leftAndRightMargins;
};

const getElementAbsoluteHeight = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let topAndButtomMargins = getTopButtomMarginsSum(element);

    return Math.ceil(element.offsetHeight + topAndButtomMargins);
};

const getElementAbsoluteWidth = (element) => {
    element = (typeof element === "string") ? document.querySelector(element) : element;

    let leftAndRightMargins = getLeftRightMarginsSum(element);

    return Math.ceil(element.offsetWidth + leftAndRightMargins);
};

// uncorrect height of content (display 1920x1080)
const resizeElements = () => {
    let sections = document.querySelector(".sections_first-theme");
    let arrayOfSectionLi = document.querySelectorAll(".section-navigation__li");
    let sectionsAbsoluteHeight = getElementAbsoluteHeight(sections);

    for (let sectionLi of arrayOfSectionLi) {
        sectionLi.style.height = sectionsAbsoluteHeight + "px";
    }

    
    let sectionsButton = document.querySelector(".sections__button");
    let dates = document.querySelectorAll(".date");

    dates.forEach(date => {
        date.style.width = sectionsButton.offsetWidth + "px";
    });

    // delete main vertical scrolling of the page
    let header = document.querySelector(".header");
    let headerAbsoluteHeight = getElementAbsoluteHeight(header) + 7;
    console.log(headerAbsoluteHeight);

    datesSidebar.style.height = `calc(100vh - ${headerAbsoluteHeight}px)`;
    let datesSidebarAbsoluteWidth = getElementAbsoluteWidth(datesSidebar);
    let datesSidebarLeftRightMargins = getLeftRightMarginsSum(datesSidebar);
    
    let mainContent = document.querySelector(".main-content");
    mainContent.style.height = `calc(100vh - ${headerAbsoluteHeight}px)`;
    let mainContentAbsoluteHeight = getElementAbsoluteHeight(mainContent);

    let sectionButtonWrapper = document.querySelector(".section__button-wrapper");
    let sectionButtonWrapperLeftRightMargins = getLeftRightMarginsSum(sectionButtonWrapper);
    sectionButtonWrapper.style.width = datesSidebarAbsoluteWidth 
        - datesSidebarLeftRightMargins 
        - sectionButtonWrapperLeftRightMargins 
        + "px"
    ;

    let searchInformation = document.querySelector(".search-information");
    let searchInformationAbsoluteHeight = getElementAbsoluteHeight(searchInformation);

    let selectedAppeals = document.querySelector(".selected-appeals");
    let selectedAppealsAbsoluteHeight = getElementAbsoluteHeight(selectedAppeals);
    appealsContainer.style.height = mainContentAbsoluteHeight 
        - searchInformationAbsoluteHeight 
        - selectedAppealsAbsoluteHeight 
        + "px"; 

};

window.addEventListener("load", resizeElements);

window.addEventListener("resize", () => {
    setTimeout( () => resizeElements(), 1500)
});
