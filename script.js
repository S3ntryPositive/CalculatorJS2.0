
window.addEventListener("load", addListener)

var number1, number2, result;

function addListener()
{
	document.getElementById("InputResult").disabled = false;
	document.getElementById("btnLog").addEventListener("click", MathLog);
	document.getElementById("btnLn").addEventListener("click", NLog);
	document.getElementById("btnExp").addEventListener("click", Exp);
	document.getElementById("btnRadians").addEventListener("click", Radians);
	document.getElementById("btnDegrees").addEventListener("click", Degrees);
	document.getElementById("btnSq").addEventListener("click", Square);
	document.getElementById("btnPercent").addEventListener("click", Percentage);
	document.getElementById("btnSqrt").addEventListener("click", Sqrt);
	document.getElementById("btnPlusMinus").addEventListener("click", Subtract);
	document.getElementById("btnSin").addEventListener("click", Sin);
	document.getElementById("btnCos").addEventListener("click", Cos);
	document.getElementById("btnTan").addEventListener("click", Tan);
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
    document.getElementById("btnPie").addEventListener("click", Pie);
	document.getElementById("btnEqual").addEventListener("click", Solve);
}

function Square()
{
	document.getElementById("InputResult").value += "^2"
}

function Percentage()
{
	document.getElementById("InputResult").value += "%"
}

function Sqrt()
{
	var Input = parseInt(document.getElementById("InputResult").value);
	var Result = Math.sqrt(Input);
	document.getElementById("InputResult").value = Result;
}


function Sin()
{
	var Input = parseInt(document.getElementById("InputResult").value);
	var Result = Math.sin(Input);
	document.getElementById("InputResult").value = Result;
}

function Cos()
{
	var Input = parseInt(document.getElementById("InputResult").value);
	var Result = Math.cos(Input);
	document.getElementById("InputResult").value = Result;
}

function Tan()
{
	var Input = parseInt(document.getElementById("InputResult").value);
	var Result = Math.tan(Input);
	document.getElementById("InputResult").value = Result;
}

function Pie()
{
	document.getElementById("InputResult").value += Math.PI;
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

function Radians()
{
	var input = parseFloat(document.getElementById("InputResult").value);
	var result = input * (Math.PI / 180);
	document.getElementById("InputResult").value = result;
}

function Degrees()
{
	var input = parseFloat(document.getElementById("InputResult").value);
	var result = input * (180 / Math.PI);
	document.getElementById("InputResult").value = result;
}

function MathLog()
{
	var input = parseFloat(document.getElementById("InputResult").value);
	var result = Math.log10(input)
	document.getElementById("InputResult").value = result;
}

function NLog()
{
	var input = parseFloat(document.getElementById("InputResult").value);
	var result = Math.log(input)
	document.getElementById("InputResult").value = result;
}

function Exp()
{
	var input = parseFloat(document.getElementById("InputResult").value);
	var result = Math.exp(input)
	document.getElementById("InputResult").value = result;
}

function Solve()
{
    var Equation = document.getElementById("InputResult").value;
    var Result = math.evaluate(Equation);
    document.getElementById("InputResult").value = Result;
}
