function menu() {
    const menuContent = document.createElement("div")
    menuContent.classList.add("menuContent")

    const itemOne = createMenuItem("pexels-ata-ebem-10560076.jpg", "Chicken Burger", "Delicious Chicken Burger")
    const itemTwo = createMenuItem("pexels-arjunn-la-19055681.jpg", "Beef Burger", "Delicious Beef Burger")
    const itemThree = createMenuItem("pexels-valeriya-kobzar-17322389.jpg", "Cheesy Chicken Burger", "Delicious Cheesy Chicken Burger")
    const itemFour = createMenuItem("pexels-vilnis-husko-13573666.jpg", "Cheesy Beef Burger", "Delicious Cheesy Beef Burger")

    menuContent.appendChild(itemOne)
    menuContent.appendChild(itemTwo)
    menuContent.appendChild(itemThree)
    menuContent.appendChild(itemFour)

    return menuContent
}

function createMenuItem (img, name, description) {
    const itemContainer = document.createElement("div")
    itemContainer.classList.add("menuItem") // Add class to itemcontainers for styling
    const nameDescContainer = document.createElement("div") // separate img and descriptions for styling

    const itemImg = document.createElement("img")
    itemImg.src = "../src/photos/" + `${img}`

    const itemName = document.createElement("div")
    itemName.classList.add("itemName")
    itemName.textContent = name

    const itemDesc = document.createElement("div") 
    itemName.classList.add("itemDesc")
    itemDesc.textContent = description

    nameDescContainer.appendChild(itemName)
    nameDescContainer.appendChild(itemDesc)

    itemContainer.appendChild(itemImg)
    itemContainer.appendChild(nameDescContainer)


    return itemContainer
}

export default menu()