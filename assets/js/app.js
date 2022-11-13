function changeStaffColor() {
    // for each line in the staff, change to the appropriate color.
    for (var i = 1; i < 6; i++) {
        var elements = document.getElementsByClassName("staffLine" + i); // get all elements
        for (var j = 0; j < elements.length; j++) {
            elements[j].style.backgroundColor = getValueOfPicker("picker" + i);
        }
    }
}

function getValueOfPicker(id) {
    var pickerColor = document.getElementById(id).value;
    return pickerColor;
}

function changeLineSpacing() {
    var userInput = document.getElementById("lineSpaceInput").value;
    var lineValue = userInput * 10;
    var staffLines = document.getElementsByClassName("staffLine");
    for (var i = 0; i < staffLines.length; i++) {
        staffLines[i].style.marginBottom = lineValue + "px";
    }

    var staves = document.getElementsByClassName("staff");
    for (var i = 0; i < staves.length; i++) {
        var initialSpacing = 80;
        staves[i].style.marginBottom = (initialSpacing * userInput) + "px";
    }
}

function changeLineWidth() {
    var userInput = document.getElementById("lineWidthInput").value;
    var lineValue = userInput;
    var staffLines = document.getElementsByClassName("staffLine");
    for (var i = 0; i < staffLines.length; i++) {
        staffLines[i].style.height = lineValue + "px";
    }
}

function resetToBlack() {
    document.getElementById("picker1").value = "#ff0000";
    document.getElementById("picker2").value = "#ff8000";
    document.getElementById("picker3").value = "#0040ff";
    document.getElementById("picker4").value = "#40ff00";
    document.getElementById("picker5").value = "#bf00ff";

    document.getElementById("lineSpaceInput").value = 1;
    document.getElementById("lineWidthInput").value = 2;

    var staffLines = document.getElementsByClassName("staffLine");
    for (var i = 0; i < staffLines.length; i++) {
        staffLines[i].style.backgroundColor = "black";
        staffLines[i].style.height = 2 + "px";
        staffLines[i].style.marginBottom = "10px"
    }

    var staves = document.getElementsByClassName("staff");
    for (var i = 0; i < staves.length; i++) {
        staves[i].style.marginBottom = "80px"
    }
}

function updateStaff() {
    changeStaffColor();
    changeLineSpacing();
    changeLineWidth();
}

function presetGrayScale() {
    var black = "#000000";
    var grey = "#808080";
    document.getElementById("picker1").value = black;
    document.getElementById("picker2").value = grey;
    document.getElementById("picker3").value = black;
    document.getElementById("picker4").value = grey;
    document.getElementById("picker5").value = black;
}

function presetRGB() {
    var red = "#ff0000";
    var green = "#40ff00";
    var blue = "#0040ff";
    document.getElementById("picker1").value = red;
    document.getElementById("picker2").value = green;
    document.getElementById("picker3").value = blue;
    document.getElementById("picker4").value = green;
    document.getElementById("picker5").value = red;
}

function presetColorBlind() {
    var orange = "#f5793a";
    var purple = "#a95aa1";
    var blue = "#0f2080";
    document.getElementById("picker1").value = orange;
    document.getElementById("picker2").value = purple;
    document.getElementById("picker3").value = blue;
    document.getElementById("picker4").value = purple;
    document.getElementById("picker5").value = orange;
}

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);
