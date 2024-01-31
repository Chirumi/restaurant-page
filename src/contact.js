import locationMap from "./photos/locationMap.jpg"

function contact() {
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contacts")

    const locImgWrapper = document.createElement("div")
    locImgWrapper.classList.add("locImgWrapper")
    const locationImg = document.createElement("img")
    locationImg.src = locationMap

    const contactInfo = document.createElement("div")
    contactInfo.classList.add("contactInfo")

    const openHrs = document.createElement("div")
    const monFri = document.createElement("div")
    monFri.innerHTML = "Monday - Friday: <b>9am - 11:30pm</b>"
    const satSun = document.createElement("div")
    satSun.innerHTML = "Saturday & Sunday: <b>8:30am - 12am</b>"
    const contactNum = document.createElement("div")
    contactNum.innerHTML = "Call <b>+00 0123456789</b>"
    const contactEmail = document.createElement("div")
    contactEmail.textContent = "restaurantPage@restaurantPage.com"

    openHrs.appendChild(monFri)
    openHrs.appendChild(satSun)
    contactInfo.appendChild(openHrs)
    contactInfo.appendChild(contactNum)
    contactInfo.appendChild(contactEmail)
    locImgWrapper.appendChild(locationImg)
    contactContainer.appendChild(locImgWrapper)
    contactContainer.appendChild(contactInfo)

    return contactContainer
}

export default contact()