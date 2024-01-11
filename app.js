const buton = document.getElementById("buton");
const renkyazi = document.getElementById("yazi_gös");
const hexx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const randomrenk = () => {
  let hexKod = "#";
  for (let x = 0; x < 6; x++) {
    hexKod += hexx[Math.floor(Math.random() * hexx.length)];
  }
  return hexKod;
};

buton.addEventListener('click', () => {
    const renkod = randomrenk()
    Text.innerText = renkod
    document.body.style.backgroundColor = renkod
    renkyazi.innerText = renkod; 
});
