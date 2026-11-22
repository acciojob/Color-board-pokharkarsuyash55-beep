//your JS code here. If required.

let container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
}

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        let randomColor = getRandomColor();

        event.target.style.backgroundColor = randomColor;

        setTimeout(() => {
            event.target.style.backgroundColor = "#1d1d1d";
        }, 1000);
    }
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

		target.style.backgroundColor=randomColor;

		setTimeOut(()=>{
			target.style.backgroundColor="#1d1d1d";
		},1000);
	}
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}