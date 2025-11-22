const places = [
    {
        id: 1,
        name: "Aone Trawas",
        category: "cafe", 
        district: "Trawas",
        desc: "Tempat ngopi nyaman dengan view pegunungan.",
        img: "img/img1.jpg"
    },
    {
        id: 2,
        name: "Antasena Cafe",
        category: "cafe",
        district: "Trawas",
        desc: "Area Caffe luas, cocok untuk nongkrong.",
        img: "img/img2.jpg"
    },
    {
        id: 4,
        name: "Batas Desa",
        category: "warkop & warung",
        district: "Pacet",
        desc: "Tempat nongkrong santai, cocok banget buat nyore sambil kumpul bareng teman.",
        img: "img/img4.jpg"
    },
    {
        id: 5,
        name: "Panorama Cafe",
        category: "cafe",
        district: "Trawas",
        desc: "Cafe Panorama menghadirkan suasana hangat di tengah hawa dingin, dengan pemandangan indah yang cocok untuk bersantai dan menikmati momen tenang.",
        img: "img/img5.jpg"
    },
    {
        id: 6,
        name: "Cafe Full Barokah",
        category: "cafe",
        district: "Trawas",
        desc: "Cafe sederhana dengan suasana nyaman dan hangat, cocok untuk berkumpul, bersantai, dan menikmati waktu bersama.",
        img: "img/img6.jpg"
    },
    {
        id: 7,
        name: "Black Dew",
        category: "cafe",
        district: "Pacet",
        desc: "Menghadirkan suasana modern dan tenang, cocok untuk santai, ngobrol, dan melepas penat.",
        img: "img/img7.jpg"
    },
    {
        id: 8,
        name: "Warkop Trawas",
        category: "warkop & warung",
        district: "Trawas",
        desc: "Tempat nongkrong santai dengan suasana hangat khas desa. Menyajikan menu sederhana tapi enak, mulai dari kopi susu gula aren, mie goreng pedas, hingga roti bakar favorit yang selalu jadi incaran. Cocok untuk santaii, ngobrol, dan isi energi kapan saja.",
        img: "img/img8.jpg"
    },
    {
        id: 9,
        name: "Haven Ville",
        category: "cafe",
        district: "Trawas",
        desc: "Tempat hangout bernuansa tenang dengan kebun bunga di dalamnya, menghadirkan suasana segar dan estetik yang cocok untuk santai dan foto-foto.",
        img: "img/img9.jpg"
    },
    {
        id: 10,
        name: "Sekar Cafe",
        category: "cafe",
        district: "Trawas",
        desc: "Menghadirkan suasana aesthetic yang hangat dan tenang, cocok untuk santai, ngobrol, dan mengambil foto-foto cantik.",
        img: "img/img10.jpg"
    },
    {
        id: 11,
        name: "Asmaraloka Cafe",
        category: "cafe",
        district: "Trawas",
        desc: "Menawarkan suasana hangat dan romantis dengan sentuhan estetis, cocok untuk quality time, ngobrol santai, dan menikmati momen tenang.",
        img: "img/img11.jpg"
    },
     {
        id: 12,
        name: "Bernah De Valley ",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Tempat wisata dengan kolam renang jernih yang dikelilingi hutan pinus, menghadirkan suasana sejuk alami yang cocok untuk liburan dan melepas penat..",
        img: "img/bernah.jpg"
    },
    {
        id: 13,
        name: "Estusae Cafe",
        category: "cafe",
        district: "Trawas",
        desc: "Hadir dengan suasana modern dan tenang, menawarkan tempat nyaman untuk santai, ngobrol, dan menikmati waktu dengan vibe yang cozy.",
        img: "img/estusae.jpg"
    },
     {
        id: 14,
        name: "Parimas Waterpark",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Tempat rekreasi air yang seru dan menyegarkan, cocok untuk bermain, bersantai, dan menghabiskan waktu bersama keluarga.",
        img: "img/parimas.jpg"
    },
    {
        id: 15,
        name: "Gartenhutte",
        category: "cafe",
        district: "Trawas",
        desc: "Menghadirkan suasana hangat ala cabin modern dengan nuansa alam yang tenang, cocok untuk santai dan menikmati momen rileks",
        img: "img/garten.jpg"
    },
    {
        id: 16,
        name: "Elok Cafe",
        category: "cafe",
        district: "Trawas",
        desc: "Menawarkan suasana tenang dan estetik dengan vibe yang cozy, cocok untuk santai, ngobrol, dan menikmati waktu dengan nyaman.",
        img: "img/elok.jpg"
    },
     {
        id: 17,
        name: "La Verde Cafe",
        category: "cafe",
        district: "Trawas",
        desc: "Pemandangan pegunungan yang menenangkan, dipadukan dengan tempat yang estetik dan menu makanan yang enak—cocok untuk santai dan menikmati suasana.",
        img: "img/laverde.jpg"
    },
    {
        id: 18,
        name: "Klurak Eco Park",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Ruang wisata alami yang dipenuhi hutan pinus, menghadirkan suasana sejuk dan tenang yang cocok untuk jalan-jalan, bersantai, dan menikmati alam.",
        img: "img/klurkeco.jpg"
    },
    {
        id: 19,
        name: "Petik Strawberry",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Menawarkan pengalaman seru memetik buah langsung dari kebunnya, dengan suasana sejuk dan pemandangan hijau yang menyegarkan—cocok untuk keluarga maupun liburan santai.",
        img: "img/Petik.jpg"
    },
    {
        id: 20,
        name: "Pacet Mini Park",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Tempat rekreasi keluarga dengan suasana sejuk dan area bermain yang seru, cocok untuk liburan ringan dan bersantai di alam terbuka.",
        img: "img/pacetmini.jpg"
    },
    {
        id: 21,
        name: "Air Panas Padusan",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Wisata pemandian air panas alami dengan suasana pegunungan yang sejuk, cocok untuk relaksasi dan melepas lelah.",
        img: "img/padusan.jpg"
    },
    {
        id: 22,
        name: "Taman Kelinci KSP",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Tempat wisata ramah keluarga dengan area bermain dan spot lucu penuh kelinci, cocok untuk berfoto, bermain, dan mengenalkan anak pada hewan-hewan menggemaskan.",
        img: "img/tamankelinci.jpg"
    },
    {
        id: 23,
        name: "Panorama Patung Sewu Pacet",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Menawarkan pemandangan alam luas dari ketinggian dengan suasana sejuk dan spot foto estetik, cocok untuk bersantai dan menikmati panorama pegunungan.",
        img: "img/panorama.jpg"
    },
    {
        id: 24,
        name: "Putuk Truno Pacet",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Air terjun indah dengan aliran jernih dan suasana sejuk pegunungan, cocok untuk refreshing dan menikmati ketenangan alam.",
        img: "img/putuktrunopacet.jpg"
    },
    {
        id: 25,
        name: "Bobacabin Pacet",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Penginapan modern bernuansa alam dengan konsep cabin yang hangat dan estetik, cocok untuk staycation tenang di udara sejuk pegunungan.",
        img: "img/bobacabin.jpg"
    },
    {
        id: 26,
        name: "Bima Sakti Farm Pacet",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Wisata keluarga bernuansa alam dengan suasana sejuk dan area rekreasi luas, cocok untuk liburan santai dan bermain bersama orang terdekat.",
        img: "img/bimasaktipacet.jpg"
    },
    {
        id: 27,
        name: "Air Terjun Coban Pacet",
        category: "tempat wisata",
        district: "Pacet",
        desc: "Menawarkan pemandangan air terjun yang jernih dan megah, dikelilingi alam hijau dan suasana sejuk khas pegunungancocok untuk refreshing dan menikmati ketenangan alam.",
        img: "img/airterjuncoban.jpg"
    },
    {
        id: 28,
        name: "Nabs Cafe",
        category: "cafe",
        district: "Pacet",
        desc: "menghadirkan suasana cozy dengan desain simple dan nyaman, cocok untuk santai, ngobrol, dan menikmati waktu bersama teman.",
        img: "img/nabscafe.jpg"
    },
    {
        id: 29,
        name: "Kali Kopi",
        category: "cafe",
        district: "Pacet",
        desc: "Cafe bernuansa alam di dekat aliran sungai, menghadirkan suasana sejuk dan tenang yang cocok untuk santai dan quality time.",
        img: "img/kalikopi.jpg"
    },
    {
        id: 30,
        name: "Pacetoz",
        category: "cafe",
        district: "Pacet",
        desc: "Menawarkan suasana cozy dan modern dengan tempat nyaman untuk nongkrong, ngobrol, dan bersantai di udara sejuk.",
        img: "img/pacetoz.jpg"
    },
    {
        id: 31,
        name: "Landscape Cafe",
        category: "cafe",
        district: "Pacet",
        desc: "Menghadirkan suasana estetik dengan pemandangan alam terbuka, cocok untuk santai, foto-foto, dan menikmati waktu di udara sejuk.",
        img: "img/landscape.jpg"
    },
    {
        id: 32,
        name: "Alas Pacet",
        category: "cafe",
        district: "Pacet",
        desc: "Kawasan wisata alami yang dikelilingi pepohonan rindang dan suasana sejuk, cocok untuk jalan-jalan, bersantai, dan menikmati ketenangan alam.",
        img: "img/alaspacet.jpg"
    },
    {
        id: 33,
        name: "Nawasena Pacet",
        category: "cafe",
        district: "Pacet",
        desc: "Menawarkan suasana modern dan tenang dengan desain estetik, cocok untuk santai, ngobrol, dan menikmati waktu di tempat yang cozy.",
        img: "img/nawasena.jpg"
    },
    {
        id: 34,
        name: "Zaqiku",
        category: "cafe",
        district: "Pacet",
        desc: "Menghadirkan suasana cozy dengan desain unik dan estetik, cocok untuk santai, ngobrol, dan menikmati waktu dengan nyaman.",
        img: "img/zaqiku.jpg"
    },
    {
        id: 35,
        name: "Titik Kumpul Pacet",
        category: "cafe",
        district: "Pacet",
        desc: "Menawarkan suasana hangat dan nyaman di udara sejuk pegunungan, cocok untuk santai, ngobrol, dan jadi tempat ngumpul favorit bareng teman.",
        img: "img/titik.jpg"
    },
    {
        id: 36,
        name: "Kedai Watu Jaran",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "Menawarkan suasana alami yang sejuk dan tenang, cocok untuk singgah dan bersantai sejenak.",
        img: "img/watujaran.jpg"
    },
    {
        id: 37,
        name: "Warung Pak Katur",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "menyajikan suasana desa yang dingin dan tenang, pas untuk singgah sebentar.",
        img: "img/pakatur.jpg"
    },
    {
        id: 38,
        name: "Warung Adem Ayem",
        category: "warkop & warung", 
        district: "Pacet",
        desc: " berada di dalam desa dengan hawa dingin yang menenangkan, jadi tempat pas untuk singgah dan menikmati suasana hangat khas pedesaan.",
        img: "img/ademayem.jpg"
    },
    {
        id: 39,
        name: "Warung Tegal Watu",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "berada di pinggir sungai dengan hawa dingin yang menyegarkan, cocok untuk singgah dan menikmati suasana alami.",
        img: "img/tegalwatu.jpg"
    },
    {
        id: 40,
        name: "Kedai Susu Pak NO",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "dikenal dengan susu sapi murninya yang segar, pas untuk singgah dan menghangatkan diri.",
        img: "img/pakno.jpg"
    },
    {
        id: 41,
        name: "Warung PKK desa Cembor",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "berada di pinggir alas dengan hawa dingin yang menenangkan, cocok untuk singgah dan menikmati suasana alami.",
        img: "img/pkk.jpg"
    },
    {
        id: 42,
        name: "Kedai Kopi Janji Joni",
        category: "warkop & warung",
        desc: "berada di pinggir sawah dengan hawa dingin yang adem, jadi tempat pas untuk mampir dan menikmati suasana tenang.",
        img: "img/janjijoni.jpg"
    },
    {
        id: 43,
        name: "Warung Kopi Desa",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "Warung kopi desa di dalam desa ini punya hawa dingin yang adem dan suasana tenang, pas untuk singgah dan ngopi santai.",
        img: "img/kopidesa.jpg"
    },
    {
        id: 44,
        name: "Warkop Arthala",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "tempat aesthetic dengan hawa dingin yang sejuk, cocok untuk santai dan menikmati suasana nyaman.",
        img: "img/arthala.jpg"
    },
    {
        id: 45,
        name: "Warung Sawah Mbak Kiki",
        category: "warkop & warung", 
        district: "Pacet",
        desc: "berada di hawa dingin yang adem, pas untuk mampir dan menikmati suasana santai di daerah pegunungan.",
        img: "img/sawahmbakkiki.jpg"
    },
    {
        id: 46,
        name: "Kedai Mbahkung",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "Warung Mbahkung berada di tengah sawah dengan hawa dingin dan view Gunung Penanggungan, menyajikan makanan enak dengan harga terjangkau pas untuk singgah dan menikmati suasana.",
        img: "img/mbahkung.jpg"
    },
    {
        id: 47,
        name: "Pawon Sego Lego",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "menawarkan makanan prasmanan yang enak dengan harga terjangkau cocok untuk singgah dan menikmati hidangan rumahan.",
        img: "img/segolego.jpg"
    },
     {
        id: 48,
        name: "Warung Gubug Weringin",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "menyajikan makanan enak dengan harga terjangkau pas untuk bersantai dan menikmati suasana alam..",
        img: "img/gubugweringin.jpg"
    },
     {
        id: 49,
        name: "Waroeng Desa",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "Tempat ngopi nyaman dengan view pegunungan.",
        img: "img/waroengdesa.jpg"
    },
     {
        id: 50,
        name: "Warung Bu Dian Trawas",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "Warung Bu Dian berada di hawa dingin dengan view hutan pinus yang menenangkan, cocok untuk singgah dan menikmati suasana alam yang adem.",
        img: "img/budian.jpg"
    },
     {
        id: 51,
        name: "Pawon Simbok Trawas",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "Warung Si Mbok Trawas menyajikan makanan enak yang pas untuk dinikmati sambil bersantai.",
        img: "img/simbok.jpg"
    },
     {
        id: 51,
        name: "Lesehan Makmur",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "Tempat ngopi nyaman dengan view pegunungan.",
        img: "img/lesehanmakmur.jpg"
    },
     {
        id: 52,
        name: "Gen Ngopi Trawas",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "Pemandangan hutan pinus yang sejuk, pas untuk singgah dan menikmati suasana tenang.",
        img: "img/genngopi.jpg"
    },
     {
        id: 53,
        name: "Warung Kadutan",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "“Warung Kadutan berada di hawa dingin dengan view hutan pinus yang menyejukkan, menyajikan makanan menarik yang cocok dinikmati sambil bersantai.”",
        img: "img/kadutan.jpg"
    },
     {
        id: 54,
        name: "Warkop Bu Jun",
        category: "warkop & warung", 
        district: "Trawas",
        desc: ".",
        img: "img/bujun.jpg"
    },
     {
        id: 55,
        name: "Kedai Josami",
        category: "warkop & warung", 
        district: "Trawas",
        desc: "Kedai Josami berada di hawa dingin dengan view hutan pinus, menyajikan makanan enak yang pas dinikmati sambil bersantai di suasana sejuk.",
        img: "img/Josami.jpg"
    },
     {
        id: 56,
        name: "Warung Mas Doyok",
        category: "warkop & warung", 
        district: "Trawas",
        desc: " Warung Mas Doyok Trawas berada di hawa dingin dengan view sungai berair bening, pas untuk singgah dan menikmati suasana alam yang adem dan tenang",
        img: "img/masdoyok.jpg"
    },
     {
        id: 57,
        name: "Duyung Trawas Hill",
        category: "tempat wisata",
        district: "Trawas",
        desc: "Duyung Trawas Hill adalah wisata dengan kolam renang, spot foto yang menarik, dan view alam yang bagus, cocok untuk liburan santai dan menikmati suasana sejuk pegunungan.",
        img: "img/duyung.jpg"
    },
    {
        id: 58,
        name: "Air Terjun Dlundung",
        category: "tempat wisata",
        district: "Trawas",
        desc: "“Air Terjun Dlundung menawarkan aliran air terjun yang jernih dengan suasana dingin dan alami, cocok untuk refreshing dan menikmati ketenangan alam.",
        img: "img/Petik.jpg"
    },
    {
        id: 59,
        name: "Wisata Sawah Sumber Gempong",
        category: "tempat wisata",
        district: "Trawas",
        desc: "Tempat rekreasi keluarga dengan suasana sejuk dan area bermain yang seru, cocok untuk liburan ringan dan bersantai di alam terbuka.",
        img: "img/sumbergempong.jpg"
    },
    {
        id: 60,
        name: "Rainbow Garden Poetoek Soeko",
        category: "tempat wisata",
        district: "Trawas",
        desc: "Putuk Soko merupakan wisata dengan taman bunga yang indah dan berwarna-warni, menghadirkan suasana sejuk dan spot foto cantik di alam terbuka.",
        img: "img/poetoeksoeko.jpg"
    },
    {
        id: 61,
        name: "Petirtaan Jolotundo",
        category: "tempat wisata",
        district: "Trawas",
        desc: "“Petirtaan Jolotundo adalah situs bersejarah dengan air kesucian yang jernih dan sejuk, menghadirkan suasana tenang untuk berkunjung dan merasakan nuansa spiritual alam.",
        img: "img/jolotundo.jpg"
    },
    {
        id: 62,
        name: "Taman Ghanjaran",
        category: "tempat wisata",
        district: "Trawas",
        desc: "wisata keluarga dengan banyak spot permainan seru, suasana sejuk, dan area luas yang cocok untuk hiburan dan foto-foto.",
        img: "img/ghanjaran.jpg"
    },
    {
        id: 63,
        name: "Tanaria",
        category: "tempat wisata",
        district: "Trawas",
        desc: "wisata bernuansa alam di hawa dingin yang sejuk, cocok untuk bersantai dan menikmati suasana tenang pegunungan.",
        img: "img/tanaria.jpg"
    },
    {
        id: 64,
        name: "Petung Park",
        category: "tempat wisata",
        district: "Trawas",
        desc: "Petung Park adalah wisata bernuansa alam dengan aliran sungai yang jernih serta pilihan makanan enak, cocok untuk santai dan menikmati suasana sejuk.",
        img: "img/petung.jpg"
    },
    {
        id: 65,
        name: "Sumber Kecubung",
        category: "tempat wisata",
        district: "Trawas",
        desc: "Sumber Kecubung menawarkan suasana sejuk dengan view gunung yang indah, dilengkapi sajian makanan enak yang membuatnya pas untuk bersantai dan menikmati alam.",
        img: "img/sumberkecubung.jpg"
    },
    {
        id: 66,
        name: "Kids Bubble Pool, Cafe Jungle",
        category: "tempat wisata",
        district: "Trawas",
        desc: "Kolam renang dengan view gunung ini menawarkan suasana sejuk dan pemandangan indah, cocok untuk berenang sambil menikmati panorama alam.",
        img: "img/kidsbubblepool.jpg"
    },
     {
        id: 67,
        name: "Kolam Renang Puncak Trawas",
        category: "tempat wisata",
        district: "Trawas",
        desc: "Kolam renang luas dengan view gunung yang indah, cocok untuk keluarga yang ingin bersantai dan menikmati suasana sejuk bersama.",
        img: "img/kolamrenangtrawas.jpg"
    },
    
];


// =============================
// ELEMENT
// =============================

// === INIT DOM ELEMENTS (INDEX PAGE) ===
console.log("[LocalVibe] script.js loaded");

const grid = document.getElementById("placeGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const areaFilter = document.getElementById("areaFilter");

// Deteksi apakah ini halaman index (semua elemen wajib ada)
const isIndexPage =
  grid instanceof HTMLElement &&
  searchInput instanceof HTMLElement &&
  categoryFilter instanceof HTMLElement &&
  areaFilter instanceof HTMLElement;

if (!isIndexPage) {
  console.log("[LocalVibe] Bukan halaman index, lewati inisialisasi list & filter.");
} else {
  console.log("[LocalVibe] Halaman index terdeteksi. Inisialisasi list & filter.");
}

// Navigasi ke halaman detail dengan debug lengkap
function goDetail(id) {
  console.log("[LocalVibe] goDetail dipanggil dengan id =", id);

  if (id === undefined || id === null || isNaN(Number(id))) {
    console.error("[LocalVibe] ID tidak valid ketika memanggil goDetail:", id);
    alert("Terjadi kesalahan: ID tempat tidak valid.");
    return;
  }

  const targetUrl = `detail.html?id=${encodeURIComponent(id)}`;
  console.log("[LocalVibe] Redirect ke:", targetUrl);

  try {
    window.location.href = targetUrl;
  } catch (err) {
    console.error("[LocalVibe] Gagal melakukan redirect ke detail:", err);
    alert("Tidak bisa membuka halaman detail. Cek console log untuk detail error.");
  }
}

// Pasang event listener hanya jika ini halaman index
if (isIndexPage) {
  console.log("[LocalVibe] Mendaftarkan event listener filter & search.");
  searchInput.addEventListener("keyup", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  areaFilter.addEventListener("change", applyFilters);

  console.log("[LocalVibe] Render awal daftar places. Jumlah data:", places.length);
  renderPlaces(places);
}


// =============================
// RENDER CARD
// =============================
function renderPlaces(list) {
    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = `<p style="opacity:0.7;text-align:center;width:100%">Tidak ada hasil ditemukan</p>`;
        return;
    }

    list.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("place-card", "fade-in");

        card.innerHTML = `
            <div class="shine"></div>

            <div class="place-media">
                <img src="${place.img}" alt="${place.name}">
            </div>

            <div class="place-body">
                <span class="cat-pill">${place.category}</span>
                <span class="district-pill">${place.district}</span>

                <h3 class="place-title">${place.name}</h3>
                <p class="place-desc">${place.desc}</p>

                <div class="place-actions">
                    <button class="btn btn-primary" onclick="goDetail(${place.id})">
                        Lihat Detail
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function applyFilters() {
    const keyword = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedArea = areaFilter.value;

    const filtered = places.filter(p => {
        const matchKeyword =
            p.name.toLowerCase().includes(keyword) ||
            p.desc.toLowerCase().includes(keyword);

        const matchCategory =
            selectedCategory === "all" ? true : p.category === selectedCategory;

        const matchArea =
            selectedArea === "all" ? true : p.district === selectedArea;

        return matchKeyword && matchCategory && matchArea;
    });

    renderPlaces(filtered);
}



