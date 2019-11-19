"use strict"

const fillSidebarWithDates = ((sidebarInDOM, monthName, startDay, endDay) => {

    for (let i = startDay; i <= endDay; i++) {

        let dateDiv = document.createElement("div");
        dateDiv.classList = "date date_first-theme";
        sidebarInDOM.append(dateDiv);

        let dateNameDiv = document.createElement("div");
        dateNameDiv.classList = "date__name date__name_first-theme date__name_arrow-right";
        dateNameDiv.innerHTML = `<span class="date__day date__day_first-theme">${i}</span>
        <span class="date__month date__month_first-theme">${monthName}</span>
        ` ;
        dateDiv.append(dateNameDiv);

        let dateUl = document.createElement("ul");
        dateUl.classList = "date__ul date__ul_first-theme date__ul_close";
        dateDiv.append(dateUl);

        let allHours = 24;
        let hour = 0;
        let minutes = 0;

        while (allHours > 0) {
            let dateLi = document.createElement("li");
            dateLi.classList = "date__li date__li_first-theme";

            let startHour = hour;
            if (startHour < 10) {
                startHour = "0" + startHour;
            }

            let startMinutes = minutes;
            if (startMinutes < 10) {
                startMinutes = "0" + startMinutes;
            }

            let timeStr = `
                <span class="date__time-span date__time-span_first-theme"><span class="date__start-hour-span date__start-hour-span_first-theme">${startHour}</span>:<span class="date__start-minutes-span date__start-minutes-span_first-theme">${startMinutes}</span>
                - <span class="date__end-hour-span date__end-hour-span_first-theme">${startHour}</span>:<span class="date__end-minutes-span date__end-minutes-span_first-theme">${minutes + 59}</span>
                <span class="date__appeal-refresh-span date__appeal-refresh-span_first-theme date__appeal-refresh-span_close">&#8635;</span></span>
            `;
            dateLi.innerHTML = timeStr;
            dateUl.append(dateLi);

            hour++;
            allHours--;
        }
    }
});

// primary on page Editors index page we show latest==current date with its latest appeals  
let datesSidebar = document.querySelector(".dates-sidebar");
fillSidebarWithDates(datesSidebar, "июня", 9, 22);

let numberOfDateTimePeriods = document.querySelectorAll(".date__ul").length;
let lastDateTimePeriods = document.querySelectorAll(".date__ul")[numberOfDateTimePeriods - 1];
lastDateTimePeriods.classList.remove("date__ul_close");

let numberOfDatesLi = lastDateTimePeriods.querySelectorAll(".date__li").length;
let dateLiSelected = lastDateTimePeriods.querySelectorAll(".date__li")[numberOfDatesLi - 1];
dateLiSelected.classList.add("date__li_selected");
dateLiSelected.querySelector(".date__appeal-refresh-span").classList.toggle("date__appeal-refresh-span_close");

// appeals refresh onclick event
let allDateAppealRefreshSpan = document.querySelectorAll(".date__appeal-refresh-span");
allDateAppealRefreshSpan.forEach(dateAppealRefreshSpan => {
    dateAppealRefreshSpan.addEventListener("click", () => {
        console.log("Необходимо создать функцию подгрузки новых обращений.");
    });
});

