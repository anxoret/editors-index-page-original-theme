"use strict"

window.addEventListener("load", resizeElements);

window.addEventListener("resize", () => {
    setTimeout( () => resizeElements(), 1500)
});
