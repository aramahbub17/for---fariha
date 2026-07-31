const text =
"Every memory on this page was made with you in mind. I hope this little surprise brings a smile to your face.";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

window.onload = typeWriter;

function nextPage() {
    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 1000);
}
