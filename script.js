function unlockPage() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let surprise = document.getElementById("surprise");

    if (password === "201017") {

        message.style.color = "#00ff88";
        message.innerHTML = "Unlocked 🤍";

        setTimeout(function () {
            surprise.style.display = "block";
            document.querySelector(".lock-container").scrollIntoView({
                behavior: "smooth"
            });
        }, 800);

    } else {

        message.style.color = "#ff4d4d";
        message.innerHTML = "❌ Wrong Password";

    }
}
