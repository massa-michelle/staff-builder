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

function resetToBlack() {
    var elements = document.getElementsByClassName("staffLine"); // get all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";
    }
}

function updateStaff() {
    changeStaffColor();
}