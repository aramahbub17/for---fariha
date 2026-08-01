const text = `HAPPY GIRLFRIEND DAY, LOKKHI PAKHIII 💗

On this special day, I just want to remind you how incredibly grateful I am to have you in my life. You make my world brighter with your smile, your kindness, your care, and the love you give so effortlessly. Every moment I spend with you becomes a beautiful memory that I know I'll cherish forever.

Thank you for being my happiness, my peace, my safe place, and my favorite person. Even the smallest conversations with you can make my entire day better. You have a way of making ordinary moments feel so special, nd that's something I'll always appreciate.

I made this little surprise just for you because you deserve to feel loved, appreciated, and celebrated-not only today, but every single day. I hope this brings a smile to your face, just like you bring one to mine.

I can't wait for all the memories we still have to create together the laughs we'll share, the adventures we'll go on, and the little moments that will mean everything to us. No matter where life takes us, I hope we always choose each other.

Happy National Girlfriend Day, my love. You will forever have a special place in my heart. Thank you for being you, for staying by my side, and for making my life so much more beautiful.

I love you today, tomorrow, and forever. 💗

With all my love,
Mahbub`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML +=
            text.charAt(i) === "\n" ? "<br>" : text.charAt(i);

        i++;
        setTimeout(typeWriter, 35);
    }
}

window.onload = typeWriter;
