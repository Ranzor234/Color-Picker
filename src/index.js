import "./styles.css";

var input = document.querySelector("#color");
		var changed = document.getElementById("container");

		input.addEventListener("input", () => {
			var color = input.value;
			changed.style.backgroundColor = color;
		});
