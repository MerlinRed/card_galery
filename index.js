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

const baseActiveCard = (active = Math.floor(slides.length / 2)) => {
    slides[active].classList.add('active')
    addActiveClasses()
}

baseActiveCard()
