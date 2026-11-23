function bukaUndangan() {
    const sampul = document.getElementById("opening");
    const isi = document.getElementById("isiUndangan");
    const musik = document.getElementById("musik");

    if (sampul) sampul.style.display = "none";
    if (isi) isi.hidden = false;

    // Putar musik otomatis saat undangan dibuka (jika file audio tersedia)
    if (musik && musik.paused) {
        musik.play().then(() => {
            updateTombolMusik(true);
        }).catch(() => {});
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleMusik() {
    const musik = document.getElementById("musik");
    if (!musik) return;

    if (musik.paused) {
        musik.play().then(() => {
            updateTombolMusik(true);
        }).catch((err) => {
            console.error("Musik gagal diputar:", err);
        });
    } else {
        musik.pause();
        updateTombolMusik(false);
    }
}

function updateTombolMusik(sedangMenyala) {
    const tombol = document.getElementById("tombolMusik");
    if (!tombol) return;
    tombol.textContent = sedangMenyala ? "♫ Musik: ON" : "♫ Musik: OFF";
}

const formRSVP = document.getElementById("formRSVP");
if (formRSVP) {
    formRSVP.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const kehadiran = document.getElementById("kehadiran").value;
        const jumlah = document.getElementById("jumlah").value;
        const pesan = document.getElementById("pesanRSVP");

        if (pesan) {
            pesan.textContent =
                "Terima kasih, " + nama +
                "! Konfirmasi Anda: " + kehadiran +
                ". Jumlah orang: " + jumlah + ".";
        }

        this.reset();
    });
}