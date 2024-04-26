// === Масштаб таблицы ===============================================//

//Получаем кнопки и таблицу
var btn_min = document.querySelector(".minus-btn");
var btn_plus = document.querySelector(".plus-btn");
var tab = document.querySelector(".table");

// Текущее состояние шрифта(0..6)
var font_status = 2;
const font_status_max = 5;
const font_status_min = 0;

//При уменьшении
btn_min.onclick = function () {
  //Получаем текущий размер шрифта в Int
  var font_size_style = window
    .getComputedStyle(tab, null)
    .getPropertyValue("font-size");
  var font_size = parseInt(font_size_style);

  // Изменяем, если можно
  if (font_status != font_status_min) {
    tab.style.fontSize = font_size - 2 + "px";
    font_status -= 1;
  }
};

//При увеличении
btn_plus.onclick = function () {
  //Получаем текущий размер шрифта в Int
  var font_size_style = window
    .getComputedStyle(tab, null)
    .getPropertyValue("font-size");
  var font_size = parseInt(font_size_style);

  // Изменяем, если можно
  if (font_status != font_status_max) {
    tab.style.fontSize = font_size + 2 + "px";
    font_status += 1;
  }
};
