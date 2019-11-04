"use strict" 

const createAppealObject = (date, status, appealText) => {
    let appeal = {};

    appeal.date = date;
    appeal.status = status;
    appeal.text = appealText;

    return appeal;
};

const getRandomNumber = (min, max) => {
    let randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
    return randomNumber;
};

const getRandomStatus = () => {
    let status1 = "Логин редактирует";
    let status2 = "Логин редактировал";
    let status3 = "";

    let randomStatusNumber = getRandomNumber(1, 3);

    switch (randomStatusNumber) {
        case 1:
            return status1;

        case 2:
            return status2;

        case 3:
            return status3;

        default:
            return new Error(`У рандомного номера ${randomStatusNumber} нет статуса`)
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

let appealsArray = [];
appealsArray.length = getRandomNumber(6, 15);

let day = 9;
let hour = 0;

for (let i = 0; i < appealsArray.length; i++) {
    if (day < 10) {
        day = "0" + day;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    let date = `${day}.06.2019 ${hour}:00:00`;
    let status = getRandomStatus();
    let text = getRandomText();
    appealsArray[i] = createAppealObject(date, status, text);
    day++;
    hour++;
};

let appealsContainer = document.querySelector(".appeals-container");
let appealsNumbersWithBigTexts = [];

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

    let appealDate = document.createElement("span");
    appealDate.classList = "appeal__date appeal__date_first-theme";
    appealDate.textContent = appeal.date;
    appealInformationDiv.append(appealDate);

    let appealStatus = document.createElement("span");
    appealStatus.classList = "appeal__status appeal__status_first-theme";
    appealStatus.textContent = appeal.status;
    appealInformationDiv.append(appealStatus);

    let appealInteractions = document.createElement("div");
    appealInteractions.classList = "appeal__interactions appeal__interactions_first-theme";
    appealInteractions.innerHTML = `
        <div title="Отметить обращение" class="appeal__mark appeal__mark_first-theme"></div>
        <div class="appeal__edit appeal__edit_first-theme">
            <img class="appeal__img appeal__img_first-theme" src="img/edit.png" alt="edit">
        </div>
        <div class="appeal__print appeal__print_first-theme">
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

        let appealOpenAllText = document.createElement("div");
        appealOpenAllText.classList = "appeal__open-all-text appeal__open-all-text_first-theme";
        appealOpenAllText.innerHTML = `
            <div class="appeal__arrows appeal__arrows_first-theme">
                <img class="appeal__img appeal__img_first-theme" src="img/expand_more.png" alt="open-all-text">
                <img class="appeal__img appeal__img_first-theme" src="img/expand_more.png" alt="open-all-text">
            </div>
        `;
        wrapper.append(appealOpenAllText);

        appealsNumbersWithBigTexts.push(i);
    } else {
        appealText.textContent = appeal.text;
        wrapper.append(appealText);
    }

    
});

let appealsInDOM = document.querySelectorAll(".appeal");

appealsNumbersWithBigTexts.forEach( (appealNumber, i) => {
    let appealArrows = appealsInDOM[appealNumber].querySelector(".appeal__arrows");
        appealArrows.addEventListener("click", () => {
            let appealRestText = document.querySelectorAll(".appeal__rest-text-span")[i];
            appealRestText.classList.toggle("appeal__rest-text-span_close");

            let appealEllipsisSpan = document.querySelectorAll(".appeal__ellipsis-span")[i];
            appealEllipsisSpan.classList.toggle("appeal__ellipsis-span_close");

            appealArrows.classList.toggle("appeal__arrows_up");
        });
});

