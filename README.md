# demo


body { 
	background-image: linear-gradient( 
		#fff48c, 
		#b9a9fd
	); 
	display: flex; 
	justify-content: center; 
	align-items: center; 
	height: 100vh; 
	margin: 0; 
	font-family: "Arial", sans-serif; 
	overflow: hidden; 
} 
.main { 
	background: rgba(4, 0, 255, 0.1); 
	padding: 20px; 
	border-radius: 15px; 
	box-shadow: 0 8px 12px
		rgba(0, 255, 128, 0.2); 
	backdrop-filter: blur(5px); 
	text-align: center; 
	animation: fadeIn 0.5s ease-in-out; 
} 
@keyframes fadeIn { 
	from { 
		opacity: 0; 
	} 
	to { 
		opacity: 1; 
	} 
} 
.title { 
	font-size: 36px; 
	color: green; 
} 
.subtitle { 
	margin: 0; 
	font-size: 18px; 
	color: rgb(0, 0, 0); 
} 
.select-category, 
.unit-select, 
.input { 
	padding: 12px; 
	font-size: 16px; 
	border: none; 
	background: rgba( 
		255, 
		255, 
		255, 
		0.4
	); 
	color: rgb(0, 0, 0); 
	border-radius: 10px; 
} 
.arrow { 
	font-size: 20px; 
	color: #3494e6; 
} 
.convert-button { 
	padding: 12px 24px; 
	font-size: 16px; 
	background: #f9a826; 
	color: #fff; 
	border: none; 
	border-radius: 10px; 
	cursor: pointer; 
	transition: background 0.3s; 
} 
.convert-button:hover { 
	background: #ecd56e; 
} 
.result { 
	background: rgba( 
		255, 
		255, 
		255, 
		0.3
	); 
	padding: 10px; 
	margin: 10px; 
	border-radius: 10px; 
	animation: fadeIn 0.5s ease-in-out; 
} 
.result p { 
	font-size: 18px; 
	color: rgb(0, 0, 0); 
} 
.conversion { 
	background: rgba(255, 0, 0, 0.3); 
	padding: 20px; 
	margin: 10px; 
	border-radius: 15px; 
	backdrop-filter: blur(5px); 
	transition: transform 0.3s, 
		box-shadow 0.3s; 
	animation: fadeIn 0.5s ease-in-out; 
} 
.conversion:hover { 
	transform: scale(1.03); 
	box-shadow: 0 10px 16px
		rgba(0, 0, 0, 0.25); 
}
body {
     background-color: yellow;
     font-family: 'Trebuchet MS';
}
 h1 {
     font-size: 35px;
}
 h1 {
     font-size: 21px;
     margin-top: 20px;
}
 .calculator {
     width: 400px;
     height: 450px;
     background-color: black;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translateX(-50%) translateY(-50%);
     padding: 20px 0px 0px 100px;
     border-radius: 50px;
     color: white;
}
 input {
     padding: 7px;
     width: 70%;
     margin-top: 7px;
}

<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Scientific Calculator</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.js"></script>
  <style>

    body {
      margin: 0px;
      padding: 0px;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .calculator {
      width: 550px;  
      height: 350px;
      background: #fff;
      border: 1px solid black;
      border-radius: 5px;
      padding: 3px;
      box-sizing: border-box;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .display {
      width: 100%;
      height: 50px;
      font-size: 1.5em;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 2px solid black;
      box-sizing: border-box;
      text-align: left;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 5px;
      width: 100%;
      grid-template-rows: repeat(5, 1fr);
      overflow: hidden;
    }

    .buttons input[type="button"] {
      padding: 10px;
      font-size: 1.2em;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background-color: green;
      color: white;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }

    .buttons input[type="button"]:hover {
      background-color: darkgreen;
    }

    @media (max-width: 500px) {
      .buttons {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (max-width: 350px) {
      .buttons {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .display:focus {
      outline: none;
      border-color: black;
      box-shadow: none;
    }

  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" class="display" readonly />
    <div class="buttons">
      <input type="button" value="1" onclick="display.value += '1'">
      <input type="button" value="2" onclick="display.value += '2'">
      <input type="button" value="3" onclick="display.value += '3'">
      <input type="button" value="4" onclick="display.value += '4'">
      <input type="button" value="5" onclick="display.value += '5'">
      <input type="button" value="6" onclick="display.value += '6'">
      <input type="button" value="7" onclick="display.value += '7'">
      <input type="button" value="8" onclick="display.value += '8'">
      <input type="button" value="9" onclick="display.value += '9'">
      <input type="button" value="0" onclick="display.value += '0'">

      <input type="button" value="C" onclick="display.value = ''">
      <input type="button" value="⌫" onclick="backspace()">
      <input type="button" value="*" onclick="display.value += '*'">
      <input type="button" value="+" onclick="display.value += '+'">
      <input type="button" value="-" onclick="display.value += '-'">
      <input type="button" value="/" onclick="display.value += '/'">
      <input type="button" value="!" onclick="display.value += '!'">
      <input type="button" value="." onclick="addDecimal()">
      <input type="button" value="," onclick="display.value += ','">

      <input type="button" value="%" onclick="display.value += '%'">
      <input type="button" value="cos(" onclick="display.value += 'cos('">
      <input type="button" value="sin(" onclick="display.value += 'sin('">
      <input type="button" value="tan(" onclick="display.value += 'tan('">

      <input type="button" value="e" onclick="display.value += 'e'">
      <input type="button" value="pi" onclick="display.value += 'pi'">
      <input type="button" value="^" onclick="display.value += '^('">
      <input type="button" value="(" onclick="display.value += '('">
      <input type="button" value=")" onclick="display.value += ')'">
      <input type="button" value="log(" onclick="display.value += 'log('">

      <input type="button" value="sqrt(" onclick="display.value += 'sqrt('">
      <input type="button" value="log2(" onclick="display.value += 'log2('">
      <input type="button" value="log10(" onclick="display.value += 'log10('">
      <input type="button" value="l2e" onclick="display.value += Math.LOG2E">
      <input type="button" value="l10e" onclick="display.value += Math.LOG10E">
      <input type="button" value="exp(" onclick="display.value += 'exp('">

      <input type="button" value="=" onclick="calculate()">
    </div>
  </div>

  <script>
    const display = document.getElementById("display");
    let isDegrees = true;

    function backspace() {
      display.value = display.value.slice(0, -1);
    }

    function addDecimal() {
      if (!display.value.includes('.')) {
        display.value += '.';
      }
    }

    function calculate() {
      let expression = display.value;
      try {
        if (isDegrees) {
          expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
          expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
          expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
        }
        let result = math.evaluate(expression);
        display.value = result;
      } catch {
        display.value = "Error";
        setTimeout(() => display.value = '', 2000);  
      }
    }
  </script>
</body>
</html>

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

h1 {
    color: #007bff;
    margin-bottom: 20px;
}

.input-container {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-weight: bold;
}

input[type="number"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 12px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}

.result-container {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width,initial-scale=1.0">

    <style>
        * {
            margin: 0;
            padding: 0;
            font-family:
                Verdana, Geneva, Tahoma, sans-serif;
        }

        .container {
            width: 100%;
            height: 100vh;
            background-image:
                linear-gradient(rgb(140, 219, 140),
                    rgb(20, 141, 20));
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .container h1 {
            color: green;
            font-weight: 700;
            font-size: 25px;
            text-align: center;
        }

        .converter-row {
            display: flex;
            width: 40%;
            justify-content: space-between;
            align-items: center;
            background: rgb(0, 56, 0);
            border-radius: 10px;
            padding: 50px 20px;
        }

        .col {
            flex-basis: 32%;
            text-align: center;
        }

        .col label {
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 10px;
            color: #fff;
        }

        .col input {
            width: 150px;
            height: 30px;
            background: white;
            border-radius: 5px;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>GeeksforGeeks <br>
            Temperature Converter</h1>
        <div class="converter-row">
            <div class="col">
                <label>Fahrenheit</label>
                <input type="number" id="fahrenheit">
            </div>

            <div class="col">
                <label>Celsius</label>
                <input type="number" id="celsius">
            </div>

            <div class="col">
                <label>Kelvin</label>
                <input type="number" id="kelvin">
            </div>
        </div>
    </div>

    <script>
        let celsius =
            document.getElementById('celsius');
        let fahrenheit =
            document.getElementById('fahrenheit');
        let kelvin =
            document.getElementById('kelvin');
        celsius.oninput = function () {
            let f = (parseFloat(celsius.value) * 9) / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));

            let k = (parseFloat(celsius.value) + 273.15);
            kelvin.value = parseFloat(k.toFixed(2));
        }
        fahrenheit.oninput = function () {
            let c = ((parseFloat(
                fahrenheit.value) - 32) * 5) / 9;
            celsius.value = parseFloat(c.toFixed(2));

            let k = (parseFloat(
                fahrenheit.value) - 32) * 5 / 9 + 273.15;
            kelvin.value = parseFloat(k.toFixed(2));
        }
        kelvin.oninput = function () {
            let f = (parseFloat(
                kelvin.value) - 273.15) * 9 / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));

            let c = (parseFloat(kelvin.value) - 273.15);
            celsius.value = parseFloat(c.toFixed(2));
        }
    </script>
</body>

</html>

<!DOCTYPE html>
<html>

<head>
	<title>
		Geometry Calculator Design using 
		HTML CSS and JavaScript
	</title>

	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f0f0f0;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			margin: 0;
		}

		.calculator {
			background-color: white;
			padding: 20px;
			border-radius: 5px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		#input-fields {
			width: 100%;
			text-align: left;
		}

		.input-container {
			margin: 20px 0;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			flex: 1;
			width: 100%;
			position: relative;
		}

		input {
			padding: 5px;
			border: 1px solid #ccc;
			border-radius: 3px;
			position: absolute;
			right: 0;
			top: 5px;
		}

		h1 {
			margin: 0;
			color: #333;
		}

		#results {
			display: none;
		}

		button {
			text-align: center;
		}

		.selector {
			flex-direction: row;
			justify-content: space-between;
		}

		#results {
			text-align: center;
		}
	</style>
</head>

<body>
	<div class="calculator">
		<h1>Geometry Calculator</h1>
		<div class="input-container selector">
			<label for="shape">Select a shape:</label>
			<select id="shape" onchange="selectShape()">
				<option value="triangle">Triangle</option>
				<option value="circle">Circle</option>
				<option value="rectangle">Rectangle</option>
				<option value="square">Square</option>
				<option value="parallelogram">
					Parallelogram
				</option>
			</select>
		</div>
		<div id="input-fields">
			<div class="input-container" id="length-div">
				<label for="length">Length:</label>
				<input type="number" id="length">
			</div>
			<div class="input-container" id="width-div">
				<label for="width">Width:</label>
				<input type="number" id="width">
			</div>
			<div class="input-container" id="base-div">
				<label for="base">Base:</label>
				<input type="number" id="base">
			</div>
			<div class="input-container" id="height-div">
				<label for="height">Height:</label>
				<input type="number" id="height">
			</div>
			<div class="input-container" id="radius-div">
				<label for="radius">Radius:</label>
				<input type="number" id="radius">
			</div>
		</div>
		<div>
			<button id="calculate-btn">Calculate</button>
		</div>
		<div id="results">
			<p id="area">Area: 0</p>
			<p id="perimeter">Perimeter: 0</p>
		</div>
	</div>

	<script>
		function selectShape() {
			resetResults()

			const shape = document.getElementById("shape").value;
			document.getElementById("input-fields").style.display = "block";

			const divs = [
				"length-div", "width-div", "base-div", 
				"height-div", "radius-div"
			];
			
			for (const div of divs) {
				document.getElementById(div).style.display = "none";
			}

			if (shape === "rectangle") {
				document.getElementById("length-div").style.display = "block";
				document.getElementById("width-div").style.display = "block";
			} else if (shape === "triangle") {
				document.getElementById("base-div").style.display = "block";
				document.getElementById("height-div").style.display = "block";
			} else if (shape === "circle") {
				document.getElementById("radius-div").style.display = "block";
			} else if (shape === "square") {
				document.getElementById("length-div").style.display = "block";
				document.getElementById("width-div").style.display = "block";
			} else if (shape === "parallelogram") {
				document.getElementById("base-div").style.display = "block";
				document.getElementById("height-div").style.display = "block";
			}
		}

		function calculate() {
			const shape = 
				document.getElementById("shape").value;
			const areaElement = 
				document.getElementById("area");
			const perimeterElement = 
				document.getElementById("perimeter");

			let area, perimeter;

			if (shape === "rectangle") {
				const length = parseFloat(
					document.getElementById("length").value);
				const width = parseFloat(
					document.getElementById("width").value);
				area = length * width;
				perimeter = 2 * (length + width);
			} else if (shape === "triangle") {
				const base = parseFloat(
					document.getElementById("base").value);
				const height = parseFloat(
					document.getElementById("height").value);
				area = 0.5 * base * height;
				perimeter = base + 2 * Math.sqrt(
					Math.pow(height, 2) + Math.pow(base / 2, 2));
			} else if (shape === "circle") {
				const radius = parseFloat(
					document.getElementById("radius").value);
				area = Math.PI * Math.pow(radius, 2);
				perimeter = 2 * Math.PI * radius;
			} else if (shape === "square") {
				const side = parseFloat(
					document.getElementById("length").value);
				area = side * side;
				perimeter = 4 * side;
			} else if (shape === "parallelogram") {
				const base = parseFloat(
					document.getElementById("base").value);
				const height = parseFloat(
					document.getElementById("height").value);
				area = base * height;
				perimeter = 2 * (base + height);
			}

			areaElement.textContent = 
				`Area: ${area.toFixed(2)}`;
			perimeterElement.textContent = 
				`Perimeter: ${perimeter.toFixed(2)}`;
			document.getElementById("results")
				.style.display = "block";
		}

		function resetResults() {
			document.getElementById("results")
				.style.display = "none";
		}

		document.getElementById('calculate-btn')
			.addEventListener('click', () => {
				calculate()
			});

		selectShape();
	</script>
</body>

</html>

<!-- Filename: index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" 
          content="IE=edge">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>Neumorphism Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <div class="cal-box">
            <form name="calculator">
                <input type="text" id="display" placeholder="0" readonly>
                <br>
                <input class="button" 
                        type="button" 
                        value="7" 
                        onclick="calculator.display.value +='7'">
                <input class="button" 
                       type="button" 
                       value="8" 
                       onclick="calculator.display.value +='8'">
                <input class="button" 
                       type="button" 
                       value="9" 
                       onclick="calculator.display.value +='9'">
                <input class="button mathbutton" 
                       type="button" 
                       value="+" onclick="calculator.display.value +='+'">
                <br>
                <input class="button" 
                       type="button" 
                       value="4" 
                       onclick="calculator.display.value +='4'">
                <input class="button" 
                       type="button" 
                       value="5" 
                       onclick="calculator.display.value +='5'">
                <input class="button" 
                       type="button" 
                       value="6" 
                       onclick="calculator.display.value +='6'">
                <input class="button mathbutton" 
                       type="button" 
                       value="-" 
                       onclick="calculator.display.value +='-'">
                <br>
                <input class="button" 
                       type="button" 
                       value="1" 
                       onclick="calculator.display.value +='1'">
                <input class="button" 
                       type="button" 
                       value="2" 
                       onclick="calculator.display.value +='2'">
                <input class="button" 
                       type="button" 
                       value="3" 
                       onclick="calculator.display.value +='3'">
                <input class="button mathbutton" 
                       type="button" 
                       value="x" onclick="calculator.display.value +='*'">
                <br>
                <input class="button clearButton" 
                       type="button" 
                       value="C" 
                       onclick="calculator.display.value =''">
                <input class="button" 
                       type="button" 
                       value="0" 
                       onclick="calculator.display.value +='0'">
                <input class="button mathbutton" 
                       type="button" 
                       value="="
                       onclick="calculator.display.value =eval(calculator.display.value)">

                <!-- eval() evaluates arithmetic expressions in display box -->
                <input class="button mathbutton" 
                       type="button" value="/" 
                       onclick="calculator.display.value +='/'">
            </form>
        </div>
    </div>
</body>
</html>

<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Scientific Calculator</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.js"></script>
  <style>

    body {
      margin: 0px;
      padding: 0px;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .calculator {
      width: 550px;  
      height: 350px;
      background: #fff;
      border: 1px solid black;
      border-radius: 5px;
      padding: 3px;
      box-sizing: border-box;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .display {
      width: 100%;
      height: 50px;
      font-size: 1.5em;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 2px solid black;
      box-sizing: border-box;
      text-align: left;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 5px;
      width: 100%;
      grid-template-rows: repeat(5, 1fr);
      overflow: hidden;
    }

    .buttons input[type="button"] {
      padding: 10px;
      font-size: 1.2em;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background-color: green;
      color: white;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }

    .buttons input[type="button"]:hover {
      background-color: darkgreen;
    }

    @media (max-width: 500px) {
      .buttons {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (max-width: 350px) {
      .buttons {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .display:focus {
      outline: none;
      border-color: black;
      box-shadow: none;
    }

  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" class="display" readonly />
    <div class="buttons">
      <input type="button" value="1" onclick="display.value += '1'">
      <input type="button" value="2" onclick="display.value += '2'">
      <input type="button" value="3" onclick="display.value += '3'">
      <input type="button" value="4" onclick="display.value += '4'">
      <input type="button" value="5" onclick="display.value += '5'">
      <input type="button" value="6" onclick="display.value += '6'">
      <input type="button" value="7" onclick="display.value += '7'">
      <input type="button" value="8" onclick="display.value += '8'">
      <input type="button" value="9" onclick="display.value += '9'">
      <input type="button" value="0" onclick="display.value += '0'">

      <input type="button" value="C" onclick="display.value = ''">
      <input type="button" value="⌫" onclick="backspace()">
      <input type="button" value="*" onclick="display.value += '*'">
      <input type="button" value="+" onclick="display.value += '+'">
      <input type="button" value="-" onclick="display.value += '-'">
      <input type="button" value="/" onclick="display.value += '/'">
      <input type="button" value="!" onclick="display.value += '!'">
      <input type="button" value="." onclick="addDecimal()">
      <input type="button" value="," onclick="display.value += ','">

      <input type="button" value="%" onclick="display.value += '%'">
      <input type="button" value="cos(" onclick="display.value += 'cos('">
      <input type="button" value="sin(" onclick="display.value += 'sin('">
      <input type="button" value="tan(" onclick="display.value += 'tan('">

      <input type="button" value="e" onclick="display.value += 'e'">
      <input type="button" value="pi" onclick="display.value += 'pi'">
      <input type="button" value="^" onclick="display.value += '^('">
      <input type="button" value="(" onclick="display.value += '('">
      <input type="button" value=")" onclick="display.value += ')'">
      <input type="button" value="log(" onclick="display.value += 'log('">

      <input type="button" value="sqrt(" onclick="display.value += 'sqrt('">
      <input type="button" value="log2(" onclick="display.value += 'log2('">
      <input type="button" value="log10(" onclick="display.value += 'log10('">
      <input type="button" value="l2e" onclick="display.value += Math.LOG2E">
      <input type="button" value="l10e" onclick="display.value += Math.LOG10E">
      <input type="button" value="exp(" onclick="display.value += 'exp('">

      <input type="button" value="=" onclick="calculate()">
    </div>
  </div>

  <script>
    const display = document.getElementById("display");
    let isDegrees = true;

    function backspace() {
      display.value = display.value.slice(0, -1);
    }

    function addDecimal() {
      if (!display.value.includes('.')) {
        display.value += '.';
      }
    }

    function calculate() {
      let expression = display.value;
      try {
        if (isDegrees) {
          expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
          expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
          expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
        }
        let result = math.evaluate(expression);
        display.value = result;
      } catch {
        display.value = "Error";
        setTimeout(() => display.value = '', 2000);  
      }
    }
  </script>
</body>
</html>


<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f2f2f2;
            margin: 0;
        }
        .calculator {
            width: 300px;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .display {
            width: 100%;
            height: 50px;
            text-align: right;
            font-size: 1.5rem;
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            background-color: #ffeb3b;
            border-radius: 8px;
            color: #333;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .button {
            background-color: #03a9f4;
            border: none;
            font-size: 1.5rem;
            padding: 20px;
            cursor: pointer;
            border-radius: 10px;
            transition: background-color 0.3s, transform 0.2s;
            color: white;
        }
        .button:hover {
            background-color: #0288d1;
            transform: scale(1.1);
        }
        .button:active {
            transform: scale(0.95);
        }
        .button.clear {
            background-color: #ff5722;
        }
        .button.clear:hover {
            background-color: #e64a19;
        }
        .button.equal {
            background-color: #8bc34a;
        }
        .button.equal:hover {
            background-color: #689f38;
        }
        .button.operator {
            background-color: #ff9800;
        }
        .button.operator:hover {
            background-color: #f57c00;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" class="display" disabled>
        <div class="buttons">
            <button class="button clear" onclick="clearDisplay()">C</button>
            <button class="button operator" onclick="appendOperation('/')">/</button>
            <button class="button operator" onclick="appendOperation('*')">*</button>
            <button class="button operator" onclick="appendOperation('-')">-</button>

            <button class="button" onclick="appendNumber('7')">7</button>
            <button class="button" onclick="appendNumber('8')">8</button>
            <button class="button" onclick="appendNumber('9')">9</button>
            <button class="button operator" onclick="appendOperation('+')">+</button>

            <button class="button" onclick="appendNumber('4')">4</button>
            <button class="button" onclick="appendNumber('5')">5</button>
            <button class="button" onclick="appendNumber('6')">6</button>
            <button class="button equal" onclick="calculate()">=</button>

            <button class="button" onclick="appendNumber('1')">1</button>
            <button class="button" onclick="appendNumber('2')">2</button>
            <button class="button" onclick="appendNumber('3')">3</button>
            <button class="button" onclick="appendNumber('0')">0</button>
        </div>
    </div>

    <script>
        let currentInput = '';
        let currentOperation = '';
        let previousInput = '';

        function appendNumber(number) {
            currentInput += number;
            document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
        }

        function appendOperation(operation) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate(); // Calculate the previous operation before appending a new one
            }
            currentOperation = operation;
            previousInput = currentInput;
            currentInput = '';
            document.getElementById('display').value = `${previousInput} ${currentOperation}`;
        }

        function calculate() {
            if (previousInput === '' || currentInput === '') return;
            let result;
            let prev = parseFloat(previousInput);
            let current = parseFloat(currentInput);

            switch (currentOperation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert("Cannot divide by zero");
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            currentOperation = '';
            previousInput = '';
            document.getElementById('display').value = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            currentOperation = '';
            document.getElementById('display').value = '';
        }
    </script>
</body>
</html>

let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); 
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

<html>
<head></head>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f2f2f2;
            margin: 0;
        }

        .calculator {
            width: 300px;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        .display {
            width: 100%;
            height: 50px;
            text-align: right;
            font-size: 1.5rem;
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            background-color: #ffeb3b;
            border-radius: 8px;
            color: #333;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .button {
            background-color: #03a9f4;
            border: none;
            font-size: 1.5rem;
            padding: 20px;
            cursor: pointer;
            border-radius: 10px;
            transition: background-color 0.3s, transform 0.2s;
            color: white;
        }

        .button:hover {
            background-color: #0288d1;
            transform: scale(1.1);
        }

        .button:active {
            transform: scale(0.95);
        }

        .button.clear {
            background-color: #ff5722;
        }

        .button.clear:hover {
            background-color: #e64a19;
        }

        .button.equal {
            background-color: #8bc34a;
        }

        .button.equal:hover {
            background-color: #689f38;
        }

        .button.operator {
            background-color: #ff9800;
        }

        .button.operator:hover {
            background-color: #f57c00;
        }
    </style>
<body>
    <div class="calculator">
        <input type="text" id="display" class="display" disabled>
        <div class="buttons">
            <button class="button clear" onclick="clearDisplay()">C</button>
            <button class="button operator" onclick="appendOperation('/')">/</button>
            <button class="button operator" onclick="appendOperation('*')">*</button>
            <button class="button operator" onclick="appendOperation('-')">-</button>

            <button class="button" onclick="appendNumber('7')">7</button>
            <button class="button" onclick="appendNumber('8')">8</button>
            <button class="button" onclick="appendNumber('9')">9</button>
            <button class="button operator" onclick="appendOperation('+')">+</button>

            <button class="button" onclick="appendNumber('4')">4</button>
            <button class="button" onclick="appendNumber('5')">5</button>
            <button class="button" onclick="appendNumber('6')">6</button>
            <button class="button equal" onclick="calculate()">=</button>

            <button class="button" onclick="appendNumber('1')">1</button>
            <button class="button" onclick="appendNumber('2')">2</button>
            <button class="button" onclick="appendNumber('3')">3</button>
            <button class="button" onclick="appendNumber('0')">0</button>
        </div>
    </div>
</body>
</html>

A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.    

Choosing the most relevant academic and professional experiences and putting them in an easily understood format will show an employer proof of your organizational, communication, and tangible career-related skills.   

package com.movieticket.movie.services.showtime_service;


import com.movieticket.movie.mappers.ShowtimeMapper;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Seat;
import com.movieticket.movie.models.Showtime;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.repositories.ShowtimeRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ShowtimeServiceImpl implements ShowtimeService{
    private final ShowtimeRepository showtimeRepository;
    private final ShowtimeMapper showtimeMapper;
    private final UUIDUtil uuidUtil;

    public ShowtimeServiceImpl(ShowtimeRepository showtimeRepository, ShowtimeMapper showtimeMapper,UUIDUtil uuidUtil){
        this.showtimeRepository = showtimeRepository;
        this.showtimeMapper =  showtimeMapper;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String createShowtime(String showtimeId, Movie movieId, Theater theaterId, LocalDateTime startTime, LocalDateTime endTime) {
        Showtime showtime = showtimeMapper.toShowtime(uuidUtil.generateUuid(), movieId,theaterId,startTime,endTime);
        showtimeRepository.save(showtime);
        return "Showtime created";
    }

    @Override
    public List<Showtime> getAllShowtimes() {
        return List.of();
    }

    @Override
    public Showtime getShowtimeId(String showtimeId) {
        return null;
    }
}


package com.movieticket.movie.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Entity
@Table(name = "Theater")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Theater {
    @Id
    private String theaterId;

    private String name;
    private String location;

    @OneToMany(mappedBy = "theater", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Seat> seats;
}

package com.movieticket.movie.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    private String userId;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Booking> bookings;



}

package com.movieticket.movie.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "Showtime")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Showtime {
        @Id
        private String showtimeId;

        @ManyToOne
        @JoinColumn(name = "movieId", nullable = false)
        private Movie movie;

        @ManyToOne
        @JoinColumn(name = "theaterId", nullable = false)
        private Theater theater;

        @Column(nullable = false)
        private LocalDateTime startTime;

        @Column(nullable = false)
        private LocalDateTime endTime;

        @OneToMany(mappedBy = "showtime", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
        private List<SeatAvailability> seatAvailabilities;
}

package com.movieticket.movie.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "seat_availability")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SeatAvailability {
    @Id
    private String seatAvailid;

    private boolean available = true;

    @ManyToOne
    @JoinColumn(name = "seat_id")
    private Seat seat;

    @ManyToOne
    @JoinColumn(name = "showtime_id")
    private Showtime showtime;

    @OneToMany(mappedBy = "seatAvailability", cascade = CascadeType.ALL)
    private List<Booking> bookings;
}

package com.movieticket.movie.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Entity
@Table(name = "Seat")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Seat {
    @Id
    private String seatId;

    private String seatRow;
    private String seatNumber;
    private String seatType;
    private String seatSection;

    @ManyToOne
    @JoinColumn(name = "theaterId")
    private Theater theater;

    @OneToMany(mappedBy = "seat", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<SeatAvailability> availabilities;
}

package com.movieticket.movie.models;

public enum PaymentStatus {
    PENDING,
    COMPLETED,
    FAILED,
    REFUNDED
}

package com.movieticket.movie.models;

public enum PaymentMethod {
    CREDIT_CARD,
    DEBIT_CARD,
    UPI,
    NET_BANKING,
    CASH
}

package com.movieticket.movie.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Entity
@Table(name = "Movie")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Movie {
    @Id
    private String movieId;

    @Column(nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    private Genre genre;

    private String duration;
    private String rating;
    private String poster;

    @OneToMany(mappedBy = "movie", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Showtime> showtimes;
}

package com.movieticket.movie.models;

public enum Genre {
    DRAMA,
    COMEDY,
    ACTION,
    ADVENTURE,
    HORROR,
    THRILLER,
    SCIENCE_FICTION,
    ROMANCE,
    MYSTERY,
    SUPERHERO,
    BIOPIC,
    CRIME,
    ANIMATION,
    SPORTS,
    MARTIAL_ARTS
}
package com.movieticket.movie.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "Booking", uniqueConstraints = @UniqueConstraint(
        columnNames = {"seat_availability_id", "showtimeId"}
))
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    @Id
    private String bookingId;
    private LocalDateTime bookingDate;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "seat_availability_id")
    private SeatAvailability seatAvailability;

    @ManyToOne
    @JoinColumn(name = "showtimeId")
    private Showtime showtime;


}
package com.movieticket.movie.mappers;

import com.movieticket.movie.models.*;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class BookingMapper {

    public Booking toBooking(
            String bookingId,
            LocalDateTime bookingDate,
            PaymentMethod paymentMethod,
            PaymentStatus paymentStatus,
            User user,
            Showtime showtime,
            SeatAvailability seatAvailability
    ) {
        return Booking.builder()
                .bookingId(bookingId)
                .bookingDate(bookingDate)
                .paymentMethod(paymentMethod)
                .paymentStatus(paymentStatus)
                .user(user)
                .seatAvailability(seatAvailability)
                .showtime(showtime)
                .build();
    }
}


package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateTheaterDto;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.services.theater_service.TheaterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Theater")
public class TheaterController {
    private final TheaterService theaterService;

    public TheaterController(TheaterService theaterService) {
        this.theaterService = theaterService;
    }

    @PostMapping("/v1/createTheater")
    public ResponseEntity<String> createTheater(@RequestBody CreateTheaterDto data) {
        String message = theaterService.createTheater(data.theaterId(), data.name(), data.location());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllMovies")
    ResponseEntity<List<Theater>> getAllTheaters() {
        return ResponseEntity.status(200).body(theaterService.getAllTheaters());
    }

    @GetMapping("/v1/getTheaterId")
    ResponseEntity<Theater>getTheaterId(@RequestParam ("theaterId")String theaterId){
        return ResponseEntity.status(200).body(theaterService.getTheaterId(theaterId));
    }
}
package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateTheaterDto;
import com.movieticket.movie.Dto.Request.CreateUserDto;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.models.User;
import com.movieticket.movie.services.user_service.UserService;
import com.movieticket.movie.services.user_service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/User")

public class UserController {
    private  final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/v1/createUser")
    public ResponseEntity<String> createUser(@RequestBody CreateUserDto data) {
        String message = userService.createUser(data.userId(), data.username(), data.password(), data.email());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllUsers")
    ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.status(200).body(userService.getAllUsers());
    }

    @GetMapping("/v1/getUserId")
    ResponseEntity<User>getUserId(@RequestParam ("userId")String userId){
        return ResponseEntity.status(200).body(userService.getUserId(userId));
    }

}


package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateSeatDto;
import com.movieticket.movie.models.Seat;
import com.movieticket.movie.services.seat_service.SeatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Seat")
public class SeatController {
    private SeatService seatService;

    public SeatController(SeatService seatService){
        this.seatService = seatService;
    }

    @PostMapping("/v1/createSeat")
    ResponseEntity<String>createSeat(@RequestBody CreateSeatDto data){
        String message = seatService.createSeat(data.seatId(), data.seatRow(), data.seatNumber(), data.seatType(), data.seatSection(), data.theater());
        return  ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllSeats")
    ResponseEntity<List<Seat>>getAllSeats(){
        return ResponseEntity.status(200).body(seatService.getAllSeats());
    }

    @GetMapping("/v1/getSeatId")
    ResponseEntity<Seat>getSeatId(@RequestParam("seatId")String seatId){
        return ResponseEntity.status(200).body(seatService.getSeatId(seatId));
    }
}

package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateMovieDto;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.services.movie_service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Movie")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    @PostMapping("/v1/createMovie")
    public ResponseEntity<String>createMovie(@RequestBody CreateMovieDto data){
        String message = movieService.createMovie(data.movieId(), data.title(), data.genre(), data.duration(), data.rating(), data.poster());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllMovies")
    ResponseEntity<List<Movie>>getAllMovies(){
        return ResponseEntity.status(200).body(movieService.getAllMovies());
    }

    @GetMapping("/v1/getMovieId")
    ResponseEntity<Movie>getMovieId(@RequestParam ("movieId")String movieId){
        return ResponseEntity.status(200).body(movieService.getMovieId(movieId));
    }
}


package com.movieticket.movie.Controllers;

import com.movieticket.movie.Dto.Request.CreateBookingDto;
import com.movieticket.movie.models.Booking;
import com.movieticket.movie.services.booking_service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Booking")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/v1/createBooking")
    public ResponseEntity<String> createBooking(@RequestBody CreateBookingDto data) {
        String message = bookingService.createBooking(data.bookingId(), data.bookingDate(), data.paymentMethod(), data.paymentStatus(), data.user(), data.seatAvailability(), data.showtime());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllBookings")
    ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.status(200).body(bookingService.getAllBookings());

    }

    @GetMapping("/v1/getBookingId")
    ResponseEntity<Booking>getBookingId(@RequestParam("bookingId")String bookingId){
        return ResponseEntity.status(200).body(bookingService.getBookingId(bookingId));
    }
}

package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateTheaterDto;
import com.movieticket.movie.Dto.Request.CreateUserDto;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.models.User;
import com.movieticket.movie.services.user_service.UserService;
import com.movieticket.movie.services.user_service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/User")

public class UserController {
    private  final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/v1/createUser")
    public ResponseEntity<String> createUser(@RequestBody CreateUserDto data) {
        String message = userService.createUser(data.userId(), data.username(), data.password(), data.email());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllUsers")
    ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.status(200).body(userService.getAllUsers());
    }

    @GetMapping("/v1/getUserId")
    ResponseEntity<User>getUserId(@RequestParam ("userId")String userId){
        return ResponseEntity.status(200).body(userService.getUserId(userId));
    }

}

package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateTheaterDto;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.services.theater_service.TheaterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Theater")
public class TheaterController {
    private final TheaterService theaterService;

    public TheaterController(TheaterService theaterService) {
        this.theaterService = theaterService;
    }

    @PostMapping("/v1/createTheater")
    public ResponseEntity<String> createTheater(@RequestBody CreateTheaterDto data) {
        String message = theaterService.createTheater(data.theaterId(), data.name(), data.location());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllMovies")
    ResponseEntity<List<Theater>> getAllTheaters() {
        return ResponseEntity.status(200).body(theaterService.getAllTheaters());
    }

    @GetMapping("/v1/getTheaterId")
    ResponseEntity<Theater>getTheaterId(@RequestParam ("theaterId")String theaterId){
        return ResponseEntity.status(200).body(theaterService.getTheaterId(theaterId));
    }
}

package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateSeatDto;
import com.movieticket.movie.models.Seat;
import com.movieticket.movie.services.seat_service.SeatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Seat")
public class SeatController {
    private SeatService seatService;

    public SeatController(SeatService seatService){
        this.seatService = seatService;
    }

    @PostMapping("/v1/createSeat")
    ResponseEntity<String>createSeat(@RequestBody CreateSeatDto data){
        String message = seatService.createSeat(data.seatId(), data.seatRow(), data.seatNumber(), data.seatType(), data.seatSection(), data.theater());
        return  ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllSeats")
    ResponseEntity<List<Seat>>getAllSeats(){
        return ResponseEntity.status(200).body(seatService.getAllSeats());
    }

    @GetMapping("/v1/getSeatId")
    ResponseEntity<Seat>getSeatId(@RequestParam("seatId")String seatId){
        return ResponseEntity.status(200).body(seatService.getSeatId(seatId));
    }
}

package com.movieticket.movie.Controllers;


import com.movieticket.movie.Dto.Request.CreateMovieDto;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.services.movie_service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Movie")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    @PostMapping("/v1/createMovie")
    public ResponseEntity<String>createMovie(@RequestBody CreateMovieDto data){
        String message = movieService.createMovie(data.movieId(), data.title(), data.genre(), data.duration(), data.rating(), data.poster());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllMovies")
    ResponseEntity<List<Movie>>getAllMovies(){
        return ResponseEntity.status(200).body(movieService.getAllMovies());
    }

    @GetMapping("/v1/getMovieId")
    ResponseEntity<Movie>getMovieId(@RequestParam ("movieId")String movieId){
        return ResponseEntity.status(200).body(movieService.getMovieId(movieId));
    }
}

package com.movieticket.movie.Controllers;

import com.movieticket.movie.Dto.Request.CreateBookingDto;
import com.movieticket.movie.models.Booking;
import com.movieticket.movie.services.booking_service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Booking")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/v1/createBooking")
    public ResponseEntity<String> createBooking(@RequestBody CreateBookingDto data) {
        String message = bookingService.createBooking(data.bookingId(), data.bookingDate(), data.paymentMethod(), data.paymentStatus(), data.user(), data.seatAvailability(), data.showtime());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllBookings")
    ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.status(200).body(bookingService.getAllBookings());

    }

    @GetMapping("/v1/getBookingId")
    ResponseEntity<Booking>getBookingId(@RequestParam("bookingId")String bookingId){
        return ResponseEntity.status(200).body(bookingService.getBookingId(bookingId));
    }
}

package com.movieticket.movie.mappers;

import com.movieticket.movie.models.*;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class BookingMapper {

    public Booking toBooking(
            String bookingId,
            LocalDateTime bookingDate,
            PaymentMethod paymentMethod,
            PaymentStatus paymentStatus,
            User user,
            Showtime showtime,
            SeatAvailability seatAvailability
    ) {
        return Booking.builder()
                .bookingId(bookingId)
                .bookingDate(bookingDate)
                .paymentMethod(paymentMethod)
                .paymentStatus(paymentStatus)
                .user(user)
                .seatAvailability(seatAvailability)
                .showtime(showtime)
                .build();
    }
}
package com.movieticket.movie.mappers;


import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import org.springframework.stereotype.Service;

@Service
public class MovieMapper {

    public Movie toMovie(String movieId, String title, Genre genre, String duration,String rating,String poster){
        return  Movie.builder()
                .movieId(movieId)
                .title(title)
                .genre(genre)
                .duration(duration)
                .rating(rating)
                .poster(poster)
                .build();
    }
}
package com.movieticket.movie.mappers;

import com.movieticket.movie.models.Seat;
import com.movieticket.movie.models.SeatAvailability;
import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

@Service
public class SeatMapper {

    public Seat toSeat(String seatId, String seatRow, String seatNumber, String seatType, String seatSection, Theater theater){
        return Seat.builder()
                .seatId(seatId)
                .seatRow(seatRow)
                .seatNumber(seatNumber)
                .seatType(seatType)
                .seatSection(seatSection)
                .theater(theater)
                //.availabilities(availabilities)
                .build();
    }


}
package com.movieticket.movie.mappers;

import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Showtime;
import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
public class ShowtimeMapper {

public Showtime toShowtime(String showtimeId, Movie movie, Theater theater, LocalDateTime startTime,LocalDateTime endTime){
    return Showtime.builder()
            .showtimeId(showtimeId)
            .movie(movie)
            .theater(theater)
            .startTime(startTime)
            .endTime(endTime)
            .build();
}
}package com.movieticket.movie.mappers;

import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterMapper {

public Theater toTheater(String theaterId, String name, String location){
    return Theater.builder()
            .theaterId(theaterId)
            .name(name)
            .location(location)
            .build();
}
}package com.movieticket.movie.mappers;

import com.movieticket.movie.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserMapper {

    public User toUser(String userId, String username, String password, String email){
        return User.builder()
                .userId(userId)
                .username(username)
                .password(password)
                .email(email)
                .build();
    }


}

package com.movieticket.movie.services.user_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.UserMapper;
import com.movieticket.movie.models.User;
import com.movieticket.movie.repositories.UserRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl  implements  UserService{
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final UUIDUtil uuidUtil;

    private UserServiceImpl(UserRepository userRepository, UserMapper userMapper, UUIDUtil uuidUtil){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String createUser(String userId, String username, String password, String email) {
        User user = userMapper.toUser(userId,username,password,email);
        userRepository.save(user);
        return "User Created";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserId(String userId) {
        return userRepository.findById(userId).orElseThrow(()->new ApiRequestException("User ID does not exists"));
    }
}
package com.movieticket.movie.services.user_service;


import com.movieticket.movie.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    String createUser(String userId, String username, String password, String email);

    List<User>getAllUsers();

    User getUserId(String userId);
}


package com.movieticket.movie.services.theater_service;


import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TheaterService {
    String createTheater(String theaterId, String name, String location);

    List<Theater> getAllTheaters();

    Theater getTheaterId(String theaterId);
}
package com.movieticket.movie.services.theater_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.TheaterMapper;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.repositories.TheaterRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterServiceImpl implements TheaterService{
    private final TheaterRepository theaterRepository;
    private final TheaterMapper theaterMapper;
    private final UUIDUtil uuidUtil;

    public TheaterServiceImpl(TheaterRepository theaterRepository,TheaterMapper theaterMapper, UUIDUtil uuidUtil){
        this.theaterRepository = theaterRepository;
        this.theaterMapper = theaterMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createTheater(String theaterId, String name, String location) {
        Theater theater = theaterMapper.toTheater(theaterId,name,location);
        theaterRepository.save(theater);
        return "Theater created";
    }

    @Override
    public List<Theater> getAllTheaters() {
        return theaterRepository.findAll();
    }

    @Override
    public Theater getTheaterId(String theaterId) {
        return theaterRepository.findById(theaterId).orElseThrow(()-> new ApiRequestException("Theater ID does not exists"));
    }
}


package com.movieticket.movie.services.booking_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.BookingMapper;
import com.movieticket.movie.models.*;
import com.movieticket.movie.repositories.BookingRepository;
import com.movieticket.movie.utils.UUIDUtil;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final BookingMapper bookingMapper;
    private final UUIDUtil uuidUtil;


    public BookingServiceImpl(BookingRepository bookingRepository, BookingMapper bookingMapper, UUIDUtil uuidUtil) {
        this.bookingRepository = bookingRepository;
        this.bookingMapper = bookingMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createBooking(String bookingId, String bookingDate, PaymentMethod paymentMethod, PaymentStatus paymentStatus, User user, SeatAvailability seatAvailability, Showtime showtime) {

        DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
        LocalDateTime BookingDate = LocalDateTime.parse(bookingDate, formatter);

        Booking booking = bookingMapper.toBooking(uuidUtil.generateUuid(),BookingDate, paymentMethod, paymentStatus, user, showtime, seatAvailability);
        bookingRepository.save(booking);
        return "Booking Created";

    }


    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking getBookingId(String bookingId) {
        return bookingRepository.findById(bookingId).orElseThrow(()-> new ApiRequestException("Invalid Booking Id"));}
}







package com.movieticket.movie.services.booking_service;

import com.movieticket.movie.models.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BookingService {
    String createBooking(String bookingId, String bookingDate, PaymentMethod paymentMethod, PaymentStatus paymentStatus, User user, SeatAvailability seatAvailability, Showtime showtime);


    List<Booking> getAllBookings();

    Booking getBookingId(String bookingId);
}

package com.movieticket.movie.services.showtime_service;


import com.movieticket.movie.mappers.ShowtimeMapper;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Seat;
import com.movieticket.movie.models.Showtime;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.repositories.ShowtimeRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ShowtimeServiceImpl implements ShowtimeService{
    private final ShowtimeRepository showtimeRepository;
    private final ShowtimeMapper showtimeMapper;
    private final UUIDUtil uuidUtil;

    public ShowtimeServiceImpl(ShowtimeRepository showtimeRepository, ShowtimeMapper showtimeMapper,UUIDUtil uuidUtil){
        this.showtimeRepository = showtimeRepository;
        this.showtimeMapper =  showtimeMapper;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String createShowtime(String showtimeId, Movie movie, Theater theater, LocalDateTime startTime, LocalDateTime endTime) {
        Showtime showtime = showtimeMapper.toShowtime(uuidUtil.generateUuid(), movie,theater,startTime,endTime);
        showtimeRepository.save(showtime);
        return "Showtime created";
    }

    @Override
    public List<Showtime> getAllShowtimes() {
        return List.of();
    }

    @Override
    public Showtime getShowtimeId(String showtimeId) {
        return null;
    }
}



package com.movieticket.movie.services.showtime_service;


import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Showtime;
import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public interface ShowtimeService {

    String createShowtime(String showtimeId, Movie movie, Theater theater, LocalDateTime startTime,LocalDateTime endTime);

    List<Showtime>getAllShowtimes();

    Showtime getShowtimeId(String showtimeId);
}
package com.movieticket.movie.services.seat_service;

import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.SeatMapper;
import com.movieticket.movie.models.Seat;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.repositories.SeatRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatServiceImpl implements SeatService {
    private SeatRepository seatRepository;
    private SeatMapper seatMapper;
    private UUIDUtil uuidUtil;

    public SeatServiceImpl(SeatRepository seatRepository, SeatMapper seatMapper, UUIDUtil uuidUtil){
        this.seatRepository = seatRepository;
        this.seatMapper = seatMapper;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String createSeat(String seatId, String seatRow, String seatNumber, String seatType, String seatSection, Theater theater) {
        Seat seat = seatMapper.toSeat(uuidUtil.generateUuid(), seatRow,seatNumber,seatType,seatSection,theater);
        seatRepository.save(seat);
        return "Seat Created";
    }

    @Override
    public List<Seat> getAllSeats() {
        return seatRepository.findAll();
    }

    @Override
    public Seat getSeatId(String seatId) {
        return seatRepository.findById(seatId).orElseThrow(()-> new ApiRequestException("Seat Id does not exits"));
    }


}

package com.movieticket.movie.services.movie_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.MovieMapper;
import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.repositories.MovieRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements  MovieService{
    private  final MovieRepository movieRepository;
    private final MovieMapper movieMapper;
    private  final UUIDUtil uuidUtil;


    public MovieServiceImpl(MovieRepository movieRepository, MovieMapper movieMapper, UUIDUtil uuidUtil){
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createMovie(String movieId, String title,Genre genre, String duration, String rating, String poster) {
        Movie movie = movieMapper.toMovie(movieId, title,genre,duration,rating,poster);
        movieRepository.save(movie);
        return "Movie created";
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieId(String movieId) {
        return movieRepository.findById(movieId).orElseThrow(()-> new ApiRequestException("Movie Id does not exist"));
    }


}
package com.movieticket.movie.services.movie_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.MovieMapper;
import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.repositories.MovieRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements  MovieService{
    private  final MovieRepository movieRepository;
    private final MovieMapper movieMapper;
    private  final UUIDUtil uuidUtil;


    public MovieServiceImpl(MovieRepository movieRepository, MovieMapper movieMapper, UUIDUtil uuidUtil){
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createMovie(String movieId, String title,Genre genre, String duration, String rating, String poster) {
        Movie movie = movieMapper.toMovie(movieId, title,genre,duration,rating,poster);
        movieRepository.save(movie);
        return "Movie created";
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieId(String movieId) {
        return movieRepository.findById(movieId).orElseThrow(()-> new ApiRequestException("Movie Id does not exist"));
    }


}
package com.movieticket.movie.services.movie_service;


import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MovieService {
    String createMovie(String movieId, String title,  Genre genre, String duration, String rating, String poster);

    List<Movie>getAllMovies();

    Movie getMovieId(String movieId);
}


