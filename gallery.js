const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

const captions = [
    "Happy Girlfriend Day, Amr Lokkhi Pakhii 💗",
    "You're my favorite person.",
    "Your smile is my favorite view.",
    "Thank you for being you. 🌸",
    "I hope this little surprise makes you smile. 🤍"
];

let current = 0;

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

function showPhoto() {
    slide.style.opacity = 0;

    setTimeout(() => {
        slide.src = images[current];
        caption.innerHTML = captions[current];
        slide.style.opacity = 1;
    }, 300);
}

function nextPhoto() {
    current = (current + 1) % images.length;
    showPhoto();
}

function prevPhoto() {
    current = (current - 1 + images.length) % images.length;
    showPhoto();
}
