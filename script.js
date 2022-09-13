// Is Triangle

const angleOneInput = document.querySelector("#angleOneInput");
const angleTwoInput = document.querySelector("#angleTwoInput");
const angleThreeInput = document.querySelector("#angleThreeInput");
const isTriBtn = document.querySelector("#isTriBtn")
const isTriOP = document.querySelector("#isTriOP");

function checkIsTriangle(){
    console.log("test");
    isTriOP.style.display = "block";
    let sum = Number(angleOneInput.value) + Number(angleTwoInput.value) + Number(angleThreeInput.value);
    if(sum === 180){
        isTriOP.innerText = "Correct Answer";
    }else{
        isTriOP.innerText = "Wrong Answer";
    }
    console.log("test");
}

isTriBtn.addEventListener("click", checkIsTriangle);













