let FtoC = function (F) {
  let C = ((F - 32) * 5) / 9;

  if (C <= 0) {
    let isFreezing = true;
  }

  return C;
};

let One = FtoC(32);
let Two = FtoC(68);

console.log(One);
console.log(Two);
