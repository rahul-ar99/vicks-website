header1 = document.querySelector("header")
navbar = document.querySelector("#main header nav")
hamsburg = document.querySelector("#hamsburgsec")
hamsburgicon = document.querySelector(".fa-bars")
hamsburgclose = document.querySelector(".fa-close")
body = document.querySelector("body")
searchicon = document.querySelector("#main header nav button i")


const findVicks = [
    {
        id:1,
        head: "NyQuil",
        image: "YourVicks-1"
    },
    {
        id:2,
        head: "DayQuil",
        image: "YourVicks-2"
    },
    {
        id:3,
        head: "vicksVapo",
        image: "YourVicks-3"
    },
    {
        id:4,
        head: "Sinex",
        image: "YourVicks-4"
    },
    {
        id:5,
        head: "VapoCOOL",
        image: "YourVicks-5"
    },
    {
        id:6,
        head: "Vicks",
        image: "YourVicks-6"
    },
    {
        id:7,
        head: "FluTherapy",
        image: "YourVicks-7"
    },
]


// ------------- navbar color changing -----------
function changeColor(){
    header1.style.backgroundColor = "#ffffff"
    navbar.style.color = "#09357a"
}
function resetColor(){
    if(window.scrollY < 50){
        header1.style.backgroundColor = "transparent"
        navbar.style.color = "#ffffff"
    }
}
window.addEventListener("scroll" ,()=>{
    // console.log(window.scrollY)
    if(window.scrollY > 50){
        header1.style.backgroundColor = "#ffffff"
        navbar.style.color = "#09357a"
    }
    else{
        header1.style.backgroundColor = "transparent"
        navbar.style.color = "#ffffff"
    }
})

// ---------------  hamsburg ------------------
window.addEventListener("click",(e)=>{

    if(e.target==hamsburgicon){
        hamsburg.style.top = `${window.scrollY}px`

        hamsburg.style.display = "flex"
        hamsburgicon.style.display = "none"
        hamsburgclose.style.display = "flex"
        body.style.overflow = "hidden"
        searchicon.style.color = "#09357a"
        header1.style.backgroundColor = "#ffffff"
        hamsburg.style.width = "100vw"
    }
    else if(e.target==hamsburgclose){
        hamsburgicon.style.display = "flex"
        hamsburgclose.style.display = "none"
        hamsburg.style.display = "none"
        body.style.overflow = "auto"
        searchicon.style.color = "inherit"
    }
})
const findVicksInput = document.getElementById("findvicksinput")

findVicksInput.addEventListener("change",()=>})
var findVicksdata = []
findVicks.map((e)=>{
    console.log(findVicksdata)
    if(e.head.indexOf("a") != -1){
        findVicksdata.push(e)
    }
    
})



// find vicks scrolling div
var fullBox = document.querySelector('#findvicks .wrapper .content .mainpart .fullbox')

findVicks.forEach(element =>{
    fullBox.innerHTML +=`
    <div class="singlebox" onclick="handleModal(${element.id})">
    <div class="imagecontainer">
    <img src="./asset/images/${element.image}.webp" alt="vicks image">
    </div>
    <div class="imagehead">
    <h5>${element.head}</h5>
    </div>
    </div>
    `
})


// scroll function
var scrollingBoolian = true

function onClickScroll(scrolling) {
    console.log("hesfaslk")
    const asdf = document.querySelector("#findvicks .wrapper .content .mainpart .fullbox")
    const yourVicksDivWidth = document.querySelector("#findvicks .wrapper .content .mainpart .fullbox .singlebox").offsetWidth
    const yourVicksDivGap = document.querySelector("#findvicks .wrapper .content .mainpart .fullbox")
    // console.log(yourVicksDivGap)
    if(scrollingBoolian){
        scrollingBoolian = false
        if(scrolling == "right"){
            asdf.scrollLeft += (yourVicksDivWidth + 20)
        }
        else{
            asdf.scrollLeft -= yourVicksDivWidth + 20
        }
        setTimeout(()=>scrollingBoolian = true, 500)
    }
    console.log(asdf.scrollLeft)
}


// modal function
var userModal = document.querySelectorAll("#findvicks .wrapper .content .mainpart .fullbox .singlebox")
var userModalid = document.getElementById("findvicksmodal")
var modalImg = document.querySelector('#findvicksmodal .left')
var modalHead = document.querySelector('#findvicksmodal .right .head')
var modal = userModalid.parentElement;


// open a modal

function handleModal(id){
    findVicks.forEach(element => {
        if(id == element.id){
            modalImg.innerHTML = `
                <img src="./asset/images/YourVicks-${id}.webp" alt="vicks image">
            `
            modalHead.innerHTML = `<h3>${element.head}</h3>`
            // console.log(id)
        }
    })
    userModalid.style.display = 'flex'
}
function handleCloseModal(){
    userModalid.style.display = 'none'
}



window.addEventListener("click",(e)=>{
    if(e.target != userModalid){
        // console.log("asfdsf")
    }
    // userModal.forEach(element => {
    //     if("findvicksmodal"==e.target){
    //         console.log("sdfsdf")
    //     }
    //     console.log(element)
    //     console.log(e.target)
    // });

})