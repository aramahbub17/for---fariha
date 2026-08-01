function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.opacity = Math.random();

    heart.style.animation = "floatUp 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 300);

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatUp{

0%{
transform:translateY(0) scale(1);
opacity:1;
}

100%{
transform:translateY(-120vh) scale(1.8);
opacity:0;
}

}
`;

document.head.appendChild(style);
