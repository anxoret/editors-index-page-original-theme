"use strict"

const add0InHead = (number) => {
    if (number < 10) {
        number = "0" + number;
        return number;
    } else return number;
};

const makeTimeHTMLString = (startHour, startMinutes, minutes) => {
    let timeString = `
        <span class="date__time-span date__time-span_first-theme"><span class="date__start-hour-span date__start-hour-span_first-theme">${startHour}</span>:<span class="date__start-minutes-span date__start-minutes-span_first-theme">${startMinutes}</span>
        - <span class="date__end-hour-span date__end-hour-span_first-theme">${startHour}</span>:<span class="date__end-minutes-span date__end-minutes-span_first-theme">${minutes + 59}</span>
        <span class="date__appeal-refresh-span date__appeal-refresh-span_first-theme date__appeal-refresh-span_close">&#8635;</span></span>
    `;
    return timeString;
};

const fillSidebarWithDates = ((sidebarInDOM, monthName, startDay, endDay) => {

    for (let day = startDay; day <= endDay; day++) {

        let dateDiv = document.createElement("div");
        dateDiv.classList = "date date_first-theme";
        sidebarInDOM.append(dateDiv);

        let dateNameDiv = document.createElement("div");
        dateNameDiv.classList = "date__name date__name_first-theme date__name_arrow-right";
        dateNameDiv.innerHTML = `<span class="date__day date__day_first-theme">${day}</span>
            <span class="date__month date__month_first-theme">${monthName}</span>
        `;
        dateDiv.append(dateNameDiv);

        let dateUl = document.createElement("ul");
        dateUl.classList = "date__ul date__ul_first-theme date__ul_close";
        dateDiv.append(dateUl);

        let hour = 0;
        let minutes = 0;

        while (hour < 24) {
            let dateLi = document.createElement("li");
            dateLi.classList = "date__li date__li_first-theme";

            let startHour = add0InHead(hour);
            let startMinutes = add0InHead(minutes);

            let timeString = makeTimeHTMLString(startHour, startMinutes, minutes);
            dateLi.innerHTML = timeString;
            dateUl.append(dateLi);

            hour++;
        }
    }
});

let datesSidebar = document.querySelector(".dates-sidebar");
fillSidebarWithDates(datesSidebar, "июня", 9, 22);


