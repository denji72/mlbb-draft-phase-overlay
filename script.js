const heroes = [
    { name: 'Aamon', img: 'Assets/HeroPick/aamon.png', video: 'Assets/Heroes/aamon.mp4', roles: ['Assassin'] },
    { name: 'Akai', img: 'Assets/HeroPick/akai.png', video: 'Assets/Heroes/akai.mp4', roles: ['Tank'] },
    { name: 'Aldous', img: 'Assets/HeroPick/aldous.png', video: 'Assets/Heroes/aldous.mp4', roles: ['Fighter'] },
    { name: 'Alice', img: 'Assets/HeroPick/alice.png', video: 'Assets/Heroes/alice.mp4', roles: ['Mage'] },
    { name: 'Alpha', img: 'Assets/HeroPick/alpha.png', video: 'Assets/Heroes/alpha.mp4', roles: ['Fighter'] },
    { name: 'Alucard', img: 'Assets/HeroPick/alucard.png', video: 'Assets/Heroes/alucard.mp4', roles: ['Assassin'] },
    { name: 'Angela', img: 'Assets/HeroPick/angela.png', video: 'Assets/Heroes/angela.mp4', roles: ['Support'] },
    { name: 'Argus', img: 'Assets/HeroPick/argus.png', video: 'Assets/Heroes/argus.mp4', roles: ['Fighter'] },
    { name: 'Arlott', img: 'Assets/HeroPick/arlott.png', video: 'Assets/Heroes/arlott.mp4', roles: ['Assassin', 'Fighter'] },
    { name: 'Atlas', img: 'Assets/HeroPick/atlas.png', video: 'Assets/Heroes/atlas.mp4', roles: ['Tank'] },
    { name: 'Aulus', img: 'Assets/HeroPick/aulus.png', video: 'Assets/Heroes/aulus.mp4', roles: ['Fighter'] },
    { name: 'Aurora', img: 'Assets/HeroPick/aurora.png', video: 'Assets/Heroes/aurora.mp4', roles: ['Mage'] },
    { name: 'Badang', img: 'Assets/HeroPick/badang.png', video: 'Assets/Heroes/badang.mp4', roles: ['Fighter'] },
    { name: 'Balmond', img: 'Assets/HeroPick/balmond.png', video: 'Assets/Heroes/balmond.mp4', roles: ['Fighter'] },
    { name: 'Bane', img: 'Assets/HeroPick/bane.png', video: 'Assets/Heroes/bane.mp4', roles: ['Fighter', 'Mage'] },
    { name: 'Barats', img: 'Assets/HeroPick/barats.png', video: 'Assets/Heroes/barats.mp4', roles: ['Tank', 'Fighter'] },
    { name: 'Baxia', img: 'Assets/HeroPick/baxia.png', video: 'Assets/Heroes/baxia.mp4', roles: ['Tank'] },
    { name: 'Beatrix', img: 'Assets/HeroPick/beatrix.png', video: 'Assets/Heroes/beatrix.mp4', roles: ['Marksman'] },
    { name: 'Belerick', img: 'Assets/HeroPick/belerick.png', video: 'Assets/Heroes/belerick.mp4', roles: ['Tank'] },
    { name: 'Benedetta', img: 'Assets/HeroPick/benedetta.png', video: 'Assets/Heroes/benedetta.mp4', roles: ['Assassin'] },
    { name: 'Brody', img: 'Assets/HeroPick/brody.png', video: 'Assets/Heroes/brody.mp4', roles: ['Marksman'] },
    { name: 'Bruno', img: 'Assets/HeroPick/bruno.png', video: 'Assets/Heroes/bruno.mp4', roles: ['Marksman'] },
    { name: 'Carmilla', img: 'Assets/HeroPick/carmila.png', video: 'Assets/Heroes/carmila.mp4', roles: ['Support'] },
    { name: 'Cecilion', img: 'Assets/HeroPick/cecilion.png', video: 'Assets/Heroes/cecilion.mp4', roles: ['Mage'] },
    { name: "Chang'e", img: 'Assets/HeroPick/chang_e.png', video: 'Assets/Heroes/chang_e.mp4', roles: ['Mage'] },
    { name: 'Chip', img: 'Assets/HeroPick/chip.png', video: 'Assets/Heroes/chip.mp4', roles: ['Support'] },
    { name: 'Chou', img: 'Assets/HeroPick/chou.png', video: 'Assets/Heroes/chou.mp4', roles: ['Fighter'] },
    { name: 'Cici', img: 'Assets/HeroPick/cici.png', video: 'Assets/Heroes/cici.mp4', roles: ['Fighter'] },
    { name: 'Claude', img: 'Assets/HeroPick/claude.png', video: 'Assets/Heroes/claude.mp4', roles: ['Marksman'] },
    { name: 'Clint', img: 'Assets/HeroPick/clint.png', video: 'Assets/Heroes/clint.mp4', roles: ['Marksman'] },
    { name: 'Cyclops', img: 'Assets/HeroPick/cyclops.png', video: 'Assets/Heroes/cyclops.mp4', roles: ['Mage'] },
    { name: 'Diggie', img: 'Assets/HeroPick/diggie.png', video: 'Assets/Heroes/diggie.mp4', roles: ['Support'] },
    { name: 'Dyrroth', img: 'Assets/HeroPick/dyroth.png', video: 'Assets/Heroes/dyroth.mp4', roles: ['Fighter'] },
    { name: 'Edith', img: 'Assets/HeroPick/edith.png', video: 'Assets/Heroes/edith.mp4', roles: ['Tank'] },
    { name: 'Esmeralda', img: 'Assets/HeroPick/esmeralda.png', video: 'Assets/Heroes/esmeralda.mp4', roles: ['Mage', 'Support'] },
    { name: 'Estes', img: 'Assets/HeroPick/estes.png', video: 'Assets/Heroes/estes.mp4', roles: ['Support'] },
    { name: 'Eudora', img: 'Assets/HeroPick/eudora.png', video: 'Assets/Heroes/eudora.mp4', roles: ['Mage'] },
    { name: 'Fanny', img: 'Assets/HeroPick/fanny.png', video: 'Assets/Heroes/fanny.mp4', roles: ['Assassin'] },
    { name: 'Faramis', img: 'Assets/HeroPick/faramis.png', video: 'Assets/Heroes/faramis.mp4', roles: ['Mage', 'Support'] },
    { name: 'Floryn', img: 'Assets/HeroPick/floryn.png', video: 'Assets/Heroes/floryn.mp4', roles: ['Support'] },
    { name: 'Franco', img: 'Assets/HeroPick/franco.png', video: 'Assets/Heroes/franco.mp4', roles: ['Tank'] },
    { name: 'Fredrinn', img: 'Assets/HeroPick/fredrin.png', video: 'Assets/Heroes/fredrinn.mp4', roles: ['Tank', 'Fighter'] },
    { name: 'Freya', img: 'Assets/HeroPick/freya.png', video: 'Assets/Heroes/freya.mp4', roles: ['Fighter'] },
    { name: 'Gatotkaca', img: 'Assets/HeroPick/gatotkaca.png', video: 'Assets/Heroes/gatotkaca.mp4', roles: ['Tank'] },
    { name: 'Gloo', img: 'Assets/HeroPick/gloo.png', video: 'Assets/Heroes/gloo.mp4', roles: ['Tank'] },
    { name: 'Gord', img: 'Assets/HeroPick/gord.png', video: 'Assets/Heroes/gord.mp4', roles: ['Mage'] },
    { name: 'Granger', img: 'Assets/HeroPick/granger.png', video: 'Assets/Heroes/granger.mp4', roles: ['Marksman'] },
    { name: 'Grock', img: 'Assets/HeroPick/grock.png', video: 'Assets/Heroes/grock.mp4', roles: ['Tank'] },
    { name: 'Guinevere', img: 'Assets/HeroPick/guinevere.png', video: 'Assets/Heroes/guinevere.mp4', roles: ['Fighter'] },
    { name: 'Gusion', img: 'Assets/HeroPick/gusion.png', video: 'Assets/Heroes/gusion.mp4', roles: ['Assassin'] },
    { name: 'Hanabi', img: 'Assets/HeroPick/hanabi.png', video: 'Assets/Heroes/hanabi.mp4', roles: ['Marksman'] },
    { name: 'Hanzo', img: 'Assets/HeroPick/hanzo.png', video: 'Assets/Heroes/hanzo.mp4', roles: ['Assassin'] },
    { name: 'Harith', img: 'Assets/HeroPick/harith.png', video: 'Assets/Heroes/harith.mp4', roles: ['Mage'] },
    { name: 'Harley', img: 'Assets/HeroPick/harley.png', video: 'Assets/Heroes/harley.mp4', roles: ['Assassin', 'Mage'] },
    { name: 'Hayabusa', img: 'Assets/HeroPick/hayabusa.png', video: 'Assets/Heroes/hayabusa.mp4', roles: ['Assassin'] },
    { name: 'Helcurt', img: 'Assets/HeroPick/helcurt.png', video: 'Assets/Heroes/helcurt.mp4', roles: ['Assassin'] },
    { name: 'Hilda', img: 'Assets/HeroPick/hilda.png', video: 'Assets/Heroes/hilda.mp4', roles: ['Fighter'] },
    { name: 'Hirara', img: 'Assets/HeroPick/hirara.png', video: 'Assets/Heroes/hirara.mp4', roles: ['Assassin'] },
    { name: 'Hylos', img: 'Assets/HeroPick/hylos.png', video: 'Assets/Heroes/hylos.mp4', roles: ['Tank'] },
    { name: 'Irithel', img: 'Assets/HeroPick/irithel.png', video: 'Assets/Heroes/irithel.mp4', roles: ['Marksman'] },
    { name: 'Ixia', img: 'Assets/HeroPick/ixia.png', video: 'Assets/Heroes/ixia.mp4', roles: ['Marksman'] },
    { name: 'Jawhead', img: 'Assets/HeroPick/jawhead.png', video: 'Assets/Heroes/jawhead.mp4', roles: ['Fighter'] },
    { name: 'Johnson', img: 'Assets/HeroPick/johnson.png', video: 'Assets/Heroes/johnson.mp4', roles: ['Tank'] },
    { name: 'Joy', img: 'Assets/HeroPick/joy.png', video: 'Assets/Heroes/joy.mp4', roles: ['Assassin'] },
    { name: 'Julian', img: 'Assets/HeroPick/julian.png', video: 'Assets/Heroes/julian.mp4', roles: ['Assassin', 'Fighter'] },
    { name: 'Kadita', img: 'Assets/HeroPick/kadita.png', video: 'Assets/Heroes/kadita.mp4', roles: ['Assassin', 'Mage'] },
    { name: 'Kagura', img: 'Assets/HeroPick/kagura.png', video: 'Assets/Heroes/kagura.mp4', roles: ['Mage'] },
    { name: 'Kaja', img: 'Assets/HeroPick/kaja.png', video: 'Assets/Heroes/kaja.mp4', roles: ['Support'] },
    { name: 'Kalea', img: 'Assets/HeroPick/kalea.png', video: 'Assets/Heroes/kalea.mp4', roles: ['Support'] },
    { name: 'Karina', img: 'Assets/HeroPick/karina.png', video: 'Assets/Heroes/karina.mp4', roles: ['Assassin'] },
    { name: 'Karrie', img: 'Assets/HeroPick/karrie.png', video: 'Assets/Heroes/karrie.mp4', roles: ['Marksman'] },
    { name: 'Khaleed', img: 'Assets/HeroPick/khaleed.png', video: 'Assets/Heroes/khaleed.mp4', roles: ['Fighter'] },
    { name: 'Khufra', img: 'Assets/HeroPick/khufra.png', video: 'Assets/Heroes/khufra.mp4', roles: ['Tank'] },
    { name: 'Kimmy', img: 'Assets/HeroPick/kimmy.png', video: 'Assets/Heroes/kimmy.mp4', roles: ['Mage', 'Marksman'] },
    { name: 'Lancelot', img: 'Assets/HeroPick/lancelot.png', video: 'Assets/Heroes/lancelot.mp4', roles: ['Assassin'] },
    { name: 'Lapu-Lapu', img: 'Assets/HeroPick/lapulapu.png', video: 'Assets/Heroes/lapulapu.mp4', roles: ['Fighter'] },
    { name: 'Layla', img: 'Assets/HeroPick/layla.png', video: 'Assets/Heroes/layla.mp4', roles: ['Marksman'] },
    { name: 'Leomord', img: 'Assets/HeroPick/leomord.png', video: 'Assets/Heroes/leomord.mp4', roles: ['Fighter'] },
    { name: 'Lesley', img: 'Assets/HeroPick/lesley.png', video: 'Assets/Heroes/lesley.mp4', roles: ['Marksman'] },
    { name: 'Ling', img: 'Assets/HeroPick/ling.png', video: 'Assets/Heroes/ling.mp4', roles: ['Assassin'] },
    { name: 'Lolita', img: 'Assets/HeroPick/lolita.png', video: 'Assets/Heroes/lolita.mp4', roles: ['Tank'] },
    { name: 'Lukas', img: 'Assets/HeroPick/lukas.png', video: 'Assets/Heroes/lukas.mp4', roles: ['Fighter'] },
    { name: 'Lunox', img: 'Assets/HeroPick/lunox.png', video: 'Assets/Heroes/lunox.mp4', roles: ['Mage'] },
    { name: 'Luo Yi', img: 'Assets/HeroPick/luoyi.png', video: 'Assets/Heroes/luoyi.mp4', roles: ['Mage'] },
    { name: 'Lylia', img: 'Assets/HeroPick/lylia.png', video: 'Assets/Heroes/lylia.mp4', roles: ['Mage'] },
    { name: 'Marcel', img: 'Assets/HeroPick/marcel.png', video: 'Assets/Heroes/marcel.mp4', roles: ['Support'] },
    { name: 'Martis', img: 'Assets/HeroPick/martis.png', video: 'Assets/Heroes/martis.mp4', roles: ['Fighter'] },
    { name: 'Masha', img: 'Assets/HeroPick/masha.png', video: 'Assets/Heroes/masha.mp4', roles: ['Fighter'] },
    { name: 'Mathilda', img: 'Assets/HeroPick/mathilda.png', video: 'Assets/Heroes/mathilda.mp4', roles: ['Support'] },
    { name: 'Melissa', img: 'Assets/HeroPick/melissa.png', video: 'Assets/Heroes/melissa.mp4', roles: ['Marksman'] },
    { name: 'Minotaur', img: 'Assets/HeroPick/minotaur.png', video: 'Assets/Heroes/minotaur.mp4', roles: ['Tank'] },
    { name: 'Minsitthar', img: 'Assets/HeroPick/minsitthar.png', video: 'Assets/Heroes/minsitthar.mp4', roles: ['Fighter'] },
    { name: 'Miya', img: 'Assets/HeroPick/miya.png', video: 'Assets/Heroes/miya.mp4', roles: ['Marksman'] },
    { name: 'Moskov', img: 'Assets/HeroPick/moskov.png', video: 'Assets/Heroes/moskov.mp4', roles: ['Marksman'] },
    { name: 'Nana', img: 'Assets/HeroPick/nana.png', video: 'Assets/Heroes/nana.mp4', roles: ['Mage'] },
    { name: 'Natalia', img: 'Assets/HeroPick/natalia.png', video: 'Assets/Heroes/natalia.mp4', roles: ['Assassin'] },
    { name: 'Natan', img: 'Assets/HeroPick/nathan.png', video: 'Assets/Heroes/natan.mp4', roles: ['Marksman'] },
    { name: 'Nolan', img: 'Assets/HeroPick/nolan.png', video: 'Assets/Heroes/nolan.mp4', roles: ['Assassin'] },
    { name: 'Novaria', img: 'Assets/HeroPick/novaria.png', video: 'Assets/Heroes/novaria.mp4', roles: ['Mage'] },
    { name: 'Obsidia', img: 'Assets/HeroPick/obsidia.png', video: 'Assets/Heroes/obsidia.mp4', roles: ['Marksman'] },
    { name: 'Odette', img: 'Assets/HeroPick/odette.png', video: 'Assets/Heroes/odette.mp4', roles: ['Mage'] },
    { name: 'Paquito', img: 'Assets/HeroPick/paquito.png', video: 'Assets/Heroes/paquito.mp4', roles: ['Assassin', 'Fighter'] },
    { name: 'Pharsa', img: 'Assets/HeroPick/pharsa.png', video: 'Assets/Heroes/pharsa.mp4', roles: ['Mage'] },
    { name: 'Phoveus', img: 'Assets/HeroPick/phoveus.png', video: 'Assets/Heroes/phoveus.mp4', roles: ['Fighter'] },
    { name: 'Popol and Kupa', img: 'Assets/HeroPick/popolandkupa.png', video: 'Assets/Heroes/popolandkupa.mp4', roles: ['Marksman'] },
    { name: 'Rafaela', img: 'Assets/HeroPick/rafaela.png', video: 'Assets/Heroes/rafaela.mp4', roles: ['Support'] },
    { name: 'Roger', img: 'Assets/HeroPick/roger.png', video: 'Assets/Heroes/roger.mp4', roles: ['Fighter'] },
    { name: 'Ruby', img: 'Assets/HeroPick/ruby.png', video: 'Assets/Heroes/ruby.mp4', roles: ['Fighter'] },
    { name: 'Saber', img: 'Assets/HeroPick/saber.png', video: 'Assets/Heroes/saber.mp4', roles: ['Assassin'] },
    { name: 'Selena', img: 'Assets/HeroPick/selena.png', video: 'Assets/Heroes/selena.mp4', roles: ['Assassin', 'Support'] },
    { name: 'Sora', img: 'Assets/HeroPick/sora.png', video: 'Assets/Heroes/sora.mp4', roles: ['Fighter'] },
    { name: 'Silvanna', img: 'Assets/HeroPick/silvanna.png', video: 'Assets/Heroes/silvanna.mp4', roles: ['Fighter'] },
    { name: 'Sun', img: 'Assets/HeroPick/sun.png', video: 'Assets/Heroes/sun.mp4', roles: ['Fighter'] },
    { name: 'Suyou', img: 'Assets/HeroPick/suyou.png', video: 'Assets/Heroes/suyou.mp4', roles: ['Assassin', 'Fighter'] },
    { name: 'Terizla', img: 'Assets/HeroPick/terizla.png', video: 'Assets/Heroes/terizla.mp4', roles: ['Fighter'] },
    { name: 'Thamuz', img: 'Assets/HeroPick/thamuz.png', video: 'Assets/Heroes/thamuz.mp4', roles: ['Fighter'] },
    { name: 'Tigreal', img: 'Assets/HeroPick/tigreal.png', video: 'Assets/Heroes/tigreal.mp4', roles: ['Tank'] },
    { name: 'Uranus', img: 'Assets/HeroPick/uranus.png', video: 'Assets/Heroes/uranus.mp4', roles: ['Tank'] },
    { name: 'Vale', img: 'Assets/HeroPick/vale.png', video: 'Assets/Heroes/vale.mp4', roles: ['Mage'] },
    { name: 'Valentina', img: 'Assets/HeroPick/valentina.png', video: 'Assets/Heroes/valentina.mp4', roles: ['Mage'] },
    { name: 'Valir', img: 'Assets/HeroPick/valir.png', video: 'Assets/Heroes/valir.mp4', roles: ['Mage'] },
    { name: 'Vexana', img: 'Assets/HeroPick/vexana.png', video: 'Assets/Heroes/vexana.mp4', roles: ['Mage'] },
    { name: 'Wanwan', img: 'Assets/HeroPick/wanwan.png', video: 'Assets/Heroes/wanwan.mp4', roles: ['Marksman'] },
    { name: 'X.Borg', img: 'Assets/HeroPick/xborg.png', video: 'Assets/Heroes/xborg.mp4', roles: ['Fighter'] },
    { name: 'Xavier', img: 'Assets/HeroPick/xavier.png', video: 'Assets/Heroes/xavier.mp4', roles: ['Mage'] },
    { name: 'Yi Sun-shin', img: 'Assets/HeroPick/yisunshin.png', video: 'Assets/Heroes/yisunshin.mp4', roles: ['Assassin'] },
    { name: 'Yin', img: 'Assets/HeroPick/yin.png', video: 'Assets/Heroes/yin.mp4', roles: ['Assassin', 'Fighter'] },
    { name: 'Yu Zhong', img: 'Assets/HeroPick/yuzhong.png', video: 'Assets/Heroes/yuzhong.mp4', roles: ['Fighter'] },
    { name: 'Yve', img: 'Assets/HeroPick/yve.png', video: 'Assets/Heroes/yve.mp4', roles: ['Mage'] },
    { name: 'Zetian', img: 'Assets/HeroPick/zetian.png', video: 'Assets/Heroes/zetian.mp4', roles: ['Mage'] },
    { name: 'Zhask', img: 'Assets/HeroPick/zhask.png', video: 'Assets/Heroes/zhask.mp4', roles: ['Mage', 'Support'] },
    { name: 'Zhuxin', img: 'Assets/HeroPick/zhuxin.png', video: 'Assets/Heroes/zhuxin.mp4', roles: ['Mage'] },
    { name: 'Zilong', img: 'Assets/HeroPick/zilong.png', video: 'Assets/Heroes/zilong.mp4', roles: ['Assassin', 'Fighter'] },
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
function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img, video');

    if (existingImage) {
        existingImage.classList.add('fly-out');
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        updateHeroImage(hero, id);
    }
}

function loadTeamPhotos(event, team) {
    const files = Array.from(event.target.files).filter(f => f.type.startsWith('image/'));

    files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

    const startIndex = team === 'blue' ? 1 : 6;

    files.slice(0, 5).forEach((file, i) => {
        const playerIndex = startIndex + i;

        // Ambil nama pemain dari nama file (buang ekstensi & angka urutan di depan, jika ada)
        const baseName = file.name.replace(/\.[^/.]+$/, '');
        const nickname = baseName.replace(/^\d+[\s_-]*/, '');
        const nicknameInput = document.getElementById(`input${playerIndex}`);
        if (nicknameInput) nicknameInput.value = nickname;

        const reader = new FileReader();
        reader.onload = function (e) {
            const photoDiv = document.getElementById(`player-photo-${playerIndex}`);
            if (!photoDiv) return;
            photoDiv.style.backgroundImage = `url(${e.target.result})`;
            photoDiv.classList.add('has-photo');
        };
        reader.readAsDataURL(file);
    });

    updateOutput(); // refresh the nameholders under the pick cards
}

// Fungsi untuk mereset semua foto pemain ke kondisi kosong (No Photo)
function resetPlayerPhotos() {
    for (let i = 1; i <= 10; i++) {
        const photoDiv = document.getElementById(`player-photo-${i}`);
        if (photoDiv) {
            photoDiv.style.backgroundImage = '';
            photoDiv.classList.remove('has-photo');
        }
    }
    const blueFolder = document.getElementById('teamFolderBlue');
    const redFolder = document.getElementById('teamFolderRed');
    if (blueFolder) blueFolder.value = '';
    if (redFolder) redFolder.value = '';
}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const isPick = (id >= 1 && id <= 5) || (id >= 11 && id <= 15);
    const side = id <= 10 ? 'blue' : 'red';

    const nameTag = isPick
        ? `<div class="hero-name-tag hero-name-${side} fly-in">${hero.name}</div>`
        : '';

    const media = (hero.video && isPick)
    ? `<video src="${hero.video}" class="fly-in" autoplay loop muted playsinline></video>`
    : `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;

    imageDisplay.innerHTML = `${media}${nameTag}`;

    const slotBtn = document.getElementById(`search-${id}`);
    if (slotBtn) slotBtn.textContent = `${slotBtn.dataset.label}: ${hero.name}`;
}

function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay.innerHTML) {
            const existingMedia = imageDisplay.querySelector('img, video');
            if (existingMedia) existingMedia.classList.add('fly-out');
        }

        setTimeout(() => {
            const slotBtn = document.getElementById(`search-${i}`);
            if (slotBtn) slotBtn.textContent = slotBtn.dataset.label;
            imageDisplay.innerHTML = '';
        }, 500);
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

    const barLabel1 = document.getElementById('barLabel1');
    const barLabel2 = document.getElementById('barLabel2');
    const tempLabel = barLabel1.value;
    barLabel1.value = barLabel2.value;
    barLabel2.value = tempLabel;
    updateBarLabel();

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

        const tempChecked = checkboxA.checked;
        checkboxA.checked = checkboxB.checked;
        checkboxB.checked = tempChecked;

        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }

    // Tukar nickname (dulu tombol terpisah "Switch Nickname")
    switchInputs();

    // Tukar foto pemain
    for (let i = 1; i <= 5; i++) {
        const photoA = document.getElementById('player-photo-' + i);
        const photoB = document.getElementById('player-photo-' + (i + 5));

        const tempBg = photoA.style.backgroundImage;
        const tempHasPhoto = photoA.classList.contains('has-photo');

        photoA.style.backgroundImage = photoB.style.backgroundImage;
        photoA.classList.toggle('has-photo', photoB.classList.contains('has-photo'));

        photoB.style.backgroundImage = tempBg;
        photoB.classList.toggle('has-photo', tempHasPhoto);
    }
}

// Ambil elemen input dan output
const tournamentnameInput = document.getElementById('tournamentnamemid');
const tournamentnameOutput = document.getElementById('tournamentnameOutput');

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
function resetEverything() {
    reset();
    resetContent();
    resetInputs();
    resetTimer();
    resetPhase();
}
// Populate the hero grid immediately, without waiting for a slot to be clicked
renderHeroPicker();
