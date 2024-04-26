// Генерация таблицы преподователя

const people_num = 120;
const lec_num = 10;
const prc_num = 15;
const lab_num = 5;
var tbody = document.querySelector("tbody");
var thead = document.querySelector("thead");

//Нумерация в заголовке
var tr = document.createElement("tr");
thead.appendChild(tr);

for (i = 0; i < lec_num + prc_num + lab_num; i++) {
  th = document.createElement("th");
  th.className = "secondary-th";

  // Нумерация лаб
  if (i >= lec_num + prc_num) {
    th.innerHTML = (i - lec_num - prc_num + 1).toString();
  }

  // Нумерация практик
  else if (i >= lec_num) {
    th.innerHTML = (i - lec_num + 1).toString();
  }

  // Нумерация лекций
  else th.innerHTML = (i + 1).toString();
  tr.appendChild(th);
}

//Данные таблицы
for (i = 1; i < people_num + 1; i++) {
  tr = document.createElement("tr");
  tbody.appendChild(tr);

  // #
  th = document.createElement("th");
  th.innerHTML = i.toString();
  tr.appendChild(th);

  // ФИО
  th = document.createElement("th");
  th.innerHTML = "ФИО";
  tr.appendChild(th);

  // Фамилия Имя Отчество
  th = document.createElement("th");
  th.innerHTML = "Фамилия Имя Отчество";
  tr.appendChild(th);

  // Столбики суммы (видимые при скрытии основных)
  for (j = 0; j < 3; j++) {
    td = document.createElement("td");
    td.hidden = true;
    tr.appendChild(td);
  }

  // Баллы
  for (j = 0; j < lec_num + prc_num + lab_num; j++) {
    td = document.createElement("td");
    tr.appendChild(td);

    // Форма для ячейки
    form = document.createElement("form");
    form.method = "post";
    td.appendChild(form);

    // Поле ввода для ячейки
    inp = document.createElement("input");
    inp.type = "text"; //Удобнее контролировать ввод
    inp.value = "0";
    form.appendChild(inp);
  }
}
