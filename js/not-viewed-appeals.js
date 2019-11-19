let appeals = document.querySelectorAll(".appeal");

// 182 appeals.js
numbersOfNotViewedAppeals.forEach( (number) => {
    appeals[number].addEventListener("click", () => {
        let appealStatus = appeals[number].querySelector(".appeal__status");
        appealStatus.textContent = "Логин просматривал";

        let notViewedIcon = appeals[number].querySelector(".appeal__not-viewed");
        notViewedIcon.style.display = "none";
    });
});