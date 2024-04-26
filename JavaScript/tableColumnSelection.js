// === Выделение столбца =============================================//

// Все строки таблицы
var tr_list = document.querySelector("tbody").querySelectorAll("tr");
var people_count = tr_list.length;

// Заголовки-нумерация в шапке
var th_list = document.querySelector("thead").querySelectorAll(".secondary-th");

// Проход по всем строчкам
for (var i = 0; i < people_count; i++) {
  // Ячейки в строке
  var td_list = tr_list[i].querySelectorAll("td");

  // Создание обработчиков для каждой ячейки и заголовка
  for (let i1 = 0, len1 = td_list.length; i1 < len1; i1++) {
    // Наведение (покраска столбика)
    td_list[i1].onmouseenter = th_list[i1].onmouseenter = function () {
      paint_column(i1, "rgb(236, 236, 236)", "rgb(218,218,218)");
    };

    // Убрать курсор (возврат столбика в начальное сост.)
    td_list[i1].onmouseleave = th_list[i1].onmouseleave = function () {
      paint_column(i1, "white", "rgb(236,236,236)");
    };
  }
}

// Покраска всего столбца (номер столбца, цвет ячеек, цвет заголовка)
function paint_column(column, td_color, th_color) {
  // Покраска ячеек
  for (var i = 0; i < people_count; i++) {
    // В каждой строке получаем td и красим
    tr_list[i].querySelectorAll("td")[column].style.backgroundColor = td_color;
  }

  // Покраска заголовка
  th_list[column].style.backgroundColor = th_color;
}
