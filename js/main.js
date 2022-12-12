const container = document.querySelector(".container");
let counter = 1;
let mas = ["item0"];

let obj = {
  1: true,    2: true,   3: false,   4: false,
  5: false,   6: false,   7: false,   8: false,
  9: false,   10: false,  11: false,  12: false,
  13: false,  14: false,  15: false,  16: false,
  17: false,  18: false,  19: false,  20: false,
  21: false,  22: false,  23: false,  24: false,
  25: false,  26: false,  27: false,  28: false,
  29: false,  30: false,  31: false,  32: false,
  33: false,  34: false,  35: false,  36: false,
  37: false,  38: false,  39: false,  40: false,
  41: false,  42: false,  43: false,  44: false,
  45: false,  46: false,  47: false,  48: false,
  49: false,  50: false,  51: false,  52: false,
  53: false,  54: false,  55: false,  56: false,
  57: false,  58: false,  59: false,  60: false,
  61: false,  62: false,  63: false,  64: false,
};

let lastMas = mas[mas.length-1]
lastMas = lastMas.replace(/[^0-9]/g, '');

container.addEventListener("click", function (e) {
  let item = e.target.className;
  let a = mas.lastIndexOf(item);


  if (a == -1 && item != "container") {

    let item1 = item.replace(/[^0-9]/g, '');
    lastMas = mas[mas.length-1]
    lastMas = lastMas.replace(/[^0-9]/g, '');
    let Proverka = parseInt(lastMas)
    console.log(lastMas)
    console.log(item1)
    console.log(Proverka)

      if (
          item1 == Proverka + 6 ||
          item1 == Proverka +10 ||
          item1 == Proverka +15 ||
          item1 == Proverka +17 ||
          item1 == Proverka - 6 ||
          item1 == Proverka -10 ||
          item1 == Proverka -15 ||
          item1 == Proverka -17 ||
          Proverka == 0
      
          )
          
          
          {     
        mas.push(item)
        let box = document.querySelector("." + item);
        box.innerText = counter++;
      }

  }

});


// let str = "Hello";
// for(let i = 0; i < str.length; i++){
//     str = str.split(-1,4)
//     console.log(str)
// }


// var str = '7. Как удалить все, кроме цифр из строки с помощью JavaScript?';
// str = str.replace(/[^0-9]/g, '');

// console.log(str)