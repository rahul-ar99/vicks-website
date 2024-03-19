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

// onhover color changing
function changeColor(){
    header1.style.backgroundColor = "#ffffff"
    navbar.style.color = "#09357a"
}

// mouseout reset default color
function resetColor(){
    if(window.scrollY < 50){
        header1.style.backgroundColor = "transparent"
        navbar.style.color = "#ffffff"
    }
}

// onscroll navbar color change
window.addEventListener("scroll" ,()=>{
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





// ------------------------ find your vicks input ---------------------

const findVicksInput = document.getElementById("findvicksinput")
const findVicksArrowBtn = document.querySelectorAll("#findvicks .wrapper .content .mainpart .scrollbtn")

var findVicksAfterMap = []

function inputChange(e){
    findVicksAfterMap = []
    // findVicksAfterMap = findVicks.map((element)=>{
    findVicks.map((element)=>{
        if(((element.head).toLowerCase()).indexOf(e.toLowerCase())>= 0){
            // return element
            findVicksAfterMap.push(element)
        }
        // return 0
    })
    // find vicks scrolling div
    var fullBox = document.querySelector('#findvicks .wrapper .content .mainpart .fullbox')
    var fullboxContent = ''
    fullBox.innerHTML = ''
    if(findVicksAfterMap.length >0){
        findVicksAfterMap.forEach(element =>{
            if(element != 0){
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
            }
        })
    }
    else{
            fullBox.innerHTML +=`
                <div class="singlebox1">
                    <h5>no items</h5>
                </div>
           `
    }

    if(findVicksAfterMap.length <= 4){
        for(let i=0;i<2;i++){
            findVicksArrowBtn[i].style.display = 'none'
        }
    }
    else{
        for(let i=0;i<2;i++){
            findVicksArrowBtn[i].style.display = 'flex  '
        }
    }

        
    fullBox.innerHTML += fullboxContent
}
inputChange("")

var findVicksdata = []
findVicks.map((e)=>{
    if(e.head.indexOf("a") != -1){
        findVicksdata.push(e)
    }
    
})






// scroll function
var scrollingBoolian = true

function onClickScroll(scrolling , element) {
    var fullboxscroll = document.querySelector("#findvicks .wrapper .content .mainpart .fullbox")
    var divWidth = document.querySelector("#findvicks .wrapper .content .mainpart .fullbox .singlebox").offsetWidth
    var scrollGap = 20


    const YourVicksBoxscroll = document.querySelector("#findvicks .wrapper .content .mainpart .fullbox")
    const yourVicksDivWidth = document.querySelector("#findvicks .wrapper .content .mainpart .fullbox .singlebox").offsetWidth
    const favBoxscroll = document.querySelector("#favorites .content .mainpart ul")
    const mainDivWidth = document.querySelector("#favorites .content .mainpart ul li").offsetWidth

    if(element==1){
        fullboxscroll = YourVicksBoxscroll
        divWidth = yourVicksDivWidth
        scrollGap = 20
    }
    else if(element == 0){
        fullboxscroll = favBoxscroll
        divWidth = mainDivWidth 
        scrollGap = 50
        
    }


    if(scrollingBoolian){
        scrollingBoolian = false
        if(scrolling == "right"){
            fullboxscroll.scrollLeft += (divWidth + scrollGap)
        }
        else{
            fullboxscroll.scrollLeft -= divWidth + scrollGap
        }
        setTimeout(()=>scrollingBoolian = true, 500)
    }
}


//--------------------------- modal ------------------------------------

var userModal = document.querySelectorAll("#findvicks .wrapper .content .mainpart .fullbox .singlebox")
var userModalid = document.getElementById("findvicksmodal")
var modalImg = document.querySelector('#findvicksmodal .left')
var modalHead = document.querySelector('#findvicksmodal .right .head h3')
var modalFull = document.getElementById('findvicksmodal')
var modal = userModalid.parentElement;


// open modal function

function handleModal(id){
    findVicks.forEach(element => {
        if(id == element.id){
            modalImg.innerHTML = `
                <img src="./asset/images/YourVicks-${id}.webp" alt="vicks image">
            `
            modalHead.innerHTML = `<h3>${element.head}</h3>`
        }
        
    })
    userModalid.style.display = 'flex'
    setTimeout(() => {
        modalFull.style.transform = 'scale(1)'
    }, 100);
    document.body.style.overflow = "hidden"
}

//closing modal

function handleCloseModal(){
    userModalid.style.display = 'none'
    modalFull.style.transform = 'scale(0)'
    document.body.style.overflow = "scroll"
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