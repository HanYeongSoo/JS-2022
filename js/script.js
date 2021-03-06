const amIUgly = null;
let something;

console.log(amIUgly); // something은 변수는 존재하지만 값이 없는 것
console.log(something); //  null은 변수도 있고 값도 있는데 그 값 자체가 null(비어있음)

// =================================================================

const daysOfWeeks = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeeks[4]);

// Add one more day to the Array
daysOfWeeks.push("sun");
console.log(daysOfWeeks);

// =================================================================

const player = {
  name: "한영수",
  points: 95,
  man: true,
};
console.log(player);
player.character = "전사";
console.log(player);

// =================================================================

function plus(a, b) {
  console.log("a + b = " + (a + b));
}
plus(10, 5);

const player2 = {
  name: "영수",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you");
  },
};
console.log(player2.name);
player2.sayHello("수현");

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
const plusResult = calculator.add(10, 5);
const minusResult = calculator.minus(plusResult, 5);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

// =================================================================
