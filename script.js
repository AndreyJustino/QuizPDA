let checktrue = document.getElementById("check-true");
let checkfalse = document.getElementById("check-false");

checktrue.addEventListener("change", function () {
  let checkT = checktrue.checked;

  if (checkT === true) {
    checkfalse.disabled = true;
  } else {
    checkfalse.disabled = false;
  }
});

checkfalse.addEventListener("change", function () {
  let checkF = checkfalse.checked;

  if (checkF === true) {
    checktrue.disabled = true;
  } else {
    checktrue.disabled = false;
  }
});
