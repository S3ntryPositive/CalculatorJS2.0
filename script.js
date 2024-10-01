
window.addEventListener("load", addListener)

var number1, number2, result;

function addListener()
{
	document.getElementById("InputResult").disabled = false;
    document.getElementById("btnPeriod").addEventListener("click", Period);
    document.getElementById("btnFactorial").addEventListener("click", Factorial);
    document.getElementById("btnPlus").addEventListener("click", Add);
    document.getElementById("btnDivide").addEventListener("click", Divide);
    document.getElementById("btnMultiply").addEventListener("click", Multiply);
    document.getElementById("btnMinus").addEventListener("click", Subtract);
    document.getElementById("btnPower").addEventListener("click", Power);
	document.getElementById("btn1").addEventListener("click", One);
	document.getElementById("btn2").addEventListener("click", Two);
	document.getElementById("btn3").addEventListener("click", Three);
	document.getElementById("btn4").addEventListener("click", Four);
	document.getElementById("btn5").addEventListener("click", Five);
	document.getElementById("btn6").addEventListener("click", Six);
	document.getElementById("btn7").addEventListener("click", Seven);
	document.getElementById("btn8").addEventListener("click", Eight);
	document.getElementById("btn9").addEventListener("click", Nine);
	document.getElementById("btn0").addEventListener("click", Zero);
	document.getElementById("btnClear").addEventListener("click", ClearInput);
    document.getElementById("btnEqual").addEventListener("click", Solve);
}

function One()
{
	document.getElementById("InputResult").value += 1;
}

function Two()
{
	document.getElementById("InputResult").value += 2;
}

function Three()
{
	document.getElementById("InputResult").value += 3;
}

function Four()
{
	document.getElementById("InputResult").value += 4;
}

function Five()
{
	document.getElementById("InputResult").value += 5;
}

function Six()
{
	document.getElementById("InputResult").value += 6;
}

function Seven()
{
	document.getElementById("InputResult").value += 7;
}

function Eight()
{
	document.getElementById("InputResult").value += 8;
}

function Nine()
{
	document.getElementById("InputResult").value += 9;
}

function Zero()
{
	document.getElementById("InputResult").value += 0;
}

function ClearInput()
{
	document.getElementById("InputResult").value = "";
}

function Add()
{
	document.getElementById("InputResult").value += "+";
}

function Divide()
{
	document.getElementById("InputResult").value += "/";
}

function Multiply()
{
	document.getElementById("InputResult").value += "*";
}

function Subtract()
{
	document.getElementById("InputResult").value += "-";
}

function Power()
{
	document.getElementById("InputResult").value += "^";
}

function Period()
{
	document.getElementById("InputResult").value += ".";
}

function Factorial()
{
    document.getElementById("InputResult").value += "!";
}

function Solve()
{
    // the math.evaluate looks at what is in the input box and does the equation
    var Equation = document.getElementById("InputResult").value;
    var Result = math.evaluate(Equation);
    document.getElementById("InputResult").value = Result;
}
