"use strict"

// перенести функцию в show-and-hide-elements.js
// перенести appealsNumbersWithBigTexts в параметры, передаваемые функции
const openAndCloseAllAppealText = () => {
    let appealsInDOM = document.querySelectorAll(".appeal");

    appealsNumbersWithBigTexts.forEach( (appealNumber, i) => {
        let appealImg = appealsInDOM[appealNumber].querySelector(".appeal__arrows .appeal__img");
            appealImg.addEventListener("click", () => {
                let appealRestText = document.querySelectorAll(".appeal__rest-text-span")[i];
                appealRestText.classList.toggle("appeal__rest-text-span_close");

                let appealEllipsisSpan = document.querySelectorAll(".appeal__ellipsis-span")[i];
                appealEllipsisSpan.classList.toggle("appeal__ellipsis-span_close");

                appealImg.classList.toggle("appeal__arrows_up");
            });
    });
};

const openTheDateAppeals = (dateLi) => {
    let date = dateLi.parentElement.parentElement;
    let dateName = date.querySelector(".date__name");
    let dateDay = dateName.querySelector(".date__day").innerText;
    let dateMonth = dateName.querySelector(".date__month").innerText;
    let startHour = dateLi.querySelector(".date__start-hour-span").innerText;

    let appealsContainer = document.querySelector(".appeals-container");
    appealsContainer.innerHTML = "";

    let appealsArray = createArrayOfAppeals((new Date()).getFullYear(), dateDay, dateMonth, startHour);
    appealsNumbersWithBigTexts = [];    
    showAppealsInDOM(appealsArray);

    let mainContentDay = document.querySelector(".main-content__day");
    mainContentDay.textContent = dateDay;
    let mainContentMonth = document.querySelector(".main-content__month");
    mainContentMonth.textContent = dateMonth;
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
        if (dateLiSelected) {
            dateLiSelected.classList.remove("date__li_selected");
            dateLiSelected.querySelector(".date__appeal-refresh-span").classList.toggle("date__appeal-refresh-span_close");
        }

        dateLi.classList.add("date__li_selected");
        dateLiSelected = dateLi;
        dateLiSelected.querySelector(".date__appeal-refresh-span").classList.toggle("date__appeal-refresh-span_close");
    });
});

