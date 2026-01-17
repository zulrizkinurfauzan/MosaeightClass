// Inisialisasi Library Animasi AOS
AOS.init();

// ==========================================
// 1. PENGATURAN BACKGROUND SLIDESHOW HERO 
// ==========================================
const backgroundImages = [
    'assets/fatra.jpg', 'assets/clara.jpg', 'assets/bintang.jpg', 'assets/johanes.jpg',
    'assets/amel.jpg', 'assets/nisa.jpg', 'assets/anang.jpg', 'assets/haryadi.jpg',
    'assets/dendi.jpg', 'assets/fauzan.jpg', 'assets/riksan.jpg', 'assets/syifa.jpg',
    'assets/raju.jpg', 'assets/anita.jpg', 'assets/irfan.jpg', 'assets/fikri.jpg',
    'assets/sani.jpg', 'assets/pedro.jpg', 'assets/fajar.jpg', 'assets/ririn.jpg',
    'assets/robernat.jpg', 'assets/shofia.jpg', 'assets/suci.jpg', 'assets/yasmin.jpg',
    'assets/zahwa.jpg', 'assets/jihan.jpg', 'assets/fakria.jpg', 'assets/tania.jpg',
    'assets/febrianti.jpg', 'assets/rianita.jpg', 'assets/syafa.jpg', 'assets/revan.jpg',
    'assets/raisya.jpg', 'assets/rival.jpg', 'assets/putri.jpg', 'assets/dahrel.jpg',
    'assets/nazwa.jpg', 'assets/zaki.jpg'
];

let currentBg = 0;
const heroBg = document.getElementById('hero-bg');

if(heroBg) {
    heroBg.style.backgroundImage = `url('${backgroundImages[0]}')`;
    setInterval(() => {
        currentBg = (currentBg + 1) % backgroundImages.length;
        heroBg.style.backgroundImage = `url('${backgroundImages[currentBg]}')`;
    }, 3000);
}

// ==========================================
// 2. DATA SISWA & PESAN KUSTOM
// ==========================================
const studentGrid = document.getElementById('student-grid');

// Silakan edit bagian 'pesan' di bawah ini sesuai keinginan siswa
const dataSiswa = [
    { nama: "Fatra",    foto: "assets/fatra.jpg",    ig: "4lftraaa_",        pesan: "Jika di kabulkan berarti baik, jika tidak berarti ada yang lebih baik." },
    { nama: "Clara",    foto: "assets/clara.jpg",    ig: "claraaly.a",       pesan: "We'll never be those kids again - Ivy, frank ocean." },
    { nama: "Bintang",  foto: "assets/bintang.jpg",  ig: "bintanganggiatma_", pesan: "I ain’t a kid no more - Ivy,Frank Ocean." },
    { nama: "Johanes",  foto: "assets/johanes.jpg",  ig: "johan_10udhnr",    pesan: "Life doesn't always have to be fast, the important thing is to keep going and never stop believing in yourself." },
    { nama: "Amel",     foto: "assets/amel.jpg",     ig: "ameliiachairi",    pesan: "Kita berpisah untuk berperang demi masa depan, kelak kita akan dipertemukan kembali sebagai pemenang di jalan kita masing-masing." },
    { nama: "Nisa",     foto: "assets/nisa.jpg",     ig: "novandnii_",       pesan: "Sorry for being funny and pretty, I can't help it." },
    { nama: "Anang",    foto: "assets/anang.jpg",    ig: "bgamec217",        pesan: "Tidak ada kesuksesan yang sejati tanpa adanya kebersamaan." },
    { nama: "Haryadi",  foto: "assets/haryadi.jpg",  ig: "drag3227",         pesan: "Obat terbaik dari segala kesulitan adalah kesabaran." },
    { nama: "Dendi",    foto: "assets/dendi.jpg",    ig: "dendialfazry",     pesan: "Jika kelak kamu sukses, jangan pernah melupakan kebersamaan saat ini kawan." },
    { nama: "Fauzan",   foto: "assets/fauzan.jpg",   ig: "raven_clawws",     pesan: "Coding is my life, but friends are forever." },
    { nama: "Riksan",   foto: "assets/riksan.jpg",   ig: "sanlikegloomy",    pesan: "Destroy the old you, before it destroys you." },
    { nama: "Syifa",    foto: "assets/syifa.jpg",    ig: "syifaulia.m",      pesan: "Kenali dirimu sebelum mengenal orang lain." },
    { nama: "Raju",     foto: "assets/raju.jpg",     ig: "anak_partamo_amak",pesan: "Masa depan tergantung dari niat dan usahamu, bukan seberapa tinggi sekolahmu." },
    { nama: "Anita",    foto: "assets/anita.jpg",    ig: "dvryloves_",       pesan: "waktu boleh berjalan, tapi cerita kita tak akan hilang." },
    { nama: "Irfan",    foto: "assets/irfan.jpg",    ig: "lenochvon",        pesan: "Tindakan adalah kunci dasar untuk semua kesuksesan." },
    { nama: "Fikri",    foto: "assets/fikri.jpg",    ig: "fikri.zakwan.359", pesan: "Dalam bangun tidur kamu mempunyai 2 pilihan, melanjutkan tidurmu atau bangun dan raih mimpimu." },
    { nama: "Sani",     foto: "assets/sani.jpg",     ig: "ambaleonbonaparte",pesan: "Aku akan menemukan jalan, atau membuat jalan sendiri." },
    { nama: "Pedro",    foto: "assets/pedro.jpg",    ig: "pdro.tg",          pesan: "Jangan biarkan kemarin menyita terlalu banyak waktu hari ini." },
    { nama: "Fajar",    foto: "assets/fajar.jpg",    ig: "fajar23_.03",      pesan: "Jangan menyerah saat berproses, karna kita tidak tau finish kita kapan." },
    { nama: "Ririn",    foto: "assets/ririn.jpg",    ig: "yeskeell",         pesan: "Life is in colorful, but black and white is more realistic." },
    { nama: "Robernat", foto: "assets/robernat.jpg", ig: "inoclute",         pesan: "Langkah kecil hari ini di sekolah , adalah awal mimpi besar di masa depan." },
    { nama: "Shofia",   foto: "assets/shofia.jpg",   ig: "im_sofhia_8",      pesan: "Pikiran positif menghasilkan hidup yang positif." },
    { nama: "Suci",     foto: "assets/suci.jpg",     ig: "scirahmadhni_",    pesan: "Kenangan ini adalah fondasi masa depan kita." },
    { nama: "Yasmin",   foto: "assets/yasmin.jpg",   ig: "yasminsheilarista",pesan: "Kita tidak selalu berjumpa dengan orang baik tapi jadilah baik untuk setiap orang yang kita jumpai." },
    { nama: "Zahwa",    foto: "assets/zahwa.jpg",    ig: "zahwa_agustin_",   pesan: "Prestasi tidak menentukanmu sukses tetapi sukses ditentukan oleh caramu berproses." },
    { nama: "Jihan",    foto: "assets/jihan.jpg",    ig: "jihanintanamelia", pesan: "Mengejar impian itu bukan seperti pesawat yang sekali terbang langsung sampai tujuan tidak ada kesuksesan yang instan, semua butuh proses dan usaha yang mahal." },
    { nama: "Aqela",    foto: "assets/fakria.jpg",   ig: "aqela16_",         pesan: "Jadilah pribadi yang menantang masa depan, bukan pengecut yang aman di zona nyaman." },
    { nama: "Tania",    foto: "assets/tania.jpg",    ig: "lmopqrst__",       pesan: "Be refined, polite and well-spoken." },
    { nama: "Febrianti",foto: "assets/febrianti.jpg",ig: "fnllya_",          pesan: "Jika nanti kita sibuk dengan jalan masing-masing, semoga kenangan di sini tetap jadi tempat pulang." },
    { nama: "Rianita",  foto: "assets/rianita.jpg",  ig: "nttaaamp",         pesan: "It’s not always easy, but that’s life. Be strong, because there are better days ahead." },
    { nama: "Syafa",    foto: "assets/syafa.jpg",    ig: "asyafa_sya",       pesan: "Dari kelas yang sama, menuju mimpi yang berbeda." },
    { nama: "Revan",    foto: "assets/revan.jpg",    ig: "revan_alridho",    pesan: "Jangan pernah menyerah karna kmu tidak tahu apa yang terjadi selanjutnya." },
    { nama: "Raisya",   foto: "assets/raisya.jpg",   ig: "raisysmyt",        pesan: "Makin paham hidup, makin jarang ke-trigger." },
    { nama: "Rival",    foto: "assets/rival.jpg",    ig: "falboy_aja13",     pesan: "Sehat selalu kawan, semoga kita semua sukses dan bisa bertemu lagi." },
    { nama: "Putri",    foto: "assets/putri.jpg",    ig: "ptri_tiaa",        pesan: "Cara termudah menjadi pandai adalah belajar dari hal terbodoh yang pernah kamu lakukan." },
    { nama: "Dahrel",   foto: "assets/dahrel.jpg",   ig: "allzerrrr_",       pesan: "Kalau memang belum sampai, bukan berarti tidak tercapai." },
    { nama: "Nazwa",    foto: "assets/nazwa.jpg",    ig: "nazwasrnd",        pesan: "Hidup yang tidak di pertaruhkan, tidak akan di menangkan." },
    { nama: "Zaki",     foto: "assets/zaki.jpg",     ig: "_abdulmuzaki",     pesan: "Jangan bangun saat matahari bersinar, bangun lah  lebih awal dan biarkan matahari yang melihat mu bersinar." }
];

if(studentGrid) {
    dataSiswa.forEach((siswa, index) => {
        // PERUBAHAN: Menambahkan parameter pesan ke dalam fungsi openLightbox
        // Menggunakan replace untuk quote agar aman jika ada tanda kutip di dalam pesan
        const safePesan = siswa.pesan ? siswa.pesan.replace(/'/g, "\\'") : "Belum ada pesan.";
        
        let html = `
            <div class="card" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="profile-link" onclick="openLightbox('${siswa.foto}', '${safePesan}')" title="klik untuk lihat pesan dan foto" style="cursor: pointer;">
                    <img src="${siswa.foto}" alt="${siswa.nama}" onerror="this.src='https://via.placeholder.com/200?text=No+Img'">
                </div>
                <h3>${siswa.nama}</h3>
                <a href="https://instagram.com/${siswa.ig}" target="_blank" class="ig-btn">
                    <i class="fab fa-instagram"></i> Follow
                </a>
            </div>
        `;
        studentGrid.innerHTML += html;
    });
}


// ==========================================
// 3. GENERATE FOTO MOMEN (1-104)
// ==========================================
const totalMoments = 104; // UPDATE: Menjadi 104 Foto
const momentGrid = document.getElementById('moment-grid');

if (momentGrid) {
    momentGrid.innerHTML = "";

    for (let j = 1; j <= totalMoments; j++) {
        let momentUrl = `assets/momen${j}.jpeg`; 
        let delay = (j % 5) * 100; 

        // Untuk momen, pesannya dikosongkan ('')
        let html = `
            <div class="moment-item" data-aos="zoom-in" data-aos-delay="${delay}" onclick="openLightbox('${momentUrl}', '')">
                <img src="${momentUrl}" alt="Momen ${j}" onerror="this.src='https://via.placeholder.com/400x600?text=Momen+${j}+Belum+Ada'">
                <div class="overlay">
                    <i class="fas fa-search-plus fa-2x" style="color:white"></i>
                </div>
            </div>
        `;
        momentGrid.innerHTML += html;
    }
}

// ==========================================
// 3.5 GENERATE FOTO HAPPY GRADUATION
// ==========================================
const totalGraduation = 20; // 20 FOTO
const graduationGrid = document.getElementById('graduation-grid');

if (graduationGrid) {
    graduationGrid.innerHTML = "";

    for (let k = 1; k <= totalGraduation; k++) {
        let gradUrl = `assets/lulus${k}.jpg`; 
        let delay = (k % 5) * 100; 

        let html = `
            <div class="moment-item" data-aos="zoom-in" data-aos-delay="${delay}" onclick="openLightbox('${gradUrl}', '')">
                <img src="${gradUrl}" alt="Happy Graduation ${k}" onerror="this.src='https://via.placeholder.com/400x600?text=Lulus+${k}'">
                <div class="overlay">
                    <i class="fas fa-search-plus fa-2x" style="color:white"></i>
                </div>
            </div>
        `;
        graduationGrid.innerHTML += html;
    }
}


// ==========================================
// 4. LOGIKA LIGHTBOX DENGAN PESAN
// ==========================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxMsg = document.getElementById('lightbox-msg');

// Fungsi sekarang menerima parameter 'msg'
function openLightbox(src, msg) {
    if(lightbox && lightboxImg) {
        lightboxImg.src = src;
        
        // Cek jika ada pesan, tampilkan. Jika tidak, sembunyikan elemen pesan.
        if (msg && msg !== "") {
            lightboxMsg.innerText = `"${msg}"`;
            lightboxMsg.style.display = "block";
        } else {
            lightboxMsg.style.display = "none";
        }

        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    if(lightbox) {
        lightbox.classList.remove('active');
        // Bersihkan teks saat ditutup agar tidak glitch saat dibuka lagi
        if(lightboxMsg) lightboxMsg.innerText = "";
    }
}


// ==========================================
// 5. MUSIK MANUAL & ALERT
// ==========================================
const audio = document.getElementById('backsound');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

setTimeout(function() {
    alert("Halo Guys! \n\nJangan lupa hidupkan musik dengan menekan tombol Play di pojok kiri bawah layar ya! 🎧");
}, 1000);

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    } else {
        audio.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
}

// ==========================================
// 6. GENERATE BACKGROUND GRID
// ==========================================
const bgGrid = document.getElementById('bg-grid');
if(bgGrid) {
    for(let i=0; i<300; i++) {
        let span = document.createElement('span');
        bgGrid.appendChild(span);
    }
}

// ==========================================
// 7. INISIALISASI ANIMASI
// ==========================================
setTimeout(() => {
    AOS.init();
}, 500);
