const images = [
    "images/photo1.jpg",
    "images/IMG_20250331_154904_555.jpg",
    "images/IMG_20250914_171346_690.jpg",
    "images/IMG_20260522_194521_539.jpg",
    "images/IMG_20260719_222654_540.jpg",
    "images/file_00000000543c72078da120a8363a66fa.png"
];

const captions = [
    "Happy Girlfriend Day, Kuchupuchu 💗",
    "You're my favorite person.",
    "Your smile is my favorite view.",
    "Thank you for being you. 🌸",
    "You make every moment special. 💗",
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
