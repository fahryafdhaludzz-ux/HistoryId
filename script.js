function showDetail(nama, deskripsi, periode, lokasi, gambar) {
    document.getElementById('modalTitle').textContent = nama;
    document.getElementById('modalImage').src = gambar;
    document.getElementById('modalDeskripsi').textContent = deskripsi;
    document.getElementById('modalPeriode').textContent = periode;
    document.getElementById('modalLokasi').textContent = lokasi;

    new bootstrap.Modal(document.getElementById('fossilModal')).show();

    function bacakanPenjelasan() {

    speechSynthesis.cancel();

    const nama =
        document.getElementById("modalTitle").textContent;

    const deskripsi =
        document.getElementById("modalDeskripsi").textContent;

    const periode =
        document.getElementById("modalPeriode").textContent;

    const lokasi =
        document.getElementById("modalLokasi").textContent;

    const teks =
        nama + ". " +
        deskripsi + ". " +
        "Periode. " + periode + ". " +
        "Lokasi penemuan. " + lokasi;

    const suara = new SpeechSynthesisUtterance(teks);

    suara.lang = "id-ID";
    suara.rate = 1;
    suara.pitch = 1;

    speechSynthesis.speak(suara);
}

function hentikanSuara() {
    speechSynthesis.cancel();
}
}

// DATA HEWAN
// DATA HEWAN
const hewan = [
    // Karnivora
    { nama: "Tyrannosaurus Rex", link: "karnivora.html" },
    { nama: "Spinosaurus", link: "karnivora.html" },
    { nama: "Velociraptor", link: "karnivora.html" },
    { nama: "Giganotosaurus", link: "karnivora.html" },
    { nama: "Allosaurus", link: "karnivora.html" },
    { nama: "Carnotaurus", link: "karnivora.html" },

    // Herbivora
    { nama: "Brachiosaurus", link: "herbivora.html" },
    { nama: "Triceratops", link: "herbivora.html" },
    { nama: "Stegosaurus", link: "herbivora.html" },
    { nama: "Ankylosaurus", link: "herbivora.html" },
    { nama: "Parasaurolophus", link: "herbivora.html" },
    { nama: "Diplodocus", link: "herbivora.html" },

    // Lainnya
    { nama: "Arthropleura", link: "lainnya.html" },
    { nama: "Titanoboa", link: "lainnya.html" },
    { nama: "Dimetrodon", link: "lainnya.html" },
    { nama: "Megatherium", link: "lainnya.html" },
    { nama: "Kaprosuchus", link: "lainnya.html" },
    { nama: "Paraceratherium", link: "lainnya.html" },
    { nama: "Beelzebub", link: "lainnya.html" },
    { nama: "Dodo", link: "lainnya.html" },
    { nama: "Moschops", link: "lainnya.html" }
];

const search = document.getElementById("search");

if (search) {
    search.addEventListener("change", function () {
        const keyword = search.value.toLowerCase();

        const hasil = hewan.find(h =>
            h.nama.toLowerCase().includes(keyword)
        );

        if (hasil) {
            window.location.href =
    hasil.link + "?hewan=" + encodeURIComponent(hasil.nama);
        } else {
            alert("Hewan tidak ditemukan");
        }
    });
}

window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);
    const namaHewan = params.get("hewan");

    if (!namaHewan) return;

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.querySelector(".card-title");

        if (
            title &&
            title.textContent.toLowerCase() === namaHewan.toLowerCase()
        ) {

            card.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

setTimeout(() => {
    card.click();
}, 700);
            card.click();
        }
    });
});

function bacakanPenjelasan() {
    const deskripsi = document.getElementById("modalDeskripsi").innerText;
    const periode = document.getElementById("modalPeriode").innerText;
    const lokasi = document.getElementById("modalLokasi").innerText;

    const teks = `
        Deskripsi: ${deskripsi}.
        Periode: ${periode}.
        Lokasi penemuan: ${lokasi}.
    `;

    const suara = new SpeechSynthesisUtterance(teks);
    suara.lang = "id-ID";

    speechSynthesis.speak(suara);
}