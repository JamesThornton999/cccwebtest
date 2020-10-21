function forclear()
{
    document.getElementById("output").innerHTML = "0";
}

function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    if(solved == "Infinity")
    {
        solved = "Div/0 Error";
    }
    document.getElementById('output').innerHTML = solved;
}