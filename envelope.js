function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(() => {

        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "0";

    }, 1800);

    setTimeout(() => {

        window.location.href = "welcome.html";

    }, 2800);

}
