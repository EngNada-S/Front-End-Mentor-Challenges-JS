let ratingScreen=document.querySelector(".rating-screen");
let thankYouScreen=document.querySelector(".thank-you-screen");
let submitButton = document.getElementById("submit-rating");
let ratingOptions = document.querySelectorAll(".rating-options li");
let selectedRating = null;

ratingOptions.forEach((li) => {
    li.addEventListener("click", (e) => {
        const clickedRating = e.target;
        const ratingValue = clickedRating.dataset.value;
        
        if (selectedRating === ratingValue) {
            clickedRating.style.backgroundColor = "";
            clickedRating.style.color="";
            selectedRating = null;
        } else {
            ratingOptions.forEach((item) => {
                item.style.backgroundColor = "";
                item.style.color = "";
            });
            
            clickedRating.style.backgroundColor = "var(--White)";
            clickedRating.style.color="var(--Grey-900)";
            selectedRating = ratingValue;
        }
    });
});

submitButton.addEventListener("click",()=>{
    if(!selectedRating){
        alert("Please select a rating first!");
        return;
    }
    showThankYouScreen();
});

function showThankYouScreen(){  
    ratingScreen.classList.remove("show");
    thankYouScreen.classList.add("show");

    document.getElementById("selected-rating-value").textContent=selectedRating;
}