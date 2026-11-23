function bukaUndangan() {

    const sampul = document.getElementById("opening");
    const isi = document.getElementById("isiUndangan");

    sampul.style.display = "none";
    isi.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
document.getElementById("formRSVP").addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const kehadiran = document.getElementById("kehadiran").value;
    const jumlah = document.getElementById("jumlah").value;

    document.getElementById("pesanRSVP").textContent =
        "Terima kasih, " + nama +
        "! Konfirmasi Anda: " + kehadiran +
        ". Jumlah orang: " + jumlah + ".";

    this.reset();

});
