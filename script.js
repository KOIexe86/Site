
// Boutton GitHub dans la section de présentation

document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/KOIexe86', '_blank');
});


// Cards

const buttonts = document.querySelectorAll(".Card-Btn");
const slides = document.querySelectorAll(".Slide");
const descriptions = document.querySelectorAll(".Description");

buttonts.forEach((button) => {
    button.addEventListener("click", (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 : -1;
        const slideActuel = document.querySelector(".active");
        const descriptionActuel = document.querySelector(".Description.active");

        newIndex = calcNextSlide + [...slides].indexOf(slideActuel);
        
        
        if (newIndex < 0) 
            newIndex = [...slides].length - 1;
        if (newIndex >= [...slides].length) 
            newIndex = 0;

        slides [newIndex].classList.add("active");
        slideActuel.classList.remove("active");
        descriptions [newIndex].classList.add("active");
        descriptionActuel.classList.remove("active");
    })
})
