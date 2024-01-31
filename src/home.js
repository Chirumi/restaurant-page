function home() {
    const contentContainer = document.createElement("div")
    contentContainer.classList.add("contentContainer")

    const headlineDescWrapper = document.createElement("div")
    const headline = document.createElement("h1")
    headline.textContent = "Indulge in Flavour: Discover Burger Prince's Signature Burgers!"
    const description = document.createElement("em")
    description.textContent = "Welcome to Burger Prince, where each bite is a symphony of flavors crafted with culinary mastery. Our burgers redefine indulgence, featuring premium ingredients and expertly grilled patties"
    
    const imgWrapper = document.createElement("div")
    const img = new Image()
    img.classList.add("imgHome")
    img.src = "./photos/pexels-chevanon-photography-1108117.jpg"

    headlineDescWrapper.appendChild(headline)
    headlineDescWrapper.appendChild(description)
    imgWrapper.appendChild(img)
    contentContainer.appendChild(headlineDescWrapper)
    contentContainer.appendChild(imgWrapper)
    content.prepend(contentContainer)

    contentContainer.classList.add("fadeIn", "fadeOut")

    requestAnimationFrame(() => {
        contentContainer.classList.remove("fadeOut")
    })

    return contentContainer
}

export default home()