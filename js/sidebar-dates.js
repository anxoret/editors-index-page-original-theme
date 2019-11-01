"use strict"

const fillSidebarWithDates = ((sidebarInDOM, monthName, startDay, endDay) => {

    for (let i = startDay; i <= endDay; i++) {

        let dateDiv = document.createElement("div");
        dateDiv.classList = "date date_first-theme";
        sidebarInDOM.append(dateDiv);
    
        let dateNameDiv = document.createElement("div");
        dateNameDiv.classList = "date__name date__name_first-theme";
        dateNameDiv.innerText = `${i} ${monthName}`;
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

            let timeStr = `${startHour}:${startMinutes} - ${startHour}:${minutes + 59}`;
            dateLi.innerText = timeStr;
            dateUl.append(dateLi);

            hour++;
            allHours--;
        }
    }
});

let datesSidebar = document.querySelector(".dates-sidebar");
fillSidebarWithDates(datesSidebar, "июня", 9, 22);