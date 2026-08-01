function unlockPage() {

    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let music = document.getElementById("bgMusic");

    if (password === "201017") {

        message.style.color = "#00ff88";
        message.innerHTML = "Unlocking...";

        // Start Background Music
        music.play().catch(() => {
            console.log("Autoplay blocked.");
        });

        setTimeout(function () {
            window.location.href = "envelope.html";
        }, 1500);

    } else {

        message.style.color = "#ff4d4d";
        message.innerHTML = "❌ Wrong Password";

    }

}
