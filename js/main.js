"use strict"

window.addEventListener("load", resizeElements);

window.addEventListener("resize", () => {
    // console.log("Запуск!");
    setTimeout( () => resizeElements(), 1500)
});
