function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (18 + Math.random() * 28) + "px";
    heart.style.pointerEvents = "none";
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.animation = "floatUp 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 250);

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatUp{
0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(-120vh) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(style);

// Fade-in animation
window.onload = () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s";
        document.body.style.opacity = "1";
    }, 100);
};
