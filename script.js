/**
 * LION TUG GAME ENGINE
 * Dikembangkan oleh: Mashar
 * Deskripsi: Logika utama permainan tarik tambang interaktif
 */

let masterBank = [];
let p1Bank = [];
let p2Bank = [];
let posisiTali = 0;
let p1HP = 5;
let p2HP = 5;
let kategoriAktif = "";

// 1. Inisialisasi Menu saat Halaman Dimuat
window.onload = () => {
    const menu = document.getElementById('menu-soal');
    menu.innerHTML = '';
    
    // Mengambil daftar kategori dari objek yang ada di data.js
    if (typeof daftarKategori !== 'undefined') {
        Object.keys(daftarKategori).forEach(name => {
            const btn = document.createElement('button');
            btn.className = 'btn-sheet';
            btn.innerText = name;
            btn.onclick = () => mulaiGame(name);
            menu.appendChild(btn);
        });
    } else {
        menu.innerHTML = "<p style='color:yellow'>Data soal tidak ditemukan!</p>";
    }
};

// 2. Fungsi Memulai Permainan
function mulaiGame(namaKategori) {
    kategoriAktif = namaKategori;
    masterBank = daftarKategori[namaKategori];
    
    // Transisi Layar
    document.getElementById('welcome-screen').style.transform = 'translateY(-100%)';
    document.getElementById('game-container').style.display = 'block';
    
    // Reset State
    mainLagi();
}

// 3. Update Visual Nyawa (Hearts)
function updateHP() {
    [1, 2].forEach(p => {
        const container = document.getElementById(`hp${p}`);
        const hp = (p === 1) ? p1HP : p2HP;
        container.innerHTML = '';
        for(let i=0; i<5; i++) {
            const s = document.createElement('span');
            s.className = (i < hp) ? 'heart' : 'heart-empty';
            s.innerText = '❤️';
            container.appendChild(s);
        }
    });
}

// 4. Render Soal ke Layar
function renderSoal(player) {
    const bank = (player === 'p1') ? p1Bank : p2Bank;
    
    // Jika bank soal habis, acak ulang dari masterBank
    if (bank.length === 0) {
        const shuffled = [...masterBank].sort(() => Math.random() - 0.5);
        if (player === 'p1') p1Bank = shuffled; else p2Bank = shuffled;
        return renderSoal(player);
    }
    
    const currentSoal = bank[0];
    document.getElementById(player === 'p1' ? 'q1' : 'q2').innerText = currentSoal.q;
    
    const optContainer = document.getElementById(player === 'p1' ? 'opts1' : 'opts2');
    optContainer.innerHTML = '';
    
    // Acak posisi pilihan jawaban (A, B, C, D)
    [...currentSoal.options].sort(() => Math.random() - 0.5).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-opt';
        btn.innerText = opt;
        btn.onclick = () => cekJawaban(player, opt, currentSoal.a, btn);
        optContainer.appendChild(btn);
    });
}

// 5. Logika Cek Jawaban
function cekJawaban(player, dipilih, benar, btn) {
    if (dipilih == benar) {
        // Efek Visual Menarik Tali
        posisiTali += (player === 'p1' ? -45 : 45);
        document.getElementById('tali').style.transform = `translateX(${posisiTali}px)`;
        
        // Hapus soal yang sudah dijawab benar, lalu ganti baru
        if (player === 'p1') p1Bank.shift(); else p2Bank.shift();
        renderSoal(player);
        cekPemenang();
    } else {
        // SALAH JAWAB: Nyawa berkurang & ganti soal otomatis
        if (player === 'p1') { 
            p1HP--; 
            p1Bank.shift(); 
        } else { 
            p2HP--; 
            p2Bank.shift(); 
        }
        
        // Efek Getar jika salah
        const card = document.getElementById(player === 'p1' ? 'card-p1' : 'card-p2');
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
        
        updateHP();
        renderSoal(player);
        cekPemenang();
    }
}

// 6. Cek Kondisi Kemenangan
function cekPemenang() {
    let win = false;
    
    // Cek berdasarkan posisi tali
    if (Math.abs(posisiTali) >= 300) {
        document.getElementById('winner-name').innerText = posisiTali < 0 ? "TIM A MENANG!" : "TIM B MENANG!";
        document.getElementById('win-reason').innerText = "Berhasil menarik harta karun ke area tim!";
        win = true;
    } 
    // Cek berdasarkan nyawa habis
    else if (p1HP <= 0) {
        document.getElementById('winner-name').innerText = "TIM B MENANG!";
        document.getElementById('win-reason').innerText = "Tim A kehabisan nyawa karena terlalu banyak salah!";
        win = true;
    } else if (p2HP <= 0) {
        document.getElementById('winner-name').innerText = "TIM A MENANG!";
        document.getElementById('win-reason').innerText = "Tim B kehabisan nyawa karena terlalu banyak salah!";
        win = true;
    }

    if (win) {
        document.getElementById('main-body').classList.add('show-win');
    }
}

// 7. Reset Game (Main Lagi)
function mainLagi() {
    posisiTali = 0;
    p1HP = 5; 
    p2HP = 5;
    document.getElementById('tali').style.transform = `translateX(0px)`;
    document.getElementById('main-body').classList.remove('show-win');
    
    // Acak ulang bank soal untuk kedua tim
    p1Bank = [...masterBank].sort(() => Math.random() - 0.5);
    p2Bank = [...masterBank].sort(() => Math.random() - 0.5);
    
    updateHP();
    renderSoal('p1');
    renderSoal('p2');
}

// 8. Kembali ke Welcome Screen
function keluarKeBeranda() {
    document.getElementById('main-body').classList.remove('show-win');
    document.getElementById('welcome-screen').style.transform = 'translateY(0)';
    
    setTimeout(() => {
        document.getElementById('game-container').style.display = 'none';
        posisiTali = 0;
        p1HP = 5; 
        p2HP = 5;
    }, 600);
}