"use strict"

const fillSidebarWithDates = ((sidebarInDOM, monthName, startDay, endDay) => {

    for (let i = startDay; i <= endDay; i++) {

        let dateDiv = document.createElement("div");
        dateDiv.classList = "date date_first-theme";
        sidebarInDOM.append(dateDiv);
    
        let dateNameDiv = document.createElement("div");
        dateNameDiv.classList = "date__name date__name_first-theme";
        dateNameDiv.textContent = `${i} ${monthName}`;
        dateDiv.append(dateNameDiv);

        let dateUl = document.createElement("ul");
        dateUl.classList = "date__ul date__ul_first-theme date__ul_close";
        dateDiv.append(dateUl);

        let allHours = 24;
        let hour = 0;
        let minutes = 0;

        while(allHours > 0) {
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

            // let timeStr = `${startHour}:${startMinutes} - ${startHour}:${minutes + 59}`;
            let timeStr = `
                <span class="date__start-hour-span">${startHour}<span>:<span class="date__start-minutes-span">${startMinutes}</span>
                - <span class="date__end-hour-span">${startHour}</span>:<span class="date__end-minutes-span">${minutes + 59}</span>
            `;
            dateLi.innerHTML = timeStr;
            dateUl.append(dateLi);

            hour++;
            allHours--;
        }
    }
});

// primary on page Editors index page we show latest date with its latest appeals  
let datesSidebar = document.querySelector(".dates-sidebar");
fillSidebarWithDates(datesSidebar, "июня", 9, 22);

let lastDateTimePeriods = document.querySelectorAll(".date__ul")[22 - 9];
lastDateTimePeriods.classList.remove("date__ul_close");

let dateLiSelected = lastDateTimePeriods.querySelectorAll(".date__li")[23].classList.add("date__li_selected");

datesSidebar.scrollTop = datesSidebar.scrollHeight;