// 1: Get the node with the  main title
console.log(document.querySelector("h1"))

// ... your code here

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

console.log(document.querySelector("h1").innerText)


// ... your code here

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items
console.log(document.getElementsByClassName("fruit-item"))

// ... your code here

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

Array.from(document.getElementsByClassName("veggie-item")).forEach(elem=>{console.log(elem.innerText)})


// ... your code here

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

console.log("subtitlte: ",document.querySelectorAll("h2")[1].innerText)

// ... your code here

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

document.querySelector("#container h2").id = "fruit-title"

// ... your code here

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

document.querySelectorAll(".fruit-item")[0].classList.add ("best-fruit")
document.querySelectorAll(".fruit-item")[2].classList.add ("best-fruit")


// ... your code here


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const veggiesPre =document.querySelector(".veggies")
veggiesPre.classList.remove ("veggies")
veggiesPre.classList.add ("manuelita")





// ... your code here

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies
document.querySelectorAll(".veggie-item").forEach(elem=>{elem.classList.add ("veggie-love")})




// ... your code here

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

document.querySelectorAll(".veggie-item").forEach(elem=>{
    if(elem.innerText === "Spinach") {elem.classList.remove ("veggie-item")}
})


// ... your code here

// => ... <li class="veggie-love">Spinach</li>