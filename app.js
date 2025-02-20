let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let declare = document.querySelector('p');

//playerX, playerO

let turnO = true;

let winning_patterns =
[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];


boxes.forEach((box, index)=>{
    box.addEventListener('click',()=>{
       console.log(`Button ${index} was clicked`)
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }
       else
       {
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;

       checkWInner();
    })
})

const checkWInner = () => {
    for(let pattern of winning_patterns){
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1!= "" && val2!="" && val3!= ""){
            if(val1 === val2 && val2 === val3){
                let val = val1
                console.log(`${val} is the Winner`)
                disableBoxes();
                showWinner(val);
            }
        }
        


    }
}

const showWinner=(val) =>{
    declare.innerText = `🎉🎉🎉 ${val} is the Winner 🎉🎉🎉`;
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


reset.addEventListener('click', () => {
    turnO = true;
    enableBoxes();
    declare.innerText = "GAME BEGINS";
    location.reload();

})



// THEME TOGGLER

let t1 = document.querySelector('#theme1');
let t2 = document.querySelector('#theme2');
let t3 = document.querySelector('#theme3');

let h1 = document.querySelector('.header')
let body = document.querySelector('body');
let XObox = document.querySelectorAll('.box');
let rstbtn = document.querySelector('.reset');
let spans = document.querySelectorAll('.spans');
let themeSelectText = document.querySelector('.themeSelectText');

t1.addEventListener('click', () => {
    body.style.background = '#4D7298';
    h1.classList.add('t1_h1');
    rstbtn.classList.add('t1_reset');
    
    for (let box of XObox){
        box.classList.add('t1_box');
    }
    themeSelectText.style.color= '#00000080'
    for (let span of spans){
        span.classList.add('t1_spans');
    }

})

t2.addEventListener('click', () => {
    body.style.background = '#086788';
    h1.classList.add('t2_h1');
    rstbtn.classList.add('t2_reset');
    for (let box of XObox){
        box.classList.add('t2_box');
    }
    themeSelectText.style.color= '#00000080'
    for (let span of spans){
        span.classList.add('t1_spans');
    }
})

t3.addEventListener('click', () => {
    body.style.background = '#E7CFBC';
    h1.classList.add('t3_h1');
    rstbtn.classList.add('t3_reset');
    for (let box of XObox){
        box.classList.add('t3_box');
    }
    themeSelectText.style.color= '#00000080'
    for (let span of spans){
        span.classList.add('t1_spans');
    }

    
})

const images = [
    "./Assets/img1.jpg",
    "./Assets/img2.jpg",
    "./Assets/img3.jpg",
    "./Assets/img4.jpg",
    "./Assets/img5.jpg",
    "./Assets/img6.jpg",
    "./Assets/img7.jpg",
    "./Assets/img8.jpg",
    "./Assets/img9.jpg",

];

let specialMode = false;
const specialThemeBtn = document.getElementById("theme4");
let isSpecialThemeActive = false; // Initially disabled

// Activate Special Theme
specialThemeBtn.addEventListener("click", function () {
    isSpecialThemeActive = true;
    body.style.background = '#F4C2C2'
    // alert("Special Theme Activated! Click on the boxes to reveal images.");
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
    h1.style.color= 'white';
    h1.innerText = 'Special Mode Activated';
        
    
});

// Click event for boxes (only works if the theme is activated)
XObox.forEach((box, index) => {
    box.addEventListener("click", function () {
        if (isSpecialThemeActive && !this.style.backgroundImage) {
            this.style.backgroundImage = `url('${images[index]}')`;
            this.style.backgroundSize = "cover"; 
            this.style.backgroundPosition = "center";
            box.innerText = '';
        }
    });
});

