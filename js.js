function calculateBMI(){
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    height = height/100;
    var bmi = weight/ (height * height);
    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
    result.style.display='block';
}

var x = document.getElementById("event");
x.addEventListener("mouseover", firstFunction);
x.addEventListener("click", secondFunction);
x.addEventListener("mouseout", thirdFunction);
window.addEventListener("resize", fourthFunction);

function firstFunction() {
    document.getElementById("demo").innerHTML += "hovered the button<br>";  
}
function secondFunction() {
    document.getElementById("demo").innerHTML += "clicked the button<br>";
}
function thirdFunction() {
    document.getElementById("demo").innerHTML += "pointer is moved<br>";
}
function fourthFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}