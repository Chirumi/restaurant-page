function home() {
    const content = document.getElementById("content")

    const headline = document.createElement("h2")
    headline.textContent = "Savor the Flavor: Indulge in Gourmet Bliss at out Signature Burger Prince"
    
    const description = document.createElement("em")
    description.textContent = "Welcome to Burger Prince, where each bite is a symphony of flavors crafted with culinary mastery. Our burgers redefine indulgence, featuring premium ingredients and expertly grilled patties"

    const burgerImage = document.createElement("img")

    content.appendChild(headline)
    content.appendChild(description)

    headline.classList.add("headline", "fadeIn", "fadeOut")
    description.classList.add("description", "fadeIn", "fadeOut")

    requestAnimationFrame(() => {
        headline.classList.remove("fadeOut")
        description.classList.remove("fadeOut")
    })
}

export default home()