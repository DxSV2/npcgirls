const girls = [
  "https://i.imgur.com/0Z8v7fL.png",   // ganti dengan gambar kamu
  "https://i.imgur.com/placeholder2.png",
  "https://i.imgur.com/placeholder3.png"
  // Tambahkan banyak link gambar NPC Girls kamu di sini
];

function randomCharacter() {
  const random = girls[Math.floor(Math.random() * girls.length)];
  document.getElementById("main-character").src = random;
}

function downloadCharacter() {
  const img = document.getElementById("main-character");
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "npc-girl.png";
  a.click();
}
