const SCENE = document.querySelector(".scene")
const CREATE__FORM = document.querySelector("#create__animal")
const SELECTED__ANIMAL = document.querySelector("#selected__animal")
const AUDIO = document.createElement("audio")
document.body.append(AUDIO)

let topCord
let leftCord

SCENE.addEventListener("click", function (event) {
    if (event.target == SCENE) {
        topCord = event.clientY / window.innerHeight * 100 + "%"
        leftCord = event.clientX / window.innerWidth * 100 + "%"

        CREATE__FORM.style.display = "block"
        CREATE__FORM.style.top = topCord /* - 1.5 */
        CREATE__FORM.style.left = leftCord /* - 5 */
    }
})

CREATE__FORM.addEventListener("change", function () {
    // FOOD
    let animalSound
    if (SELECTED__ANIMAL.value == "🦍") animalSound = "./asset/sound/gorilla.mp3"
    else if (SELECTED__ANIMAL.value == "🐪") animalSound = "./asset/sound/camel.mp3"
    else if (SELECTED__ANIMAL.value == "🐅") animalSound = "./asset/sound/tiger.mp3"
    else if (SELECTED__ANIMAL.value == "🐸") animalSound = "./asset/sound/frog.mp3"
    else if (SELECTED__ANIMAL.value == "🦁") animalSound = "./asset/sound/lion.mp3"
    else if (SELECTED__ANIMAL.value == "🐒") animalSound = "./asset/sound/chimp.mp3"

    AUDIO.src = animalSound
    AUDIO.play()

    creatCage(SELECTED__ANIMAL.value, animalSound)
})

function creatCage(animal, sound) {
    let cageHTML = `<div class="cage" data-sound="${sound}" style="
        top: ${topCord}; left: ${leftCord}">
    <p class="emoji">${animal}</p>
    <img class="cage__img" src="./assets/img/bur.png" alt="">
    </div>`
    SCENE.innerHTML += cageHTML
    CREATE__FORM.style.display = "none"
}