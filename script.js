
// Array semua NPC Girls (gambar kamu)
const girls = [
  "https://raw.githubusercontent.com/DxSV2/npcgirls/main/IMG_20260606_230847.png",
  "https://raw.githubusercontent.com/DxSV2/npcgirls/main/IMG_20260606_230916.png",
  "https://raw.githubusercontent.com/DxSV2/npcgirls/main/IMG_20260606_231006.png",
  "https://raw.githubusercontent.com/DxSV2/npcgirls/main/IMG_20260606_231032.png"
];

// Tampilkan gambar pertama saat load
document.getElementById("main-character").src = girls[0];

function randomCharacter() {
  const randomIndex = Math.floor(Math.random() * girls.length);
  document.getElementById("main-character").src = girls[randomIndex];
}

function downloadCharacter() {
  const img = document.getElementById("main-character");
  const link = document.createElement("a");
  link.href = img.src;
  link.download = "npc-girl-" + Date.now() + ".png";   // nama file unik
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
