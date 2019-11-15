"use strict" 

const getMonthNameByName = (monthName) => {
    switch (monthName) {
        case "января":
            return 1;
        
        case "февраля":
            return 2;

        case "марта":
            return 3;

        case "апреля":
            return 4;

        case "мая":
            return 5;
        
        case "июня":
            return 6;
        
        case "июля":
            return 7;
        
        case "августа":
            return 8;
        
        case "сентября":
            return 9;
        
        case "октября":
            return 10;
        
        case "ноября":
            return 11;
        
        case "декабря":
            return 12;

        default:
            return new Error("Неправильное название месяца");
    }

};

const getMonthNameByNumber = (monthNumber) => {
    switch (monthNumber) {
        case 1:
            return "января";
        
        case 2:
            return "февраля";

        case 3:
            return "марта";

        case 4:
            return "апреля";

        case 5:
            return "мая";
        
        case 6:
            return "июня";
        
        case 7:
            return "июля";
        
        case 8:
            return "августа";
        
        case 9:
            return "сентября";
        
        case 10:
            return "октября";
        
        case 11:
            return "ноября";
        
        case 12:
            return "декабря";

        default:
            return new Error("Неправильный порядковый номер месяца");
    }

};

const getRandomNumber = (min, max) => {
    let randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
    return randomNumber;
};

const getRandomStatus = () => {
    let status1 = "Логин редактирует";
    let status2 = "Логин редактировал";
    let status3 = "Логин просматривает";
    let status4 = "Логин просматривал";
    let status5 = "";

    let randomStatusNumber = getRandomNumber(1, 5);

    switch (randomStatusNumber) {
        case 1:
            return status1;

        case 2:
            return status2;

        case 3:
            return status3;

        case 4:
            return status4;

        case 5:
            return status5;
    

        default:
            return new Error(`У рандомного номера ${randomStatusNumber} нет статуса`);
    }

};

const getRandomText = () => {
    let str = "";
    let strLength = getRandomNumber(10, 900);

    for (let i = 0; i < strLength; i++) {
        str = str + " a";
    }

    return str;
};

const createAppealObject = (yearOfCreation, monthOfCreation, dayOfCreation, hourOfCreation) => {
    let appeal = {};

    appeal.yearOfCreation = yearOfCreation;
    appeal.monthOfCreation = monthOfCreation;
    appeal.dayOfCreation = dayOfCreation;
    appeal.hourOfCreation = hourOfCreation;
    appeal.minutesOfCreation = getRandomNumber(0, 59);
    appeal.secondsOfCreation = getRandomNumber(0, 59);
    appeal.status = getRandomStatus();
    appeal.text = getRandomText();

    return appeal;
};

const compareNumericBySeconds = (a, b) => {
    if (a.secondsOfCreation > b.secondsOfCreation) return 1;
    if (a.secondsOfCreation == b.secondsOfCreation) return 0;
    if (a.secondsOfCreation < b.secondsOfCreation) return -1;
};

const compareNumericByMinutes = (a, b) => {
    if (a.minutesOfCreation > b.minutesOfCreation) return 1;
    if (a.minutesOfCreation == b.minutesOfCreation) return compareNumericBySeconds(a, b);
    if (a.minutesOfCreation < b.minutesOfCreation) return -1;
};

const sortArrayOfAppealsByTime = (appealsArray) => {
    return appealsArray.sort(compareNumericByMinutes);
};


const createArrayOfAppeals = (yearOfCreation, monthOfCreation, dayOfCreation, hourOfCreation) => {
    let appealsArray = [...Array(getRandomNumber(6, 15))].map(() => 
        createAppealObject(yearOfCreation, dayOfCreation, monthOfCreation, hourOfCreation)
    );

    sortArrayOfAppealsByTime(appealsArray);

    return appealsArray;
};

let appealsContainer = document.querySelector(".appeals-container");
let numbersOfNotViewedAppeals = [];
let appealsNumbersWithBigTexts = [];

const showAppealsInDOM = (appealsArray) => {

    appealsArray.forEach((appeal, i) => {
        let article = document.createElement("article");
        article.classList = "appeal appeal_first-theme";
        appealsContainer.append(article);
    
        let wrapper = document.createElement("div");
        wrapper.classList = "appeal__wrapper appeal__wrapper_first-theme";
        article.append(wrapper);
    
        let appealInformationDiv = document.createElement("div");
        appealInformationDiv.classList = "appeal__information appeal__information_first-theme";
        wrapper.append(appealInformationDiv);

        let year = appeal.yearOfCreation + "";
        let day = appeal.dayOfCreation;
        let month = appeal.monthOfCreation;
        let hour = appeal.hourOfCreation;
        let minutes = appeal.minutesOfCreation;
        let seconds = appeal.secondsOfCreation;

        year = year.slice(2, 4);

        if (day < 10) {
            day = "0" + day;
        }
    
        if (month < 10) {
            month = "0" + month;
        }
    
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        let timeStr = `${day}.${month}.${year} ${hour}:${minutes}:${seconds}`;

        let appealDate = document.createElement("span");
        appealDate.classList = "appeal__date appeal__date_first-theme";
        appealDate.innerHTML = timeStr;
        appealInformationDiv.append(appealDate);
    
        let appealStatus = document.createElement("span");
        appealStatus.classList = "appeal__status appeal__status_first-theme";
        appealStatus.textContent = appeal.status;
        appealInformationDiv.append(appealStatus);
    
        let appealInteractions = document.createElement("div");
        appealInteractions.classList = "appeal__interactions appeal__interactions_first-theme";
        appealInteractions.innerHTML = `
            <div title="Выбрать" class="appeal__mark appeal__mark_first-theme"></div>
            <div title="Редактировать" class="appeal__edit appeal__edit_first-theme">
                <img class="appeal__img appeal__img_first-theme" src="img/edit.png" alt="edit">
            </div>
            <div title="Печать" class="appeal__print appeal__print_first-theme">
                <img class="appeal__img appeal__img_first-theme" src="img/print.png" alt="print">
            </div>
        `;
        wrapper.append(appealInteractions);
    
        let appealText = document.createElement("div");
        appealText.classList = "appeal__text appeal__text_first-theme";
    
        if (appeal.text.length > 600) {
            let allText = appeal.text;
            let cuttenText = allText.slice(0, 601);
            let restText = allText.slice(601);
    
            appealText.textContent = cuttenText;
            wrapper.append(appealText);
    
            let ellipsisSpan = document.createElement("span");
            ellipsisSpan.classList = "appeal__ellipsis-span appeal__ellipsis-span_first-theme";
            ellipsisSpan.textContent = "...";
            appealText.append(ellipsisSpan);
    
            let restTextSpan = document.createElement("span");
            restTextSpan.classList = "appeal__rest-text-span appeal__rest-text-span_first-theme appeal__rest-text-span_close";
            restTextSpan.textContent = restText;
            appealText.append(restTextSpan);
    
            let appealInteractions2 = document.createElement("div");
            appealInteractions2.classList = "appeal-interactions2 appeal-interactions2_first-theme";
            wrapper.append(appealInteractions2);

            let appealOpenAllText = document.createElement("div");
            appealOpenAllText.classList = "appeal__open-all-text appeal__open-all-text_first-theme";
            appealOpenAllText.innerHTML = `
                <div class="appeal__arrows appeal__arrows_first-theme">
                    <img class="appeal__img appeal__img_first-theme" src="img/expand-more.png" alt="open-all-text">
                    <img class="appeal__img appeal__img_first-theme" src="img/expand-more.png" alt="open-all-text"></img>
                </div>
            `;
            
            appealInteractions2.append(appealOpenAllText);
    
            appealsNumbersWithBigTexts.push(i);

            if (appeal.status == "") {
                let notViewed = document.createElement("div");
                notViewed.classList = "appeal__not-viewed appeal__not-viewed_first-theme";
                notViewed.innerHTML = `
                    <img class="appeal__img appeal__img_first-theme" src="img/not-viewed.png" alt="not-viewed">
                `;
                appealInformationDiv.append(notViewed);

                numbersOfNotViewedAppeals.push(i);
            }
        } else if (appeal.status == "") {
            appealText.textContent = appeal.text;
            wrapper.append(appealText);

            let appealInteractions2 = document.createElement("div");
            appealInteractions2.classList = "appeal-interactions2 appeal-interactions2_first-theme";

            let notViewed = document.createElement("div");
            notViewed.classList = "appeal__not-viewed appeal__not-viewed_first-theme";
            notViewed.innerHTML = `
                <img class="appeal__img appeal__img_first-theme" src="img/not-viewed.png" alt="not-viewed">
            `;
            appealInformationDiv.append(notViewed);

            numbersOfNotViewedAppeals.push(i);
        } else {
            appealText.textContent = appeal.text;
            wrapper.append(appealText);
        }
    
        
    });
};

