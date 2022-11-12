function changeStaffColor(line, color) {
    var elements = document.getElementsByClassName(line); // get all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
}

function getValueOfPicker(id, staffLine) {
    var pickerColor = document.getElementById(id).value;
    changeStaffColor(staffLine, pickerColor);
}

function resetToBlack() {
    var elements = document.getElementsByClassName("staffLine"); // get all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";
    }
}