import { render, totalValue } from "./render.js"

/* Desenvolva sua lógica aqui */
export const handleRegisterValue = (array) => {
    const modal = document.querySelector(".modal__controller")
    const input = document.querySelector("input")
    const button = document.querySelector(".modal__controller > form > .box__submit > .button__insert-value")

    let newValue = {}
    let count = 0

    const buttonEnter = document.getElementById("0")
    const buttonExit = document.getElementById("1")

    buttonEnter.addEventListener("click", () => {
        newValue.categoryID = 0
    })

    buttonExit.addEventListener("click", () => {
        newValue.categoryID = 1
    })

    button.addEventListener("click", (event) => {
        event.preventDefault()

        newValue.id = array.length + 1

        if(input.value == '') {
            count++
        }

        if(input.name == 'value') {
            newValue.value = Number(input.value)
        }
        
        if(count !== 0) {
            count = 0

            return alert("Por favor, preencha todos os campos do formulário.")
        }

        array.push(newValue)
        newValue = {}
        
        render(array)
        modal.close()
        totalValue(array)
    })
}


