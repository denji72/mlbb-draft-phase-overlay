const heroes = [
    { name: 'Aamon', img: 'Assets/HeroPick/aamon.png', roles: ['Assassin'] },
    { name: 'Akai', img: 'Assets/HeroPick/akai.png', roles: ['Tank'] },
    { name: 'Aldous', img: 'Assets/HeroPick/aldous.png', roles: ['Fighter'] },
    { name: 'Alice', img: 'Assets/HeroPick/alice.png', roles: ['Mage'] },
    { name: 'Alpha', img: 'Assets/HeroPick/alpha.png', roles: ['Fighter'] },
    { name: 'Alucard', img: 'Assets/HeroPick/alucard.png', roles: ['Assassin'] },
    { name: 'Angela', img: 'Assets/HeroPick/angela.png', roles: ['Support'] },
    { name: 'Argus', img: 'Assets/HeroPick/argus.png', roles: ['Fighter'] },
    { name: 'Arlott', img: 'Assets/HeroPick/arlot.png', roles: ['Assassin', 'Fighter'] },
    { name: 'Atlas', img: 'Assets/HeroPick/atlas.png', roles: ['Tank'] },
    { name: 'Aulus', img: 'Assets/HeroPick/aulus.png', roles: ['Fighter'] },
    { name: 'Aurora', img: 'Assets/HeroPick/aurora.png', roles: ['Mage'] },
    { name: 'Badang', img: 'Assets/HeroPick/badang.png', roles: ['Fighter'] },
    { name: 'Balmond', img: 'Assets/HeroPick/balmond.png', roles: ['Fighter'] },
    { name: 'Bane', img: 'Assets/HeroPick/bane.png', roles: ['Fighter', 'Mage'] },
    { name: 'Barats', img: 'Assets/HeroPick/barats.png', roles: ['Fighter'] },
    { name: 'Baxia', img: 'Assets/HeroPick/baxia.png', roles: ['Tank'] },
    { name: 'Beatrix', img: 'Assets/HeroPick/beatrix.png', roles: ['Marksman'] },
    { name: 'Belerick', img: 'Assets/HeroPick/belerick.png', roles: ['Tank'] },
    { name: 'Benedetta', img: 'Assets/HeroPick/benedetta.png', roles: ['Assassin'] },
    { name: 'Brody', img: 'Assets/HeroPick/brody.png', roles: ['Marksman'] },
    { name: 'Bruno', img: 'Assets/HeroPick/bruno.png', roles: ['Marksman'] },
    { name: 'Carmilla', img: 'Assets/HeroPick/carmila.png', roles: ['Support'] },
    { name: 'Cecilion', img: 'Assets/HeroPick/cecilion.png', roles: ['Mage'] },
    { name: "Chang'e", img: 'Assets/HeroPick/chang_e.png', roles: ['Mage'] },
    { name: 'Chip', img: 'Assets/HeroPick/chip.png', roles: ['Support'] },
    { name: 'Chou', img: 'Assets/HeroPick/chou.png', roles: ['Fighter'] },
    { name: 'Cici', img: 'Assets/HeroPick/cici.png', roles: ['Fighter'] },
    { name: 'Claude', img: 'Assets/HeroPick/claude.png', roles: ['Marksman'] },
    { name: 'Clint', img: 'Assets/HeroPick/clint.png', roles: ['Marksman'] },
    { name: 'Cyclops', img: 'Assets/HeroPick/cyclops.png', roles: ['Mage'] },
    { name: 'Diggie', img: 'Assets/HeroPick/diggie.png', roles: ['Support'] },
    { name: 'Dyrroth', img: 'Assets/HeroPick/dyroth.png', roles: ['Fighter'] },
    { name: 'Edith', img: 'Assets/HeroPick/edith.png', roles: ['Tank'] },
    { name: 'Esmeralda', img: 'Assets/HeroPick/esmeralda.png', roles: ['Mage', 'Support'] },
    { name: 'Estes', img: 'Assets/HeroPick/estes.png', roles: ['Support'] },
    { name: 'Eudora', img: 'Assets/HeroPick/eudora.png', roles: ['Mage'] },
    { name: 'Fanny', img: 'Assets/HeroPick/fanny.png', roles: ['Assassin'] },
    { name: 'Faramis', img: 'Assets/HeroPick/faramis.png', roles: ['Mage', 'Support'] },
    { name: 'Floryn', img: 'Assets/HeroPick/floryn.png', roles: ['Support'] },
    { name: 'Franco', img: 'Assets/HeroPick/franco.png', roles: ['Tank'] },
    { name: 'Fredrinn', img: 'Assets/HeroPick/fredrin.png', roles: ['Fighter'] },
    { name: 'Freya', img: 'Assets/HeroPick/freya.png', roles: ['Fighter'] },
    { name: 'Gatotkaca', img: 'Assets/HeroPick/gatotkaca.png', roles: ['Tank'] },
    { name: 'Gloo', img: 'Assets/HeroPick/gloo.png', roles: ['Tank'] },
    { name: 'Gord', img: 'Assets/HeroPick/gord.png', roles: ['Mage'] },
    { name: 'Granger', img: 'Assets/HeroPick/granger.png', roles: ['Marksman'] },
    { name: 'Grock', img: 'Assets/HeroPick/grock.png', roles: ['Tank'] },
    { name: 'Guinevere', img: 'Assets/HeroPick/guinevere.png', roles: ['Fighter'] },
    { name: 'Gusion', img: 'Assets/HeroPick/gusion.png', roles: ['Assassin'] },
    { name: 'Hanabi', img: 'Assets/HeroPick/hanabi.png', roles: ['Marksman'] },
    { name: 'Hanzo', img: 'Assets/HeroPick/hanzo.png', roles: ['Assassin'] },
    { name: 'Harith', img: 'Assets/HeroPick/harith.png', roles: ['Mage'] },
    { name: 'Harley', img: 'Assets/HeroPick/harley.png', roles: ['Assassin', 'Mage'] },
    { name: 'Hayabusa', img: 'Assets/HeroPick/hayabusa.png', roles: ['Assassin'] },
    { name: 'Helcurt', img: 'Assets/HeroPick/helcurt.png', roles: ['Assassin'] },
    { name: 'Hilda', img: 'Assets/HeroPick/hilda.png', roles: ['Fighter'] },
    { name: 'Hirara', img: 'Assets/HeroPick/hirara.png', roles: ['Assassin'] },
    { name: 'Hylos', img: 'Assets/HeroPick/hylos.png', roles: ['Tank'] },
    { name: 'Irithel', img: 'Assets/HeroPick/irithel.png', roles: ['Marksman'] },
    { name: 'Ixia', img: 'Assets/HeroPick/ixia.png', roles: ['Marksman'] },
    { name: 'Jawhead', img: 'Assets/HeroPick/jawhead.png', roles: ['Fighter'] },
    { name: 'Johnson', img: 'Assets/HeroPick/johnson.png', roles: ['Tank'] },
    { name: 'Joy', img: 'Assets/HeroPick/joy.png', roles: ['Assassin'] },
    { name: 'Julian', img: 'Assets/HeroPick/julian.png', roles: ['Assassin', 'Fighter'] },
    { name: 'Kadita', img: 'Assets/HeroPick/kadita.png', roles: ['Assassin', 'Mage'] },
    { name: 'Kagura', img: 'Assets/HeroPick/kagura.png', roles: ['Mage'] },
    { name: 'Kaja', img: 'Assets/HeroPick/kaja.png', roles: ['Support'] },
    { name: 'Kalea', img: 'Assets/HeroPick/kalea.png', roles: ['Support'] },
    { name: 'Karina', img: 'Assets/HeroPick/karina.png', roles: ['Assassin'] },
    { name: 'Karrie', img: 'Assets/HeroPick/karrie.png', roles: ['Marksman'] },
    { name: 'Khaleed', img: 'Assets/HeroPick/khaleed.png', roles: ['Fighter'] },
    { name: 'Khufra', img: 'Assets/HeroPick/khufra.png', roles: ['Tank'] },
    { name: 'Kimmy', img: 'Assets/HeroPick/kimmy.png', roles: ['Mage', 'Marksman'] },
    { name: 'Lancelot', img: 'Assets/HeroPick/lancelot.png', roles: ['Assassin'] },
    { name: 'Lapu-Lapu', img: 'Assets/HeroPick/lapulapu.png', roles: ['Fighter'] },
    { name: 'Layla', img: 'Assets/HeroPick/layla.png', roles: ['Marksman'] },
    { name: 'Leomord', img: 'Assets/HeroPick/leomord.png', roles: ['Fighter'] },
    { name: 'Lesley', img: 'Assets/HeroPick/lesley.png', roles: ['Marksman'] },
    { name: 'Ling', img: 'Assets/HeroPick/ling.png', roles: ['Assassin'] },
    { name: 'Lolita', img: 'Assets/HeroPick/lolita.png', roles: ['Tank'] },
    { name: 'Lukas', img: 'Assets/HeroPick/lukas.png', roles: ['Fighter'] },
    { name: 'Lunox', img: 'Assets/HeroPick/lunox.png', roles: ['Mage'] },
    { name: 'Luo Yi', img: 'Assets/HeroPick/luoyi.png', roles: ['Mage'] },
    { name: 'Lylia', img: 'Assets/HeroPick/lylia.png', roles: ['Mage'] },
    { name: 'Martis', img: 'Assets/HeroPick/martis.png', roles: ['Fighter'] },
    { name: 'Masha', img: 'Assets/HeroPick/masha.png', roles: ['Fighter'] },
    { name: 'Mathilda', img: 'Assets/HeroPick/mathilda.png', roles: ['Support'] },
    { name: 'Melissa', img: 'Assets/HeroPick/melissa.png', roles: ['Marksman'] },
    { name: 'Minotaur', img: 'Assets/HeroPick/minotaur.png', roles: ['Tank'] },
    { name: 'Minsitthar', img: 'Assets/HeroPick/minsitthar.png', roles: ['Fighter'] },
    { name: 'Miya', img: 'Assets/HeroPick/miya.png', roles: ['Marksman'] },
    { name: 'Moskov', img: 'Assets/HeroPick/moskov.png', roles: ['Marksman'] },
    { name: 'Nana', img: 'Assets/HeroPick/nana.png', roles: ['Mage'] },
    { name: 'Natalia', img: 'Assets/HeroPick/natalia.png', roles: ['Assassin'] },
    { name: 'Natan', img: 'Assets/HeroPick/nathan.png', roles: ['Marksman'] },
    { name: 'Nolan', img: 'Assets/HeroPick/nolan.png', roles: ['Assassin'] },
    { name: 'Novaria', img: 'Assets/HeroPick/novaria.png', roles: ['Mage'] },
    { name: 'Obsidia', img: 'Assets/HeroPick/obsidia.png', roles: ['Marksman'] },
    { name: 'Odette', img: 'Assets/HeroPick/odette.png', roles: ['Mage'] },
    { name: 'Paquito', img: 'Assets/HeroPick/paquito.png', roles: ['Assassin', 'Fighter'] },
    { name: 'Pharsa', img: 'Assets/HeroPick/pharsa.png', roles: ['Mage'] },
    { name: 'Phoveus', img: 'Assets/HeroPick/phoveus.png', roles: ['Fighter'] },
    { name: 'Popol and Kupa', img: 'Assets/HeroPick/popolandkupa.png', roles: ['Marksman'] },
    { name: 'Rafaela', img: 'Assets/HeroPick/rafaela.png', roles: ['Support'] },
    { name: 'Roger', img: 'Assets/HeroPick/roger.png', roles: ['Fighter'] },
    { name: 'Ruby', img: 'Assets/HeroPick/ruby.png', roles: ['Fighter'] },
    { name: 'Saber', img: 'Assets/HeroPick/saber.png', roles: ['Assassin'] },
    { name: 'Selena', img: 'Assets/HeroPick/selena.png', roles: ['Assassin', 'Support'] },
    { name: 'Silvanna', img: 'Assets/HeroPick/silvanna.png', roles: ['Fighter'] },
    { name: 'Sun', img: 'Assets/HeroPick/sun.png', roles: ['Fighter'] },
    { name: 'Suyou', img: 'Assets/HeroPick/suyou.png', roles: ['Assassin'] },
    { name: 'Terizla', img: 'Assets/HeroPick/terizla.png', roles: ['Fighter'] },
    { name: 'Thamuz', img: 'Assets/HeroPick/thamuz.png', roles: ['Fighter'] },
    { name: 'Tigreal', img: 'Assets/HeroPick/tigreal.png', roles: ['Tank'] },
    { name: 'Uranus', img: 'Assets/HeroPick/uranus.png', roles: ['Tank'] },
    { name: 'Vale', img: 'Assets/HeroPick/vale.png', roles: ['Mage'] },
    { name: 'Valentina', img: 'Assets/HeroPick/valentina.png', roles: ['Mage'] },
    { name: 'Valir', img: 'Assets/HeroPick/valir.png', roles: ['Mage'] },
    { name: 'Vexana', img: 'Assets/HeroPick/vexana.png', roles: ['Mage'] },
    { name: 'Wanwan', img: 'Assets/HeroPick/wanwan.png', roles: ['Marksman'] },
    { name: 'X.Borg', img: 'Assets/HeroPick/xborg.png', roles: ['Fighter'] },
    { name: 'Xavier', img: 'Assets/HeroPick/xavier.png', roles: ['Mage'] },
    { name: 'Yi Sun-shin', img: 'Assets/HeroPick/yisunshin.png', roles: ['Assassin'] },
    { name: 'Yin', img: 'Assets/HeroPick/yin.png', roles: ['Assassin', 'Fighter'] },
    { name: 'Yu Zhong', img: 'Assets/HeroPick/yuzhong.png', roles: ['Fighter'] },
    { name: 'Yve', img: 'Assets/HeroPick/yve.png', roles: ['Mage'] },
    { name: 'Zetian', img: 'Assets/HeroPick/zetian.png', roles: ['Mage'] },
    { name: 'Zhask', img: 'Assets/HeroPick/zhask.png', roles: ['Mage', 'Support'] },
    { name: 'Zhuxin', img: 'Assets/HeroPick/zhuxin.png', roles: ['Mage'] },
    { name: 'Zilong', img: 'Assets/HeroPick/zilong.png', roles: ['Assassin', 'Fighter'] },
];



// ===== Slot buttons + shared hero picker =====
let activeSlot = null;
let currentRoleFilter = 'All';

function setActiveSlot(id) {
    activeSlot = id;

    document.querySelectorAll('.slot-btn').forEach(btn => btn.classList.remove('active-slot'));
    const slotBtn = document.getElementById(`search-${id}`);
    slotBtn.classList.add('active-slot');

    document.getElementById('active-slot-label').textContent = `— ${slotBtn.dataset.label}`;
}

function setRoleFilter(role) {
    currentRoleFilter = role;
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.toggle('active-role', btn.dataset.role === role);
    });
    renderHeroPicker();
}

function renderHeroPicker() {
    const pickerContainer = document.getElementById('hero-picker');
    pickerContainer.innerHTML = '';

    heroes
        .filter(hero => currentRoleFilter === 'All' || hero.roles.includes(currentRoleFilter))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.onclick = () => chooseHero(hero);
            item.innerHTML = `<img src="${hero.img}" alt="${hero.name}"><span>${hero.name}</span>`;
            pickerContainer.appendChild(item);
        });
}

function chooseHero(hero) {
    if (activeSlot === null) return;
    selectHero(hero, activeSlot);

    document.getElementById(`search-${activeSlot}`).classList.remove('active-slot');
    document.getElementById('active-slot-label').textContent = '';
    activeSlot = null;
}

// Menampilkan gambar hero yang dipilih dengan animasi saat berubah
function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        // Jika ada gambar yang sudah ada, tambahkan animasi fly-out
        existingImage.classList.add('fly-out');
        // Ganti gambar setelah animasi fly-out selesai (0.5 detik)
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        // Jika belum ada gambar, langsung tampilkan gambar baru
        updateHeroImage(hero, id);
    }
}

// Fungsi untuk memuat foto pemain ke dalam kartu pick (sisi depan, sebelum hero dipilih)
function loadPlayerPhoto(event, playerIndex) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const photoDiv = document.getElementById(`player-photo-${playerIndex}`);
        if (!photoDiv) return;
        photoDiv.style.backgroundImage = `url(${e.target.result})`;
        photoDiv.classList.add('has-photo');
    };
    reader.readAsDataURL(file);
}

// Fungsi untuk mereset semua foto pemain ke kondisi kosong (No Photo)
function resetPlayerPhotos() {
    for (let i = 1; i <= 10; i++) {
        const photoDiv = document.getElementById(`player-photo-${i}`);
        if (photoDiv) {
            photoDiv.style.backgroundImage = '';
            photoDiv.classList.remove('has-photo');
        }
        const fileInput = document.getElementById(`playerPhoto${i}`);
        if (fileInput) fileInput.value = '';
    }
}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const isPick = (id >= 1 && id <= 5) || (id >= 11 && id <= 15);   // skip ban slots (6-10, 16-20)
    const side = id <= 10 ? 'blue' : 'red';

    const nameTag = isPick
        ? `<div class="hero-name-tag hero-name-${side} fly-in">${hero.name}</div>`
        : '';

    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">${nameTag}`;

    const slotBtn = document.getElementById(`search-${id}`);
    if (slotBtn) slotBtn.textContent = `${slotBtn.dataset.label}: ${hero.name}`;
}

// Reset semua dropdown dan input dengan animasi fly-out
function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay.innerHTML) {
            // Tambahkan kelas animasi fly-out
            imageDisplay.querySelector('img').classList.add('fly-out');
        }


        // Hapus nilai input dan dropdown setelah animasi selesai
        setTimeout(() => {
            const slotBtn = document.getElementById(`search-${i}`);
            if (slotBtn) slotBtn.textContent = slotBtn.dataset.label;
            imageDisplay.innerHTML = '';
        }, 500); // Delay sesuai dengan durasi animasi (0.5 detik)
    }
}

 // Fungsi untuk mengupdate output NICKNAME=------------=-=-==-
 function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputText = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${inputText}`;
    }
}

// Fungsi untuk mereset semua input
function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ` `;
    }
}

// Fungsi untuk menukar nilai 1-5 dengan 6-10
function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    // Update output setelah switch
    updateOutput();
}

 // Fungsi untuk menukar gambar dan nama tim
 function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const tempTeamDisplay = teamDisplay1.textContent;
    teamDisplay1.textContent = teamDisplay2.textContent;
    teamDisplay2.textContent = tempTeamDisplay;
}

// Fungsi untuk memuat gambar dari file lokal
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
}

// Fungsi untuk mengupdate nama tim yang ditampilkan
function updateTeamName() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    document.getElementById('teamNameDisplay1').textContent = team1;
    document.getElementById('teamNameDisplay2').textContent = team2;
}

// Fungsi terpisah untuk mengupdate teks pada bar biru/merah (tidak terhubung ke nama tim)
function updateBarLabel() {
    const label1 = document.getElementById('barLabel1').value;
    const label2 = document.getElementById('barLabel2').value;
    document.getElementById('barTeamName1').textContent = label1;
    document.getElementById('barTeamName2').textContent = label2;
}

// Fungsi untuk mereset gambar, nama tim, dan checkbox ke kondisi awal
function resetContent() {
    document.getElementById('team1').value = "Team 1";
    document.getElementById('team2').value = "Team 2";
    updateTeamName();

    document.getElementById('barLabel1').value = "";
    document.getElementById('barLabel2').value = "";
    updateBarLabel();

    resetPlayerPhotos();

    document.getElementById('image1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('image2').src = "https://via.placeholder.com/300x200?text=Image+2";

    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";

    // Reset checkbox dan gambar tambahan
    for (let i = 1; i <= 6; i++) {
    document.getElementById('checkbox' + i).checked = false;
    document.getElementById('extraImage' + i).style.display = "none";
}
}

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + imageId.slice(-1));
    image.style.display = checkbox.checked ? "block" : "none";
}

// Fungsi untuk menukar semua (nama tim, gambar utama, dan status checkbox 1-3 dengan 4-6)
function switchAll() {
    // Tukar nama tim
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const tempName = team1.value;
    team1.value = team2.value;
    team2.value = tempName;
    updateTeamName();

    // Tukar gambar utama
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    // Tukar status checkbox dan visibilitas gambar tambahan
    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));
        const extraImageA = document.getElementById('extraImage' + i);
        const extraImageB = document.getElementById('extraImage' + (i + 3));

        // Tukar status checkbox
        const tempChecked = checkboxA.checked;
        checkboxA.checked = checkboxB.checked;
        checkboxB.checked = tempChecked;

        // Tukar tampilan gambar berdasarkan checkbox
        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }
}

    // Ambil elemen input dan output
    const tournamentnameInput = document.getElementById('tournamentnamemid');
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');

    // Fungsi untuk menampilkan teks yang sama di output saat user mengetik
    tournamentnameInput.addEventListener('input', function() {
      tournamentnameOutput.textContent = tournamentnameInput.value;
    });

//timer

const phases = [
    { type: "Banning", direction: "Assets/Other/Left.gif" },
    { type: "Banning", direction: "Assets/Other/Right.gif" },
    { type: "Banning", direction: "Assets/Other/Left.gif" },
    { type: "Banning", direction: "Assets/Other/Right.gif" },
    { type: "Banning", direction: "Assets/Other/Left.gif" },
    { type: "Banning", direction: "Assets/Other/Right.gif" },
    { type: "Picking", direction: "Assets/Other/Left.gif" },
    { type: "Picking", direction: "Assets/Other/Right.gif" },
    { type: "Picking", direction: "Assets/Other/Left.gif" },
    { type: "Picking", direction: "Assets/Other/Right.gif" },
    { type: "Banning", direction: "Assets/Other/Right.gif" },
    { type: "Banning", direction: "Assets/Other/Left.gif" },
    { type: "Banning", direction: "Assets/Other/Right.gif" },
    { type: "Banning", direction: "Assets/Other/Left.gif" },
    { type: "Picking", direction: "Assets/Other/Right.gif" },
    { type: "Picking", direction: "Assets/Other/Left.gif" },
    { type: "Picking", direction: "Assets/Other/Right.gif" },
];

let currentPhaseIndex = 0; // Track the current phase
let timer = 60; // Timer duration in seconds
let timerInterval; // Store the interval for the timer
let timerRunning = false; // Track if the timer is running

const phaseElement = document.getElementById('phase');
const arrowElement = document.getElementById('arrow');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const nextPhaseButton = document.getElementById('nextPhase');
const resetButton = document.getElementById('reset');

// Update the UI based on the current phase
function updateUI() {
    if (currentPhaseIndex < phases.length) {
        const currentPhase = phases[currentPhaseIndex];
        phaseElement.textContent = `${currentPhase.type}`;
        arrowElement.src = currentPhase.direction; // Update arrow image
        timerElement.textContent = timer;
        nextPhaseButton.disabled = false; // Enable "Next Phase" button
    } else {
        // When all phases are completed
        phaseElement.textContent = "Finalizing";
        arrowElement.src = "/Assets/Other/Adjustment.gif"; // Remove arrow image
        timerElement.textContent = "VS";
        nextPhaseButton.disabled = true; // Disable the button
    }
}

// Start the timer
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                timerElement.textContent = timer;
            } else {
                clearInterval(timerInterval); // Stop timer when it reaches 0
                timerRunning = false; // Timer stops running
                moveToNextPhase(); // Automatically move to the next phase
            }
        }, 1000);
    }
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval); // Stop the timer
    timerRunning = false;
}

// Move to the next phase
function moveToNextPhase() {
    if (currentPhaseIndex < phases.length) {
        currentPhaseIndex++;
        updateUI();
        if (currentPhaseIndex < phases.length) {
            timer = 60; // Reset timer
            startTimer(); // Restart timer
        }
    }
}

// Reset the entire process
function reset() {
    clearInterval(timerInterval); // Stop the timer
    currentPhaseIndex = 0; // Reset phase index
    timer = 60; // Reset timer
    timerRunning = false;
    updateUI(); // Reset UI
}

// Button event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
nextPhaseButton.addEventListener('click', () => {
    stopTimer();
    moveToNextPhase();
});
resetButton.addEventListener('click', reset);

// Initialize the first phase
updateUI();
// ===== Drag nicknames to reorder =====
let dragFrom = null;

for (let i = 1; i <= 10; i++) {
    const input = document.getElementById('input' + i);
    const handle = document.querySelector(`label[for="input${i}"]`);   // the number next to the box

    handle.draggable = true;
    handle.style.cursor = 'grab';

    handle.addEventListener('dragstart', () => { dragFrom = i; });

    [handle, input].forEach(el => {
        el.addEventListener('dragover', e => e.preventDefault());
        el.addEventListener('drop', e => {
            e.preventDefault();
            if (dragFrom === null || dragFrom === i) return;
            if ((dragFrom <= 5) !== (i <= 5)) return;   // same team only
            moveNickname(dragFrom, i);
            dragFrom = null;
        });
    });
}

function moveNickname(from, to) {
    const start = from <= 5 ? 1 : 6;          // blue = 1-5, red = 6-10
    const names = [];
    const photos = [];
    for (let k = start; k < start + 5; k++) {
        names.push(document.getElementById('input' + k).value);
        const photoDiv = document.getElementById('player-photo-' + k);
        photos.push({
            bg: photoDiv.style.backgroundImage,
            hasPhoto: photoDiv.classList.contains('has-photo')
        });
    }

    const [movedName] = names.splice(from - start, 1);
    names.splice(to - start, 0, movedName);

    const [movedPhoto] = photos.splice(from - start, 1);
    photos.splice(to - start, 0, movedPhoto);

    names.forEach((name, idx) => {
        document.getElementById('input' + (start + idx)).value = name;
    });
    photos.forEach((photo, idx) => {
        const photoDiv = document.getElementById('player-photo-' + (start + idx));
        photoDiv.style.backgroundImage = photo.bg;
        photoDiv.classList.toggle('has-photo', photo.hasPhoto);
    });

    updateOutput();   // refreshes the names under the pick cards
}


// Populate the hero grid immediately, without waiting for a slot to be clicked
renderHeroPicker();
