/* Desenvolva sua lógica aqui */
export const handleRegisterValue = (array) => {
    const modalController = document.querySelector(".modal__controller")
    const input = document.querySelector("input")
    const button = document.querySelector(".modal__controller > form > .box__submit > .button__insert-value")

    let newValue = {}
    let count = 0

    button.addEventListener("click", (event) => {

        event.preventDefault()

        newValue.id = array.length + 1

        if(input.name == 'value') {
            newValue.value = Number(input.value)
        }

        console.log(newValue)
    })
}

