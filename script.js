function insert(num) {
    document.getElementById('display').value += num;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;
    if (display) {
        document.getElementById('display').value = eval(display);
    }
}