let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearScreen() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        display.value = result;

    } catch {
        display.value = "Error";
    }

}

// Keyboard support
document.addEventListener("keydown", function(event) {

    if ("0123456789+-*/.".includes(event.key)) {
        appendValue(event.key);
    }

    else if (event.key === "Enter") {
        calculate();
    }

    else if (event.key === "Backspace") {
        deleteLast();
    }

    else if (event.key === "Escape") {
        clearScreen();
    }

});