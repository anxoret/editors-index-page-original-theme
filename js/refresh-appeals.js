"use strict"

// appeals refresh onclick event
let allDateAppealRefreshSpan = document.querySelectorAll(".date__appeal-refresh-span");
allDateAppealRefreshSpan.forEach(dateAppealRefreshSpan => {
    dateAppealRefreshSpan.addEventListener("click", () => {
        console.log("Необходимо создать функцию подгрузки новых обращений.");
    });
});
