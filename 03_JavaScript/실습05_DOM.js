const currentTime = () => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  console.log(today);
  console.log(today.getFullYear()); // 년
  console.log(today.getMonth() + 1); // 월 (1월 - 0, 1 : 2월 ~ )
  console.log(today.getDate()); // 일
  console.log(today.getDay()); // 요일 (0 : 일, 1 : 월 ~ )
  console.log(weeks[today.getDay()]);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDay();
  const week = weeks[today.getDay()];

  const current = document.querySelector("#current");
  console.log(current);
  current.innerHTML = `${year}년 ${month}월 ${day}일 (${week})`;

  const h1 = document.querySelector("h1");
  console.log(today.getHours()); // 시
  console.log(today.getMinutes()); // 분
  console.log(today.getSeconds()); // 초
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  h1.textContent = `${hour}:${minute}:${second}`;
};

const weeks = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();
console.log(today);
console.log(today.getFullYear()); // 년
console.log(today.getMonth() + 1); // 월 (1월 - 0, 1 : 2월 ~ )
console.log(today.getDate()); // 일
console.log(today.getDay()); // 요일 (0 : 일, 1 : 월 ~ )
console.log(weeks[today.getDay()]);
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDay();
const week = weeks[today.getDay()];

const current = document.querySelector("#current");
console.log(current);
current.innerHTML = `${year}년 ${month}월 ${day}일 (${week})`;

const h1 = document.querySelector("h1");
console.log(today.getHours()); // 시
console.log(today.getMinutes()); // 분
console.log(today.getSeconds()); // 초
const hour = String(today.getHours()).padStart(2, "0");
const minute = String(today.getMinutes()).padStart(2, "0");
const second = String(today.getSeconds()).padStart(2, "0");
h1.textContent = `${hour}:${minute}:${second}`;

const randomBackground = () => {
  const body = document.body;
  const r = Math.floor(Math.random() * 256); // 0 <= random < 256
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  //   const backGround = [
  //     "#ED833A",
  //     "#EA839B",
  //     "#42B667",
  //     "#FFC228",
  //     "#005456",
  //     "#ACDED5",
  //   ];
  body.style.background = `rgba(${r}, ${g}, ${b}, 0.4)`;
  // background[Math.floor(Math.random() * backGround.length)];
};

const count = () => {
  const last = new Date("2026-01-01 00:00:00"); // 목표 하는 날짜
  const now = new Date();
  // console.log(Math.floor((last - now) / 1000));
  const second = Math.floor((last - now) / 1000); // 1초 = 밀리세컨드/1000
  const minute = Math.floor(second / 60); // 60초 = 1분
  const hour = Math.floor(minute / 60); // 60분 = 1시간
  const day = Math.floor(hour / 24); // 24시간 = 1일
  console.log(day);
  console.log(hour % 24);
  console.log(minute % 60);
  console.log(second % 60);
  const count = document.querySelector("#count");
  count.innerHTML = `올해 남은 시간
  ${day}일
  ${hour % 24}시간
  ${minute % 60}분
  ${second % 60}초`;
};

const quotes = [
  {
    en: "God doesn't require us to suceed: he only requires that you try.",
    ko: "신은 우리에게 성공할 것을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
  },
  {
    en: "Hold faithfulness and sincerity as first principles.",
    ko: "충심과 성실을 첫 번째 원칙으로 삼아라",
  },
  {
    en: "Only actions give life strength: Only moderation gives it a charm",
    ko: "행동만이 삶에 힘을 주고 절제만이 삶에 매력을 준다",
  },
  {
    en: "I'm as proud of we don't do as I am of what we do.",
    ko: "우리가 이룬 것만큼, 우리가 이루지 못한 것도 자랑스럽습니다.",
  },
  {
    en: "No one has ever made a difference by being like everyone else.",
    ko: "그저 남들과 똑같이 살면서 차이를 만들어낸 사람은 없어요",
  },
  {
    en: "Don't pay any attention to what they write about you. Just measure it in inches",
    ko: "그들이 당신에 대해 뭐라고 쓰든 전혀 신경쓰지 마라. 다만 그것을 자세히 평가하라",
  },
];

import quotes from "./quotes";

const randomQuote = () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteE = document.querySelector("qouteE");
  const qouteK = document.querySelector("qouteK");
  console.log(random.en);
  console.log(random.ko);
  quoteE.innerHTML = random.en;
  qouteK.innerHTML = random.ko;
};

currentTime();
randomBackground();
count();
randomQuote();

setInterval(() => {
  currentTime();
  count();
}, 1000); // 1000 = 1초

setInterval(() => {
  randomBackground();
  randomQuote();
}, 3000); // 3000 = 3초
