/**
 * DATABASE SOAL LION TUG
 * Format: { q: "Pertanyaan", options: ["A", "B", "C", "D"], a: "Jawaban Benar" }
 */

const daftarKategori = {
  "Antonim (Lawan Kata)": [
    {q: "Antonim dari Besar", options: ["Kecil", "Tinggi", "Lebar", "Luas"], a: "Kecil"},
    {q: "Antonim dari Panjang", options: ["Lebar", "Pendek", "Singkat", "Rendah"], a: "Pendek"},
    {q: "Antonim dari Jauh", options: ["Dekat", "Samping", "Luar", "Dalam"], a: "Dekat"},
    {q: "Antonim dari Tinggi", options: ["Pendek", "Bawah", "Rendah", "Kecil"], a: "Rendah"},
    {q: "Antonim dari Panas", options: ["Sejuk", "Dingin", "Hangat", "Basah"], a: "Dingin"},
    {q: "Antonim dari Cepat", options: ["Pelan", "Lari", "Gesit", "Lambat"], a: "Lambat"},
    {q: "Antonim dari Gelap", options: ["Lampu", "Terang", "Putih", "Siang"], a: "Terang"},
    {q: "Antonim dari Bersih", options: ["Bau", "Kumal", "Kotor", "Corok"], a: "Kotor"},
    {q: "Antonim dari Gemuk", options: ["Kurus", "Kecil", "Tipis", "Ramping"], a: "Kurus"},
    {q: "Antonim dari Murah", options: ["Mewah", "Mahal", "Bagus", "Berharga"], a: "Mahal"}
  ],
  
  "IPAS Kelas 5": [
    {q: "Sifat cahaya pada cermin datar adalah...", options: ["Merambat lurus", "Menembus benda", "Dapat dipantulkan", "Dapat dibiaskan"], a: "Dapat dipantulkan"},
    {q: "Bagian mata yang mengatur cahaya masuk...", options: ["Retina", "Lensa mata", "Pupil", "Sklera"], a: "Pupil"},
    {q: "Bunyi tidak dapat merambat di ruang...", options: ["Udara", "Hampa", "Air", "Padat"], a: "Hampa"},
    {q: "Simbiosis yang saling menguntungkan...", options: ["Parasitisme", "Komensalisme", "Mutualisme", "Amensalisme"], a: "Mutualisme"},
    {q: "Ular di sawah berkedudukan sebagai...", options: ["Produsen", "Konsumen 1", "Konsumen 2", "Pengurai"], a: "Konsumen 2"}
  ],

  "Matematika Kelas 3": [
    {q: "1 meter sama dengan ... cm", options: ["10", "100", "1.000", "50"], a: "100"},
    {q: "2 kilometer sama dengan ... meter", options: ["200", "2.000", "20.000", "20"], a: "2.000"},
    {q: "1 kilogram sama dengan ... gram", options: ["100", "500", "1.000", "10"], a: "1.000"},
    {q: "1 jam sama dengan ... menit", options: ["30", "60", "100", "12"], a: "60"},
    {q: "Setengah jam sama dengan ... menit", options: ["15", "30", "45", "60"], a: "30"}
  ],

  "Bahasa Indonesia Kls 5": [
    {q: "Singkatan dari Surat Elektronik adalah...", options: ["Surel", "Sosmed", "Paket", "Memo"], a: "Surel"},
    {q: "Majas yang membandingkan benda mati seperti manusia...", options: ["Hiperbola", "Personifikasi", "Metafora", "Litotes"], a: "Personifikasi"},
    {q: "Lawan kata (antonim) dari kata 'Fakta' adalah...", options: ["Nyata", "Opini", "Kejadian", "Berita"], a: "Opini"},
    {q: "Tokoh utama yang memiliki sifat baik disebut...", options: ["Antagonis", "Protagonis", "Tritagonis", "Figuran"], a: "Protagonis"},
    {q: "Ringkasan singkat dari sebuah buku disebut...", options: ["Sinopsis", "Biografi", "Dongeng", "Skripsi"], a: "Sinopsis"}
  ],

  "Pendidikan Pancasila": [
    {q: "Semboyan bangsa Indonesia adalah...", options: ["Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Bersatu Kita Teguh", "Merdeka atau Mati"], a: "Bhinneka Tunggal Ika"},
    {q: "Rumah adat asal Sumatera Barat disebut...", options: ["Joglo", "Gadang", "Honai", "Tongkonan"], a: "Gadang"},
    {q: "NKRI adalah singkatan dari...", options: ["Negara Kesatuan Republik Indonesia", "Negara Keadilan Rakyat Indonesia", "Negara Kebangsaan Republik Indonesia", "Negara Kesatuan Rakyat Indonesia"], a: "Negara Kesatuan Republik Indonesia"},
    {q: "Dasar negara Indonesia adalah...", options: ["UUD 1945", "Pancasila", "Burung Garuda", "Bhinneka Tunggal Ika"], a: "Pancasila"},
    {q: "Lambang sila ke-3 Pancasila adalah...", options: ["Bintang", "Rantai", "Pohon Beringin", "Kepala Banteng"], a: "Pohon Beringin"}
  ],

  "English Future Tense": [
    {q: "I ... visit my grandmother tomorrow.", options: ["will", "am", "was", "did"], a: "will"},
    {q: "They ... going to watch a movie tonight.", options: ["is", "am", "are", "will"], a: "are"},
    {q: "It ... rain soon. Look at the clouds!", options: ["is going to", "will be", "was", "does"], a: "is going to"},
    {q: "I think Indonesia ... win the match.", options: ["going to", "will", "is", "are"], a: "will"},
    {q: "What ... you do this weekend?", options: ["will", "is", "does", "was"], a: "will"}
  ]
};