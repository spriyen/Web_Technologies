let outputscreen = document.getElementById("display");

function display(num) {
    outputscreen.value += num;
}

function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch(err) {
        alert("Invalid Expression");
    }
}

function Clear() {
    outputscreen.value = "";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}

function concat(event)
{
    event.preventDefault();
    let val1 = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    var p = document.getElementById("result");
    
    p.innerHTML = val1+val2;
}