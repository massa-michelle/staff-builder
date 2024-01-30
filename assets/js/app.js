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

function changeLineSpacing(size) {
    var staffLines = document.getElementsByClassName("staffLine");
    var staves = document.getElementsByClassName("staff");

    for (var i = 0; i < staffLines.length; i++) {
        if (size == "small") {
            staffLines[i].style.marginBottom = 10 + "px";
        }

        if (size == "medium") {
            staffLines[i].style.marginBottom = 20 + "px";
        }

        if (size == "large") {
            staffLines[i].style.marginBottom = 30 + "px";
        }
    }

    for (var i = 0; i < staves.length; i++) {
        var initialSpacing = 80;

        if (size == "small") {
            staves[i].style.marginBottom = (initialSpacing * 1) + "px";
        }

        if (size == "medium") {
            staves[i].style.marginTop = (initialSpacing * 1.2) + "px";
            staves[i].style.marginBottom = (initialSpacing * 1.4) + "px";
        }

        if (size == "large") {
            staves[i].style.marginTop = (initialSpacing * 1.25) + "px";
            staves[i].style.marginBottom = (initialSpacing * 1.35) + "px";
        }
    }
}

function changeLineWidth(size) {
    var staffLines = document.getElementsByClassName("staffLine");
    for (var i = 0; i < staffLines.length; i++) {

        if (size == "small") {
            staffLines[i].style.height = 2 + "px";
        }

        if (size == "medium") {
            staffLines[i].style.height = 4 + "px";
        }

        if (size == "large") {
            staffLines[i].style.height = 6 + "px";
        }
    }
}

function drawStaves(size) {
    var numberOfStaves = 0;
    if (size == "small") { numberOfStaves = 6; }
    if (size == "medium") { numberOfStaves = 3; }
    if (size == "large") { numberOfStaves = 2; }
    const staves = document.getElementsByClassName('staves')[0];

    const staff = `
    <div class="staff">
        <hr class="staffLine staffLine1">
        <hr class="staffLine staffLine2">
        <hr class="staffLine staffLine3">
        <hr class="staffLine staffLine4">
        <hr class="staffLine staffLine5">
    </div>
`;

    // Clear existing staves
    staves.innerHTML = staff;

    for (let i = 0; i < numberOfStaves; i++) {
        staves.innerHTML += staff;
    }
}

function presetSize(size) {
    drawStaves(size);
    applyColorPickerValues()
    changeLineSpacing(size);
    changeLineWidth(size);

};

function resetToBlackandSmall() {
    document.getElementById("picker1").value = "#ff0000";
    document.getElementById("picker2").value = "#ff8000";
    document.getElementById("picker3").value = "#0040ff";
    document.getElementById("picker4").value = "#40ff00";
    document.getElementById("picker5").value = "#bf00ff";

    var staffLines = document.getElementsByClassName("staffLine");
    for (var i = 0; i < staffLines.length; i++) {
        staffLines[i].style.backgroundColor = "black";
    }

    changeLineSpacing("small");
    changeLineWidth("small");
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
    changeStaffColor();
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
    changeStaffColor();
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
    changeStaffColor();
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

function applyColorPickerValues() {
    for (var i = 1; i < 6; i++) {
        var colorPicker = document.getElementById('picker' + i);
        // Get the selected color value
        var selectedColor = colorPicker.value;

        //get the collection of stafflines
        var staffLines = document.getElementsByClassName("staffLine" + i);

        //change each staff line if appropriate
        for (var j = 0; j < staffLines.length; j++) {
            var staffLine = staffLines[j];
            // Set the background color using style.backgroundColor
            staffLine.style.backgroundColor = selectedColor;
        }
    }
}



//update color picker values immediately
document.addEventListener('DOMContentLoaded', function () {
    for (var i = 1; i < 6; i++) {
        attachColorPickerEvent(i);
    }
});

function attachColorPickerEvent(i) {
    const colorPicker = document.getElementById('picker' + i);
    // Add an event listener for the 'input' event on the color picker
    colorPicker.addEventListener('input', function (event) {
        // Get the selected color value
        var selectedColor = event.target.value;

        //get the collection of stafflines
        var staffLines = document.getElementsByClassName("staffLine" + i);

        //change each staff line if appropriate
        for (var j = 0; j < staffLines.length; j++) {
            var staffLine = staffLines[j];
            // Set the background color using style.backgroundColor
            staffLine.style.backgroundColor = selectedColor;
        }
    });
}

//update copyright year:
document.getElementById("year").innerHTML = new Date().getFullYear();
