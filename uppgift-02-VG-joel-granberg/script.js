// VARIABLER SOM SKA MANIPULERAS
let input = "";
let x="";


// SAMTLIGA KNAPPAR MED EVENT!!!
let btnPlus = document.getElementById('plus');
btnPlus.addEventListener('click', addPlus)
function addPlus(){
     x = document.getElementById("plus");
     input= input + x.innerText;
console.log(input)
 }

let btnMinus = document.getElementById('minus');
btnMinus.addEventListener('click', addMinus)
function addMinus(){
     x = document.getElementById("minus");
     input= input + x.innerText;
console.log(input)
 }

let btnTimes = document.getElementById('times');
btnTimes.addEventListener('click', addTimes)
function addTimes(){
     x = document.getElementById("times");
     input= input + x.innerText;
console.log(input)
 }

let btnDivide = document.getElementById('divide');
btnDivide.addEventListener('click', addDivide)
function addDivide(){
    x=document.getElementById("divide");
    input= input + x.innerText;
    console.log(input)
}

let btnOne = document.getElementById('one');
btnOne.addEventListener('click', addOne)
function addOne(){
    x=document.getElementById("one");
    input= input + x.innerText;
    console.log(input)
}

let btnTwo = document.getElementById('two');
btnTwo.addEventListener('click', addTwo)
function addTwo(){
    x=document.getElementById("two");
    input= input + x.innerText;
    console.log(input)
}

let btnThree = document.getElementById('three');
btnThree.addEventListener('click', addThree)
function addThree(){
    x=document.getElementById("three");
    input= input + x.innerText;
    console.log(input)
}

let btnFour = document.getElementById('four');
btnFour.addEventListener('click', addFour)
function addFour(){
    x=document.getElementById("four");
    input= input + x.innerText;
    console.log(input)
}

let btnFive = document.getElementById('five');
btnFive.addEventListener('click', addFive)
function addFive(){
    x=document.getElementById("five");
    input= input + x.innerText;
    console.log(input)
}

let btnSix = document.getElementById('six');
btnSix.addEventListener('click', addSix)
function addSix(){
    x=document.getElementById("six");
    input= input + x.innerText;
    console.log(input)
}

let btnSeven = document.getElementById('seven');
btnSeven.addEventListener('click', addSeven)
function addSeven(){
    x=document.getElementById("seven");
    input= input + x.innerText;
    console.log(input)
}

let btnEight = document.getElementById('eight');
btnEight.addEventListener('click', addEight)
function addEight(){
    x=document.getElementById("eight");
    input= input + x.innerText;
    console.log(input)
}

let btnNine = document.getElementById('nine');
btnNine.addEventListener('click', addNine)
function addNine(){
    x=document.getElementById("nine");
    input= input + x.innerText;
    console.log(input)
}

let btnZero = document.getElementById('zero');
btnZero.addEventListener('click', addZero)
function addZero(){
    x=document.getElementById("zero");
    input= input + x.innerText;
    console.log(input)
}

let btnComma = document.getElementById('comma');
btnComma.addEventListener('click', addComma)
function addComma(){
    x=document.getElementById("comma");
    input= input + x.innerText;
    console.log(input)
}

let btnAllClear = document.getElementById('allClear');
btnAllClear.addEventListener('click', clear)
function clear(){
    x='';
    input='';
}

let btnEquals = document.getElementById('equals');
btnEquals.addEventListener('click', calculate)
function calculate(){
   
}


 

