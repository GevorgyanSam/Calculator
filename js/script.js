"use strict";

const display = document.getElementById("result");
const darkTheme = document.querySelector("img");

darkTheme.addEventListener("click", darkThemeFunc);

function darkThemeFunc(){
    if(document.body.classList.contains("dark")) {
        darkTheme.src = "img/sun.jpg";
        document.body.classList.remove("dark");
    } else {
        darkTheme.src = "img/moon.png";
        document.body.classList.add("dark");
    }
}

function num(x) {
    switch (x) {
        case 1:
            display.value += "1";
            break;
        case 2:
            display.value += "2";
            break;
        case 3:
            display.value += "3";
            break;
        case 4:
            display.value += "4";
            break;
        case 5:
            display.value += "5";
            break;
        case 6:
            display.value += "6";
            break;
        case 7:
            display.value += "7";
            break;
        case 8:
            display.value += "8";
            break;
        case 9:
            display.value += "9";
            break;
        case 0:
            display.value += "0";
            break;
    }
}

function operator(op) {
    switch (op) {
        case "+":
            display.value += "+";
            break;
        case "-":
            display.value += "-";
            break;
        case "/":
            display.value += "/";
            break;
        case "*":
            display.value += "*";
            break;
        case ".":
            display.value += ".";
            break;
    }
}

function clearAll(){
    display.value = "";
}

function final(){
    display.value = +eval(display.value);
}