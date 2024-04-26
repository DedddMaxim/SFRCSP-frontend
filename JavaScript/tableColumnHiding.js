// === Скрытие лекций, практик, лабораторных =========================//

// Картинки закрытый глаз
var img_close_list = document
  .querySelector("thead")
  .querySelectorAll(".img-eye-close");
// Картинки открытый глаз
var img_open_list = document
  .querySelector("thead")
  .querySelectorAll(".img-eye-open");
// Заголовки лекции, практики, лабы
var main_th_list = document.querySelector("thead").querySelectorAll(".main-th");
// Заголовки нумерации
var second_th_list = document
  .querySelector("thead")
  .querySelectorAll(".secondary-th");
// Строки таблицы
var tr_list = document.querySelector("tbody").querySelectorAll("tr");

// Скрытие
for (let i = 0, len = img_close_list.length; i < len; i++) {
  img_close_list[i].onclick = function () {
    // Поиск первого столбца из тех, что надо скрыть
    // Инициализация 3, так как есть 3 столбца суммы до этого
    var index_first_td = 3;

    for (j = 0; j < i; j++) {
      index_first_td += main_th_list[j].colSpan;
    }

    // Скрытие заголовка
    main_th_list[i].hidden = true;

    // Скрытие нумерации
    for (
      j = index_first_td, len = index_first_td + main_th_list[i].colSpan;
      j < len;
      j++
    ) {
      second_th_list[j].hidden = true;
    }

    // Скрытие баллов
    // Массив сумм баллов
    var sum_array = [];

    // Проходим по всем строкам таблицы
    for (j = 0, list_len = tr_list.length; j < list_len; j++) {
      // Сумма текущей строки (т.к. массив не int)
      var now_sum = 0;

      // Ячейки в строке
      td_list = tr_list[j].querySelectorAll("td");

      // Проходим по всем ячейкам, которые надо скрыть
      for (
        k = index_first_td, len = index_first_td + main_th_list[i].colSpan;
        k < len;
        k++
      ) {
        td_list[k].hidden = true;
        // Считаем сумму
        // Обработка исключения, так как у студента нет input
        try {
          var inp_value = td_list[k].querySelector("input").value;
        } catch (error) {
          var inp_value = td_list[k].innerHTML;
        }
        if (inp_value != "") now_sum += parseInt(inp_value);
      }
      // Вносим сумму в массив
      sum_array[j] = now_sum;
    }

    // Отображение заголовков сумм
    second_th_list[i].hidden = false;

    // Отображение ячеек сумм
    // Проходим по всем строкам таблицы
    for (j = 0, list_len = tr_list.length; j < list_len; j++) {
      // Ячейка в строке
      td = tr_list[j].querySelectorAll("td")[i];
      td.hidden = false;
      // Выводим сумму
      td.innerHTML = sum_array[j];
    }
  };
}

// Раскрытие
for (let i = 0, len = img_open_list.length; i < len; i++) {
  img_open_list[i].onclick = function () {
    // Поиск первого столбца из тех, что надо открыть
    // Инициализация 3, так как 3 столбца суммы до этого
    var index_first_td = 3;

    for (j = 0; j < i; j++) {
      index_first_td += main_th_list[j].colSpan;
    }

    // Скрытие заголовков сумм
    th_list[i].hidden = true;

    // Скрытие ячеек сумм
    // Проходим по всем строкам таблицы
    for (j = 0, list_len = tr_list.length; j < list_len; j++) {
      tr_list[j].querySelectorAll("td")[i].hidden = true;
    }

    // Отображение основного заголовка
    main_th_list[i].hidden = false;

    // Отображение нумерации
    for (
      j = index_first_td, len = index_first_td + main_th_list[i].colSpan;
      j < len;
      j++
    ) {
      second_th_list[j].hidden = false;
    }

    // Отображение баллов
    // Проходим по всем строкам таблицы
    for (j = 0, tr_len = tr_list.length; j < tr_len; j++) {
      td_list = tr_list[j].querySelectorAll("td");

      // Проходим по всем ячейкам, которые надо открыть
      for (
        k = index_first_td, len = index_first_td + main_th_list[i].colSpan;
        k < len;
        k++
      ) {
        // Получаем ячейку через ID
        td_list[k].hidden = false;
      }
    }
  };
}
