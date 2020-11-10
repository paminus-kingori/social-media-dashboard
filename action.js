body = document.querySelector(".body");
toggleBtn = document.querySelector(".toggle-btn");
circle = document.querySelector(".white-circle");
cards = document.querySelectorAll(".media-card");
smallCards = document.querySelectorAll(".view-card");
viewNumber = document.querySelectorAll(".view-number");
largeNum = document.querySelectorAll(".large-number");
title = document.querySelector(".media-title");
overview = document.querySelector(".overview");
attr = document.querySelector(".attribution");
topBg=document.querySelector(".lighterBg");
viewText = document.querySelectorAll(".view-text");
followers = document.querySelectorAll(".followers");

let textArray = [viewNumber,largeNum];
let textArray2 = [title,overview,attr];



toggleBtn.addEventListener('click',()=>{

    body.classList.toggle("dark");
    toggleBtn.classList.toggle("green");
    circle.classList.toggle("move");
    circle.classList.toggle("dark");
    topBg.classList.toggle("topBg");

    viewText.forEach(viewText => {
    viewText.classList.toggle("brightGrey");
    });

    followers.forEach(followers => {
        followers.classList.toggle("brightGrey");
            });

    smallCards.forEach(cards => {        
        cards.classList.toggle("card-dark");
    });
    cards.forEach(cards => {       
        cards.classList.toggle("card-dark");
    });
    textArray.forEach(textArray => {
        textArray.forEach(textArray => {
            textArray.classList.toggle("white");
        });
    });

    textArray2.forEach(textArray2 =>{
        textArray2.classList.toggle("white");
    });
});


