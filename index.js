const slides = document.querySelectorAll(".slide")

const addActiveClasses = () => {
    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            clearActiveClasses()
            slide.classList.add("active")
        })
    })
}

const clearActiveClasses = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}

addActiveClasses()
