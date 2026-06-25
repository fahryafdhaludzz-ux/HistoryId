function showDetail(nama, deskripsi, periode, lokasi, gambar) {
    document.getElementById('modalTitle').textContent = nama;
    document.getElementById('modalImage').src = gambar;
    document.getElementById('modalDeskripsi').textContent = deskripsi;
    document.getElementById('modalPeriode').textContent = periode;
    document.getElementById('modalLokasi').textContent = lokasi;
    
    new bootstrap.Modal(document.getElementById('fossilModal')).show();
}