function contact() {
    const contactContainer = document.createElement("div")

    const locationImg = document.createElement("img")

    const openHrs = document.createElement("div")
    const monFri = document.createElement("div")
    monFri.textContent = "Monday - Friday: 9am - 11:30pm"
    const satSun = document.createElement("div")
    satSun.textContent = "Saturday & Sunday: 8:30am - 12am"
    const contactNum = document.createElement("div")
    contactNum.textContent = "Call +00 0123456789"
    const contactEmail = document.createElement("div")
    contactEmail.textContent = "restaurantPage@restaurantPage.com"

    openHrs.appendChild(monFri)
    openHrs.appendChild(satSun)
    contactContainer.appendChild(locationImg)
    contactContainer.appendChild(openHrs)
    contactContainer.appendChild(contactNum)
    contactContainer.appendChild(contactEmail)

    return contactContainer
}

export default contact()