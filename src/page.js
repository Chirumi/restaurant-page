function home() {
    const content = document.getElementById("content")

    const headline = document.createElement("h1")
    headline.classList.add = "headline"
    headline.textContent = "Savor the Flavor: Indulge in Gourmet Bliss at out Signature Burger Prince"

    const description = document.createElement("em")
    description.classList.add = "description"
    description.textContent = "Welcome to Burger Prince, where each bite is a symphony of flavors crafted with culinary mastery. Our burgers redefine indulgence, featuring premium ingredients and expertly grilled patties"

    const fpImage = document.createElement("img")
    fpImage.src = "../src/photos/pexels-valeria-boltneva-1199957.jpg"

    content.appendChild(headline)
    content.appendChild(description)
    content.appendChild(fpImage)
}

export default home()