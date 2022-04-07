import "./style.css";
import Circle from "./Circle";
import { randomBetween, randomFrom } from "./random";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

// Implementation
let objects;
function init() {
    objects = [];

    // add circles
    for (let i = 0; i <= 50; i++) {
        objects.push(
            new Circle(
                canvas.width / 2,
                canvas.height / 2,
                randomBetween(4, 8),
                randomFrom(colors),
                randomBetween(50, 120)
            )
        );
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    // don't clear the canvas/snapshot
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // but instead draw a layer with opacity over the "current" snapshot
    ctx.fillStyle = "rgba(255,255,255, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // now draw the new snapshot
    objects.forEach((object) => {
        object.update(ctx, mouse);
    });
}

init();
animate();
