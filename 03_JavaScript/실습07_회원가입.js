const input = document.querySelector("#input");
idg.addEventListener("input", (e) => {
  console.log(e.target.value);
});
pw.addEventListener("input", (e) => {
  console.log(e.target.value);
});
pw2.addEventListener("input", (e) => {
  console.log(e.target.value);
});
name1.addEventListener("input", (e) => {
  console.log(e.target.value);
});
email.addEventListener("input", (e) => {
  console.log(e.target.value);
});
phoneN.addEventListener("input", (e) => {
  console.log(e.target.value);
});

//  순서대로 어떻게 써야 하는가 ?
// 1. 정규표현식  test 함수가지고 true / false <- 조건문!
// 2. 조건문으로 true인경우 if문에서 P태그 내에 내가 원하는 걸 처리
// 3. 텍스트 변경.. (textContent, innerHTML), 색깔을 변경 .. style.color =
// 4. else  <-- false인 경우 변하는 텍스트 + 빨간 텍스트 색깔
