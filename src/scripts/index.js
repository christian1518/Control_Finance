import { insertedValues } from "./valuesData.js";
import { render, totalValue } from "./render.js";
import { handleRegisterValue } from "./modal.js";

function handlefilter() {
    const all = document.getElementById("btn__all")
    const enter = document.getElementById("btn__enter")
    const exit = document.getElementById("btn__exit")
    const cardList = document.querySelector(".cards__list")
    
    all.addEventListener("click", () => {
        const filteredElements = insertedValues.filter((value) => {
            if(value.categoryID === 0 || value.categoryID === 1) {
                return value
            }  
        })
        cardList.innerHTML = ''
        render(insertedValues)
        totalValue(filteredElements)
    })
    
    enter.addEventListener("click", () => {
        const filteredElements = insertedValues.filter((value) => {
            if(value.categoryID === 0) {
                return value
            }  
        })
        cardList.innerHTML = ''
        render(filteredElements)
        totalValue(filteredElements)
    })
    
    exit.addEventListener("click", () => {
        const filteredElements = insertedValues.filter((value) => {
            if(value.categoryID === 1) {
                return value
            }  
        })
        cardList.innerHTML = ''
        render(filteredElements)
        totalValue(filteredElements)
    })
}

const handleModal = () => {
    const modalController = document.querySelector(".modal__controller")
    const registerBtn = document.querySelector(".register__button")

    registerBtn.addEventListener("click", () => {
        modalController.showModal()

        closeModal()
    })
}

const closeModal = () => {
    const buttonClose = document.querySelector(".button__close")
    const modalController = document.querySelector(".modal__controller")

    buttonClose.addEventListener("click", () => {
        modalController.close()
    })
}

render(insertedValues)
handlefilter(insertedValues)
handleRegisterValue(insertedValues)
handleModal()