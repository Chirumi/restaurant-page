function home() {
    const content = document.getElementById("content")

    const headline = document.createElement("h2")
    headline.classList.add("headline")
    headline.textContent = "Savor the Flavor: Indulge in Gourmet Bliss at out Signature Burger Prince"

    const description = document.createElement("em")
    description.classList.add("description")
    description.textContent = "Welcome to Burger Prince, where each bite is a symphony of flavors crafted with culinary mastery. Our burgers redefine indulgence, featuring premium ingredients and expertly grilled patties"

    content.appendChild(headline)
    content.appendChild(description)
}

export default home()