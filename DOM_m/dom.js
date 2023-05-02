var titled = document.getElementById('title')

console.log('before: ' ,title.innerText)

//titled.innerText = 'I will be a master!!!!!!!!!!'


var message = "mastering this things";

titled.innerHTML = `<p>${message}</p>`;

titled.style.color = 'green';


let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

red.onclick = () => console.log("red it is")
yellow.onclick = () => console.log("yellow it is")
green.onclick = () => console.log("green it is")

const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {'red': 0,'yellow': 0,'green': 0}


squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText =
timesClicked[square.value]
    }
})   