let questions = document.querySelectorAll(".faq-question");
let answers = document.querySelectorAll(".faq-answer");
let toggleButons = document.querySelectorAll(".faq-toggle img");

questions.forEach((question) => {
    question.addEventListener("click", (e) => {
        let currentQuestion = e.currentTarget;
        let toggleBtn = currentQuestion.querySelector("button img");
        let answer = currentQuestion.nextElementSibling;

        if (currentQuestion.classList.contains("show")) {
            currentQuestion.classList.remove("show");
            toggleBtn.src = "assets/images/icon-plus.svg";
            answer.classList.remove("open");
            answer.style.maxHeight = "";
        } else {
            questions.forEach((quest, i) => {
                quest.classList.remove("show");
                answers[i].classList.remove("open");
                answers[i].style.maxHeight = "";
            });
            toggleButons.forEach((btn) => btn.src = "assets/images/icon-plus.svg");

            currentQuestion.classList.add("show");
            toggleBtn.src = "assets/images/icon-minus.svg";
            answer.classList.add("open");
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
    });
});

// Set the first answer open by default
answers[0].classList.add("open");
answers[0].style.maxHeight = `${answers[0].scrollHeight}px`;