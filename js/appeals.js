"use strict"

let arrayOfMonths = [
    "января", "февраля", "марта",
    "апреля", "мая", "июня",
    "июля", "августа", "сентября", 
    "октября", "ноября", "декабря"
];

const getMonthNumberByName = (arrayOfMonths, monthName) => {

    let monthNumber;

    arrayOfMonths.forEach( (month, number) => {
        if (month == monthName) {
            monthNumber = number + 1;
        }
    });

    return monthNumber;

};

const getMonthNameByNumber = (arrayOfMonths, monthNumber) => {
    let monthName = arrayOfMonths[monthNumber + 1];
    return monthName;
};

const getRandomNumber = (min, max) => {
    let randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
    return randomNumber;
};

const getRandomStatus = () => {
    let arrayOfStatuses = [
        "Логин редактирует", 
        "Логин редактировал", 
        "Логин просматривает", 
        "Логин просматривал",
        ""
    ];

    let randomStatusNumber = getRandomNumber(0, 4);
    let randomStatus = arrayOfStatuses[randomStatusNumber];

    return randomStatus;
};

let text = 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель рекламных текстов, напоивший его языком и речью и заманивший в свое агенство, которое использовало его снова и снова в своих проектах. И если его не переписали, то живет он там до сих пор. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель рекламных текстов, напоивший его языком и речью и заманивший в свое агенство, которое использовало его снова и снова в своих проектах. И если его не переписали, то живет он там до сих пор.Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград,';
const getRandomText = () => {
    let strLength = getRandomNumber(10, 900);
    let string = text.substr(0,strLength);

    return string;
};

const createAppealObject = (yearOfCreation, monthOfCreation, dayOfCreation, hourOfCreation) => {
    let appeal = {};

    appeal.yearOfCreation = yearOfCreation;
    appeal.monthOfCreation = getMonthNumberByName(arrayOfMonths, monthOfCreation);
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

const makeAppealInteractionsHtmlString = () => {
    let htmlString = `
        <div title="Выбрать" class="appeal__mark appeal__mark_first-theme">
        </div>
        <div title="Редактировать" class="appeal__edit appeal__edit_first-theme">
            <img class="appeal__img appeal__img_first-theme" src="img/pen2.png" alt="pen">
        </div>
        <div title="Печать" class="appeal__print appeal__print_first-theme">
            <img class="appeal__img appeal__img_first-theme" src="img/print2.png" alt="print">
        </div>
    `;

    return htmlString;
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
        let day = add0InHead(appeal.dayOfCreation);
        let month = add0InHead(appeal.monthOfCreation);
        let hour = appeal.hourOfCreation;
        let minutes = add0InHead(appeal.minutesOfCreation);
        let seconds = add0InHead(appeal.secondsOfCreation);

        year = year.slice(2, 4);

        let timeString = `${day}.${month}.${year} ${hour}:${minutes}:${seconds}`;

        let appealDate = document.createElement("span");
        appealDate.classList = "appeal__date appeal__date_first-theme";
        appealDate.innerHTML = timeString;
        appealInformationDiv.append(appealDate);

        let appealStatus = document.createElement("span");
        appealStatus.classList = "appeal__status appeal__status_first-theme";
        appealStatus.textContent = appeal.status;
        appealInformationDiv.append(appealStatus);

        let appealInteractions = document.createElement("div");
        appealInteractions.classList = "appeal__interactions appeal__interactions_first-theme";
        appealInteractions.innerHTML = makeAppealInteractionsHtmlString();
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

            let appealArrows = document.createElement("div");
            appealArrows.classList = "appeal__arrows appeal__arrows_first-theme";
            appealArrows.innerHTML = `
                <img title="Открыть весь текст" class="appeal__img appeal__img_first-theme" src="img/arrows-green.png" alt="open-all-text">
            `;

            wrapper.append(appealArrows);

            appealsNumbersWithBigTexts.push(i);

            if (appeal.status == "") {
                let notViewed = document.createElement("div");
                notViewed.classList = "appeal__not-viewed appeal__not-viewed_first-theme";
                notViewed.setAttribute("title", "Отметить просмотренным");
                appealInformationDiv.append(notViewed);

                numbersOfNotViewedAppeals.push(i);
            }
        } else if (appeal.status == "") {
            appealText.textContent = appeal.text;
            wrapper.append(appealText);

            let notViewed = document.createElement("div");
            notViewed.classList = "appeal__not-viewed appeal__not-viewed_first-theme";
            notViewed.setAttribute("title", "Отметить просмотренным");
            appealInformationDiv.append(notViewed);

            numbersOfNotViewedAppeals.push(i);
        } else {
            appealText.textContent = appeal.text;
            wrapper.append(appealText);
        }

    });
};

const openAndCloseAllAppealText = () => {
    let appealsInDOM = document.querySelectorAll(".appeal");

    appealsNumbersWithBigTexts.forEach((appealNumber, i) => {
        let appealImg = appealsInDOM[appealNumber].querySelector(".appeal__arrows .appeal__img");
        appealImg.addEventListener("click", () => {
            let appealRestText = document.querySelectorAll(".appeal__rest-text-span")[i];
            appealRestText.classList.toggle("appeal__rest-text-span_close");

            let appealEllipsisSpan = document.querySelectorAll(".appeal__ellipsis-span")[i];
            appealEllipsisSpan.classList.toggle("appeal__ellipsis-span_close");

            appealImg.classList.toggle("appeal__arrows_up");
        });
    });
};

