const quotes = [
  {
    quote: "‘뭐해?‘라는 두 글자에 ‘네가 보고 싶어’ 나의 속마음을 담아",
    author: "아이유 - Blueming",
  },
  {
    quote: "So are you happy now Finally happy now are you",
    author: "아이유 - 에잇",
  },
  {
    quote: " I'm such a good surfer 가라앉지 않기",
    author: "아이유 - 어푸",
  },
  {
    quote: "강자에게 더 세게 I love gamble",
    author: "아이유 - Coin",
  },
  {
    quote:
      "푸르른 우리 위로 커다란 strawberry moon 한 스쿱 나에게 너를 맡겨볼래",
    author: "아이유 - strawberry moon",
  },
];

// console.log(Math.floor(Math.random() * quotes.length));
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
