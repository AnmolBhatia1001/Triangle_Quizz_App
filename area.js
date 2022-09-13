
const areaInputOne = document.querySelector("#areaInputOne");
const areaInputTwo = document.querySelector("#areaInputTwo");
const areaBtn = document.querySelector("#areaBtn");
const areaOP = document.querySelector("#areaOP");

function calcArea(){
    let base = Number(areaInputOne.value);
    let height = Number(areaInputTwo.value);
    let areaFormula = 1/2* base * height ;
    areaOP.innerText = `Area of Triangle is ${areaFormula}`
}

areaBtn.addEventListener("click", calcArea);