const areas = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(){
    const calculateArea = (Number(areas[0].value) , Number(areas[1].value))/2;
    const area = Math.sqrt(calculateArea);
 outputEl.innerText ="The Area of Triangle is :" + area
 
}

areaBtn.addEventListener("click", calculateArea);