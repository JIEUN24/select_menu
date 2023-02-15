// const menu = document.querySelectorAll(".meun_list");
// console.log(menu.forEach((ele) => console.log(ele)));

let product = [
  // "한식",
  // "버거",
  // "치킨",
  // "분식",
  // "중국집",
  // "돈까스",
  // "피자",
  // "샐러드",
  // "초밥",
  // "족발/보쌈",
  // "국밥",
  // "고기",
];

function getCheckboxValue() {
  product = [];
  // 선택된 목록 가져오기

  const query = 'input[name="menu"]:checked';
  const selectedEls = document.querySelectorAll(query);

  let result = [];

  selectedEls.forEach((el) => {
    result.push(el.value);
  });

  product = result;

  // 출력
  console.log(product);
}

const result = () => {
  const canvasWrap = document.getElementById("random");
  const canvas = document.createElement("canvas");
  const button = document.createElement("button");
  canvas.width = "380";
  canvas.height = "380";
  button.innerText = "뭐먹을까?";
  button.id = "rotate";
  canvasWrap.append(canvas, button);

  if (product.length < 2) {
    alert("메뉴를 두개 이상 체크해주세요!");
    return;
  }

  newMake();
};

// const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
const colors = [
  "#dc0936",
  "#e6471d",
  "#f7a416",
  "#efe61f ",
  "#60b236",
  "#209b6c",
  "#169ed8",
  "#3f297e",
  "#87207b",
  "#be107f",
  "#e7167b",
];

const newMake = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext(`2d`);
  const [cw, ch] = [canvas.width / 2, canvas.height / 2];
  const arc = Math.PI / (product.length / 2);

  for (let i = 0; i < product.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i % (colors.length - 1)];
    ctx.moveTo(cw, ch);
    ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
    ctx.fill();
    ctx.closePath();
  }

  ctx.fillStyle = "#fff";
  ctx.font = "18px Pretendard";
  ctx.textAlign = "center";

  for (let i = 0; i < product.length; i++) {
    const angle = arc * i + arc / 2;

    ctx.save();

    ctx.translate(cw + Math.cos(angle) * (cw - 50), ch + Math.sin(angle) * (ch - 50));

    ctx.rotate(angle + Math.PI / 2);

    product[i].split(" ").forEach((text, j) => {
      ctx.fillText(text, 0, 30 * j);
    });

    ctx.restore();
  }
};

document.getElementById("rotate").onclick = function () {
  console.log("이거맞니?");
};

// const rotateBtn = document.getElementById("rotate");
// console.log(rotateBtn);
// rotateBtn.addEventListener("click", () => {
//   console.log("이거맞니?");
//   const canvas = document.querySelector("canvas");
//   canvas.style.transform = `initial`;
//   canvas.style.transition = `initial`;

//   setTimeout(() => {
//     const ran = Math.floor(Math.random() * product.length);

//     const arc = 360 / product.length;
//     const rotate = ran * arc + 3600 + arc * 3 - arc / 4;

//     canvas.style.transform = `rotate(-${rotate}deg)`;
//     canvas.style.transition = `2s`;

//     setTimeout(() => alert(`오늘의 야식은?! ${product[ran]} 어떠신가요?`), 2000);
//   }, 1);
// });

// const rotate = () => {
//   canvas.style.transform = `initial`;
//   canvas.style.transition = `initial`;

//   setTimeout(() => {
//     const ran = Math.floor(Math.random() * product.length);

//     const arc = 360 / product.length;
//     const rotate = ran * arc + 3600 + arc * 3 - arc / 4;

//     canvas.style.transform = `rotate(-${rotate}deg)`;
//     canvas.style.transition = `2s`;

//     setTimeout(() => alert(`오늘의 야식은?! ${product[ran]} 어떠신가요?`), 2000);
//   }, 1);
// };

// newMake();
