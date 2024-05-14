const boxes = document.querySelectorAll(".box");
// top row boxes
const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
// middle row boxes
const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const m3 = document.querySelector("#m3");
// botton row boxes
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
// winning lines vertical
const lineVertcalTop = document.querySelector(".lineVertcalTop");
const lineVertcalMiddle = document.querySelector(".lineVertcalMiddle");
const lineVertcalBottom = document.querySelector(".lineVertcalBottom");
// winning line hoeizontl
const lineHorizontalLeft = document.querySelector(".lineHorizontalLeft");
const lineHorizontMiddle = document.querySelector(".lineHorizontMiddle");
const lineHorizontRight = document.querySelector(".lineHorizontRight");
// winning line diagonal
const lineDiagonalLeftToRight = document.querySelector(
  ".lineDiagonalLeftToRight"
);
const lineDiagonalRightToLeft = document.querySelector(
  ".lineDiagonalRightToLeft"
);
function win() {
  alert(`Player ${count + 1} won`);
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}
function end() {
  window.location.reload();
}
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // Enteries o/x one by one
    let boxText = e.target.innerText;
    if (boxText === "" && count == 0) {
      e.target.innerText = "o";
      count = 1;
    } else if (boxText === "" && count == 1) {
      e.target.innerText = "x";
      count = 0;
    }
    // verticle line check
    if (
      t1.innerHTML === t2.innerHTML &&
      t2.innerHTML === t3.innerHTML &&
      t1.innerHTML !== "" &&
      t2.innerHTML !== "" &&
      t3.innerHTML !== ""
    ) {
      lineVertcalTop.style.visibility = "visible";
      win();
    } else if (
      m1.innerHTML !== "" &&
      m2.innerHTML !== "" &&
      m3.innerHTML !== "" &&
      m1.innerHTML === m2.innerHTML &&
      m2.innerHTML === m3.innerHTML
    ) {
      lineVertcalMiddle.style.visibility = "visible";
      win();
    } else if (
      b1.innerHTML !== "" &&
      b2.innerHTML !== "" &&
      b3.innerHTML !== "" &&
      b1.innerHTML === b2.innerHTML &&
      b2.innerHTML === b3.innerHTML
    ) {
      lineVertcalBottom.style.visibility = "visible";
      win();
    }

    // Horizontal line check
    else if (
      t1.innerHTML === m1.innerHTML &&
      m1.innerHTML === b1.innerHTML &&
      t1.innerHTML !== "" &&
      m1.innerHTML !== "" &&
      b1.innerHTML !== ""
    ) {
      lineHorizontRight.style.visibility = "visible";
      win();
    } else if (
      t2.innerHTML === m2.innerHTML &&
      m2.innerHTML === b2.innerHTML &&
      t2.innerHTML !== "" &&
      m2.innerHTML !== "" &&
      b2.innerHTML !== ""
    ) {
      lineHorizontMiddle.style.visibility = "visible";
      win();
    } else if (
      t3.innerHTML === m3.innerHTML &&
      m3.innerHTML === b3.innerHTML &&
      t3.innerHTML !== "" &&
      m3.innerHTML !== "" &&
      b3.innerHTML !== ""
    ) {
      lineHorizontalLeft.style.visibility = "visible";
      win();
    }
    // Diagonal line check
    else if (
      t1.innerHTML === m2.innerHTML &&
      m2.innerHTML === b3.innerHTML &&
      t1.innerHTML !== "" &&
      m2.innerHTML !== "" &&
      b3.innerHTML !== ""
    ) {
      lineDiagonalLeftToRight.style.visibility = "visible";
      win();
    } else if (
      t3.innerHTML === m2.innerHTML &&
      m2.innerHTML === b1.innerHTML &&
      t3.innerHTML !== "" &&
      m2.innerHTML !== "" &&
      b1.innerHTML !== ""
    ) {
      lineDiagonalRightToLeft.style.visibility = "visible";
      win();
    }
    // end game if all blocked filled
    else if (
      t1.innerHTML !== "" &&
      t2.innerHTML !== "" &&
      t3.innerHTML !== "" &&
      m1.innerHTML !== "" &&
      m2.innerHTML !== "" &&
      m3.innerHTML !== "" &&
      b1.innerHTML !== "" &&
      b2.innerHTML !== "" &&
      b3.innerHTML !== ""
    ) {
      end();
    }
  });
});
