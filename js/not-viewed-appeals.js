"use strict"

const changeDOMAppealStatus = (appeal) => {
    let appealStatus = appeal.querySelector(".appeal__status");
    appealStatus.textContent = "Логин просматривал";
};

const hideEyeIcon = (appeal) => {
    let notViewedIcon = appeal.querySelector(".appeal__not-viewed");
    notViewedIcon.style.display = "none";
};

let appeals = document.querySelectorAll(".appeal");

numbersOfNotViewedAppeals.forEach( (number) => {
    let eyeIcon = appeals[number].querySelector(".appeal__not-viewed");
    eyeIcon.addEventListener("click", () => {
        changeDOMAppealStatus(appeals[number]);
        hideEyeIcon(appeals[number]);
    });

    let arrowsImg = appeals[number].querySelector(".appeal__arrows .appeal__img");
    window.addEventListener("click", (event) => {
        if (event.target == arrowsImg) {
            changeDOMAppealStatus(appeals[number]);
            hideEyeIcon(appeals[number]);
        }
    });

});