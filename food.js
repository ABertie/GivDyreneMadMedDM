// VARIABLES =================================================
const pointBox = document.querySelector("#point") //point
const dragFoodBox = FOOD__CONTAINER.querySelectorAll(".food") //selected foods

var point = 0

//EVENTS på elementerne
dragFoodBox.forEach(function(element){
    element.addEventListener("dragstart", startDrag);
})

//FUNKTIONER
function startDrag (event){ 
    // event.dataTransfer.setData("foodId", this.id) // Skal kun bruges hvis vi fjerner maden
    event.dataTransfer.setData("foodName", this.dataset.food)
}

function cancelDefault(event){
    event.preventDefault();
    //kan bruges til at "aflyse" eventet
}

function dropMad(event){
    // let madId = event.dataTransfer.getData("foodId"); // Skal kun bruges hvis vi fjerner maden 
    let madType = event.dataTransfer.getData("foodName").parentElement;
    let iLike = this.dataset.food; // kalder dyrets dataset -> iLike
    console.log("yes");

    if (iLike.include(madType)) {
        point = point + 100  
    } else{
        point = point - 100;
    } 
    pointBox.innerHTML = point  
    
}
pointBox.innerHTML = point
       