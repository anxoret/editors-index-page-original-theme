// console.log(numbersOfNotViewedAppeals.length);

let appeals = document.querySelectorAll(".appeal");

numbersOfNotViewedAppeals.forEach( (number) => {
    appeals[number].addEventListener("click", () => {
        let appealStatus = appeals[number].querySelector(".appeal__status");
        appealStatus.textContent = "Логин просматривал";

        let notViewedIcon = appeals[number].querySelector(".appeal__not-viewed");
        notViewedIcon.style.display = "none";
    });
});

// datesNames.forEach((dateName, i) => {
//     dateName.addEventListener("click", () => {
//         let ul = dates[i].querySelector(".date__ul");
//         showAndHideDateUl(ul, "date__ul_close");
//         dateHoverOnAndOff(dateName);
//     });
// });