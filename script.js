const btnGr1 = document.getElementById("btn-gr1");
const btnGr2 = document.getElementById("btn-gr2");
const gr1 = document.querySelectorAll(".gr1");
const gr2 = document.querySelectorAll(".gr2");

function showGroup(group) {
  if(group === 1) {
    gr1.forEach(el => el.classList.remove("hidden"));
    gr2.forEach(el => el.classList.add("hidden"));
    btnGr1.classList.add("active");
    btnGr2.classList.remove("active");
  } else {
    gr2.forEach(el => el.classList.remove("hidden"));
    gr1.forEach(el => el.classList.add("hidden"));
    btnGr2.classList.add("active");
    btnGr1.classList.remove("active");
  }
}

btnGr1.addEventListener("click", () => showGroup(1));
btnGr2.addEventListener("click", () => showGroup(2));

// Domyślnie Grupa 1
showGroup(1);
