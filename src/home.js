function home() {
    const content = document.getElementById("content")

    const contentContainer = document.createElement("div")

    const headline = document.createElement("h1")
    headline.textContent = "Indulge in Flavour: Discover Burger Prince's Signature Burgers!"
    
    const description = document.createElement("em")
    description.textContent = "Welcome to Burger Prince, where each bite is a symphony of flavors crafted with culinary mastery. Our burgers redefine indulgence, featuring premium ingredients and expertly grilled patties"

    contentContainer.appendChild(headline)
    contentContainer.appendChild(description)
    content.prepend(contentContainer)

    headline.classList.add("fadeIn", "fadeOut")
    description.classList.add("fadeIn", "fadeOut")

    requestAnimationFrame(() => {
        headline.classList.remove("fadeOut")
        description.classList.remove("fadeOut")
    })
}

export default home()