
const baseValue = document.querySelector("#baseValue");
const heightValue = document.querySelector("#heightValue");
const hypoBtn = document.querySelector("#hypoBtn");
const hypoOP = document.querySelector("#hypoOP");


function hypoBtnHandler(){
    const square = (number) => number ** 2 ;
    let baseSqu = (Number(baseValue.value)) ;
    let heightSqu =  (Number(heightValue.value)) ;
    let calc = (Math.sqrt(square(baseSqu) + square(heightSqu) )) ;
    hypoOP.innerText = `Length of Hypotenuse is ${calc}`;
}

hypoBtn.addEventListener("click", hypoBtnHandler)
