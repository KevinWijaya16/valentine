const text = `Di hari Valentine ini...

Aku cuma ingin kamu tahu,
bahwa kamu adalah bagian terindah dalam hidupku ❤️

Terima kasih sudah hadir,
menjadi alasan aku tersenyum setiap hari.

Maaf jika aku masih banyak salah.
Langgeng terus buat kita berdua yaaa byyy

Happy Valentine, sayangku 💖`;

let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 30);
    }
}
typingEffect();

/* ========= TOMBOL SAYANG ========= */
function love() {
    showRomanticScene();
}

function showBigLove() {
    const love = document.createElement("div");
    love.innerHTML = "❤️";
    love.classList.add("big-love");
    document.body.appendChild(love);
}


// show romantic
function showRomanticScene() {

    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play();

    // Blur background
    const blur = document.createElement("div");
    blur.classList.add("blur-bg");
    document.body.appendChild(blur);

    // Container foto
    const container = document.createElement("div");
    container.classList.add("photo-container");

    container.innerHTML = `
        <img src="backgraund.jpeg" alt="Foto Kita">
        <h2>Kevin ❤️ Suli</h2>
    `;

    document.body.appendChild(container);

    // Bunga mekar
    for (let i = 0; i < 15; i++) {
        createBloom();
    }

    // LOVE besar muncul setelah 3 detik
    setTimeout(() => {
        showBigLove();
    }, 3000);

    // ⬇️ HAPUS SEMUA SETELAH LAGU SELESAI
    music.onended = function() {
        blur.remove();
        container.remove();

        const love = document.querySelector(".big-love");
        if (love) love.remove();
    };
}




/* ========= BUNGA MEKAR HALUS ========= */
function createBloom() {
    const flower = document.createElement("div");
    flower.innerHTML = "🌸";

    flower.style.position = "fixed";
    flower.style.top = "20%";
    flower.style.left = "50%";
    flower.style.fontSize = Math.random() * 40 + 40 + "px";
    flower.style.opacity = "0.9";

    // random arah keluar dari tengah
    const randomX = (Math.random() - 0.5) * 600;
    const randomY = (Math.random() - 0.5) * 600;

    flower.style.transform = "translate(-50%, -50%) scale(0)";
    flower.style.animation = "softBloom 3s ease-out forwards";
    flower.style.zIndex = "1200"; // ⬅️ LEBIH TINGGI DARI FOTO

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 3000);
}


/* Animasi bunga */
const style = document.createElement("style");
style.innerHTML = `
@keyframes softBloom {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

/* ========= TOMBOL KABUR ========= */
function moveButton() {
    const button = document.querySelector(".no");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

/* ========= LOVE MELAYANG ========= */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);
