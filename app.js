const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const menu = document.getElementById("menu")
const dropDown1 = document.getElementById("features")
const dropDown2 = document.getElementById("company")
const list1 = document.querySelector(".menu-list1")
const list2 = document.querySelector(".menu-list2")


// toggle menu 
menuOpen.addEventListener("click", () => {
    openMenu()
})

function openMenu() {
    menu.style.display = "block"
}

menuClose.addEventListener("click", () => {
    closeMenu()
})

function closeMenu() {
    menu.style.display = "none"
}


// toggle dropdown1

let displayOpen = false

dropDown1.addEventListener("click", () => {
    toggleDisplay1()
})

function toggleDisplay1() {
    if (displayOpen){
        list1.style.display = "block"
        displayOpen = false
    } else {
        list1.style.display = "none "
        displayOpen = true 
    }
}

// toggle dropdown2

let displayOpen2 = false

dropDown2.addEventListener("click", ()=>{
    toggleDisplay2()
})

function toggleDisplay2(){
    if (displayOpen2){
        list2.style.display = "block"
        displayOpen2 = false
    } else {
        list2.style.display = "none"
        displayOpen2 = true
    }
}


// close dropdown when user clicks outside the dropdown

document.addEventListener("click", (e) => {
    let target = e.target

    if (!dropDown1.contains(target) && !dropDown2.contains(target) && !list1.contains(target) && !list2.contains(target)) {
        list1.style.display = "none"
        list2.style.display = "none"

        displayOpen = false
        displayOpen2 =false
    }
})












// const menuOpen = document.getElementById("menu-open")
// const menuClose = document.getElementById("menu-close")
// const menu = document.getElementById("menu")
// const dropDown1 = document.getElementById("features")
// const dropDown2 = document.getElementById("company")
// const list1 = document.querySelector(".menu-list1")
// const list2 = document.querySelector(".menu-list2")


// // menu
// menuOpen.addEventListener("click", () => {
//     openMenu()
// })

// menuClose.addEventListener("click", () => {
//     closeMenu()
// })


// function openMenu() {
//     menu.style.display = "block"
// }

// function closeMenu() {
//     menu.style.display = "none"
// }

// //menu dropdown1

// let displayOpen = false

// dropDown1.addEventListener("click", () => {
//     toggleDisplay1()
// })

// function toggleDisplay1() {
//     if (displayOpen){
//         list1.style.display = "block"
//         displayOpen = false
//     } else {
//         list1.style.display = "none "
//         displayOpen = true 
//     }
// }


// //menu dropdown2

// // let displayOpen2 = false

// // dropDown2.addEventListener("click", () => {
// //     toggleDisplay2()
// // })

// // function toggleDisplay2() {
// //     if (displayOpen2){
// //         list2.style.display = "block"
// //         displayOpen2 = false
// //     } else {
// //         list2.style.display = "none "
// //         displayOpen2 = true 
// //     }
// // }



// document.addEventListener("click", (e) => {
//     var target = e.target

//     if(!list1.contains(target) && !dropDown1.contains(target) || !list2.contains(target) && !dropDown2.contains(target) ){
//         list1.style.display= "none"
//         list2.style.display= "none"
//     }
// })


