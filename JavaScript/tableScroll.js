// === Оставляем заголовки на экране при scroll ======================//

// Контейнер, содержащий таблицу
var table_cont = document.querySelector(".container-fluid");
// Шапка
var thead = table_cont.querySelector("thead");
// Все заголовки шапки
var th_thead_list = thead.querySelectorAll("th");
// Все заголовки тела
var th_tbody_list = table_cont.querySelectorAll("tbody th");

//Событие на прокрутку
table_cont.addEventListener("scroll", function () {
  //Голова (Заголовки сверху)
  var translate = "translateY(" + this.scrollTop + "px)";
  thead.style.transform = translate;

  //Смещение заголовков слева таблицы
  translate = "translateX(" + this.scrollLeft + "px)";

  // В шапке(#, ФИО, Фамилия И.О)
  for (var i = 0; i < 3; i++) {
    th_thead_list[i].style.transform = translate;
  }

  //Заголовки слева в теле (номера, ФИО, Фамилия И.О.)
  for (var i = 0, len = th_tbody_list.length; i < len; i++) {
    th_tbody_list[i].style.transform = translate;
  }
});
