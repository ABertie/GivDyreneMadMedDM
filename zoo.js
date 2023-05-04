const SCENE = document.querySelector(".scene")
const CREATE__FORM = document.querySelector("#create__animal")
const SELECTED__ANIMAL = document.querySelector("#selected__animal")
const FOOD__CONTAINER = document.querySelector(".food__container")
const AUDIO = document.createElement("audio")
document.body.append(AUDIO)

let topCord
let leftCord

SCENE.addEventListener("click", function (event) {
    if (event.target == SCENE) {
        topCord = event.clientY / window.innerHeight * 100 + "%"
        leftCord = event.clientX / window.innerWidth * 100 + "%"

        CREATE__FORM.style.display = "block"
        CREATE__FORM.style.top = topCord 
        CREATE__FORM.style.left = leftCord 
    }
})

SELECTED__ANIMAL.addEventListener("change", function () {
    let animalFood
    if (SELECTED__ANIMAL.value == "./assets/img/trex-pic.png") {
        animalFood = "meat"
    } else if (SELECTED__ANIMAL.value == "./assets/img/pterosaurs-pic.png") {
        animalFood = "meat"
    } else if (SELECTED__ANIMAL.value == "./assets/img/triceratops-pic.png") {
        animalFood = "plant"
    } else if (SELECTED__ANIMAL.value == "./assets/img/raptor-pic.png") {
        animalFood = "meat"
    } else if (SELECTED__ANIMAL.value == "./assets/img/sauropods-pic.png") {
        animalFood = "plant"
    } else if (SELECTED__ANIMAL.value == "./assets/img/stegosaurus-pic.png") {
        animalFood = "frugt"
    } 

    creatCage(SELECTED__ANIMAL.value, animalFood)

    if (SCENE.childNodes.length > 0) FOOD__CONTAINER.style.display = "block"
})

function creatCage(animal, likeFood) {
    const cageHTML = document.createElement("div")
    const createAnimal = document.createElement("img")
    const createCage = document.createElement("img")
    cageHTML.classList.add('cage')
    cageHTML.dataset.food = likeFood
    cageHTML.style.top = topCord
    cageHTML.style.left = leftCord
    createAnimal.src = animal
    createAnimal.classList.add('emoji')
    createCage.src = "./assets/img/bur.png"
    createCage.classList.add('cage__img')
    cageHTML.append(createAnimal)
    cageHTML.append(createCage)

    createCage.addEventListener("dragover", cancelDefault);
    createCage.addEventListener("drop", dropMad);
    
    SCENE.append(cageHTML)
    CREATE__FORM.style.display = "none"
}

// document.addEventListener('click', function(e) {
//     console.log(e.target);
// })