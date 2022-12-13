const container = document.querySelector(".container");
const btn = document.getElementById("btn");
const restart = document.getElementById("restart");

let counter = 1;
let mas = ["item0"];

let lastMas = mas[mas.length - 1];
lastMas = lastMas.replace(/[^0-9]/g, "");

function Add(e) {
  let item = e.target.className;
  let a = mas.lastIndexOf(item);

  if (a == -1 && item != "container") {
    let item1 = item.replace(/[^0-9]/g, "");
    lastMas = mas[mas.length - 1];
    lastMas = lastMas.replace(/[^0-9]/g, "");
    let Proverka = parseInt(lastMas);

    if (
      Proverka == 0 ||
      item1 == Proverka + 6 ||
      item1 == Proverka + 10 ||
      item1 == Proverka + 15 ||
      item1 == Proverka + 17 ||
      item1 == Proverka - 6 ||
      item1 == Proverka - 10 ||
      item1 == Proverka - 15 ||
      item1 == Proverka - 17
    ) {
      mas.push(item);
      let box = document.querySelector("." + item);
      box.innerText = counter++;
    }
  }
}

container.addEventListener("click", Add);

btn.addEventListener("click", undo);
restart.addEventListener("click", restartFunc);

function restartFunc() {
  if (counter !== 1) {
    for (let item in mas) {
      if (mas[item] == "item0") {
        continue;
      }
      let p2 = document.querySelector("." + mas[item]);
      p2.innerText = "";
    }
    counter = 1;
    mas.length = 1;
  }
}

function undo() {
  if (counter !== 1) {
    let pop = mas.pop();
    let p2 = document.querySelector("." + pop);
    p2.innerText = "";
    counter--;
  }
}

addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    undo();
  }
});
