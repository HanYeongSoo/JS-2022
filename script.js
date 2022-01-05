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
