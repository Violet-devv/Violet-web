// ==========================================
// 1. LOGIKA TOMBOL MASUK
// ==========================================
const btnMasuk = document.getElementById('enter-btn');
const mainContent = document.getElementById('main-content');

btnMasuk.addEventListener('click', () => {
    // Munculin konten
    mainContent.classList.remove('hidden-content');
    mainContent.classList.add('fade-in');
    
    // Sembunyiin tombol
    btnMasuk.style.display = 'none';
    
    // Scroll ke About
    setTimeout(() => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});


// ==========================================
// 2. EFEK NGETIK (EDIT TEKSNYA DI SINI)
// ==========================================
const texts = [
    "Siswa Kelas 10 Animasi", 
    "Anggota OSIS 2026-2027", 
    "Seksi Bidang 6 (TIK)", 
    "Motion Graphic Enthusiast"
]; 

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing').textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Jeda sebelum ganti kata (2 detik)
    } else {
        setTimeout(type, 100); // Kecepatan ngetik
    }
})();
// ==========================================
// LOGIKA TOMBOL KEMBALI KE ATAS
// ==========================================
const backToTopBtn = document.getElementById("back-to-top");
const mainContentDiv = document.getElementById("main-content");

// 1. Munculin tombol kalau layar di-scroll ke bawah
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// 2. Kalau tombol diklik
backToTopBtn.addEventListener("click", () => {
    // Scroll ke atas dengan mulus
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Tunggu setengah detik (biar scroll-nya selesai), baru sembunyiin portofolio
    setTimeout(() => {
        mainContentDiv.classList.add("hidden-content"); // Sembunyiin lagi
        mainContentDiv.classList.remove("fade-in");
        
        // Munculin lagi tombol "Masuk ke Portofolio" yang tadi ilang
        document.getElementById('enter-btn').style.display = 'inline-block';
    }, 600); 
});
