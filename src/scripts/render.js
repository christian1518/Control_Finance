import { insertedValues, valuesCategory } from "./valuesData.js";

export const render = (array) => {
    const cardList = document.querySelector(".cards__list")

    cardList.innerHTML = ''

    array.forEach((element) => {
        const card = createCard(element)

        cardList.appendChild(card)
    });
}

export const createCard = (element) => {
    const card = document.createElement("li")
    const price = document.createElement("p")
    const div = document.createElement("div")
    const span = document.createElement("span")
    const button = document.createElement("button")
    const imgTrash = document.createElement("img")

    card.classList.add("list__card")
    card.dataset.elementId = element.id

    button.id = element.id

    price.classList.add("item__price")
    div.classList.add("box__type-and-button")
    span.classList.add("type__item")
    button.classList.add("item__button-remove")
    imgTrash.classList.add("image__trash")

    price.innerText = `R$ ${Number(element.value).toFixed(2)}`

    if(element.categoryID === 0) {
        span.innerText = "Entrada"
    }else {
        span.innerText = "Saída"
    }

    imgTrash.src = "./src/assets/trash.svg"

    button.appendChild(imgTrash)
    div.append(span, button)
    card.append(price, div)

    button.addEventListener("click", () => {
        buttonTash(insertedValues, element.id)
    })

    return card
}

export const categoryRender = (array) => {
    const filteredElements = array.filter((value) => {
        if(value.categoryID === 0) {
            return value
        } 
    })
    render(filteredElements)
} 

export const totalValue = (array) => {
    const span = document.querySelector(".sum__values > .sum__values-text > span")
    
    const valueTotal = array.reduce((acumulator, actual) => {
        return acumulator + actual.value
    }, 0)
    span.innerText = Number(valueTotal).toFixed(2)
}

const buttonTash = (array, elementId) => {
    const filterButton = array.findIndex((value) => {
        if(value.id === elementId) {
            return value
        }
    })
    array.splice(filterButton, 1)
    render(array)
} 