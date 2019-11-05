// Adding count of marked appeals to html page
let allAppealMarks = document.querySelectorAll(".appeal__mark");

let selectedAppealsNumber = 0;
let selectedAppealsNumberSpan = document.querySelector(".selected-appeals__number");
selectedAppealsNumberSpan.textContent = selectedAppealsNumber;

allAppealMarks.forEach(appealMark => {
    appealMark.addEventListener("click", () => {
        if (appealMark.classList.contains("appeal__mark_marked")) {
            appealMark.classList.remove("appeal__mark_marked");
            selectedAppealsNumber--;
            selectedAppealsNumberSpan.textContent = selectedAppealsNumber;
        } else {
            appealMark.classList.add("appeal__mark_marked");
            selectedAppealsNumber++;
            selectedAppealsNumberSpan.textContent = selectedAppealsNumber;
        }
        
    });
});
