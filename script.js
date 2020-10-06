let doremon = document.querySelector(".doremon");
let doracake = document.querySelector(".doracake");
let gameover = document.querySelector("#gameover");
let score = 0;
let cross = true;

let dead = new Audio("./assets/dead.mp3");
let titlesong = new Audio("./assets/titlesong.mp3");

setTimeout(() => {
    titlesong.play();
}, 1000);
function updateScore(score) {
    const scoreBox = document.querySelector("#score");
    scoreBox.innerText = "Your Score: " + score;
}
setInterval(() => {
    let doremon = document.querySelector(".doremon");
    let doracake = document.querySelector(".doracake");
    let gameover = document.querySelector("#gameover");
    let scoreBox = document.querySelector("#score");

    let dx = parseInt(
        window.getComputedStyle(doremon, null).getPropertyValue("left")
    );
    let dy = parseInt(
        window.getComputedStyle(doremon, null).getPropertyValue("top")
    );

    let ox = parseInt(
        window.getComputedStyle(doracake, null).getPropertyValue("left")
    );
    let oy = parseInt(
        window.getComputedStyle(doracake, null).getPropertyValue("top")
    );

    let offsetx = Math.abs(dx - ox);
    let offsety = Math.abs(dy - oy);
    console.log(offsetx, offsety);

    if (offsetx < 150 && offsety < 104) {
        titlesong.pause();
        dead.play();
        doracake.classList.remove("doracakeanimation");
        gameover.style.visibility = "visible";
        scoreBox.style.top = "30vh";
        scoreBox.style.left = "35vh";
        scoreBox.style.fontSize = "3rem";
    } else if (offsetx < 200 && cross) {
        score += 1;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1500);

        setTimeout(() => {
            let anidurval = parseFloat(
                window
                    .getComputedStyle(doracake, null)
                    .getPropertyValue("animation-duration")
            );
            doracake.style.animationDuration = anidurval - 0.1 + "s";
        }, 500);
    }
}, 100);

function moveRight() {
    let doremon = document.querySelector(".doremon");
    let leftvalue = parseInt(
        window.getComputedStyle(doremon, null).getPropertyValue("left")
    );
    console.log(leftvalue);
    doremon.style.left = leftvalue + 100 + "px";
}

function moveLeft() {
    let doremon = document.querySelector(".doremon");
    leftvalue = parseInt(
        window.getComputedStyle(doremon, null).getPropertyValue("left")
    );
    doremon.style.left = leftvalue - 100 + "px";
}

document.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
    const key = e.keyCode;

    if (key === 38) {
        doremon.classList.add("jump");
        setTimeout(() => {
            doremon.classList.remove("jump");
        }, 600);
    }
    if (key == 39) {
        moveRight();
    }
    if (key == 37) {
        moveLeft();
    }
    if (key == 32) {
        doremon.classList.add("cooljump");
        setTimeout(() => {
            doremon.classList.remove("cooljump");
        }, 600);
    }
});
