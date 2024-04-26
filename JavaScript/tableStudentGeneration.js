// Генерация таблицы студента

const subject_num = 8;
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
for (i = 1; i < subject_num + 1; i++) {
  tr = document.createElement("tr");
  tbody.appendChild(tr);

  // #
  th = document.createElement("th");
  th.innerHTML = i.toString();
  tr.appendChild(th);

  // Предмет
  th = document.createElement("th");
  th.innerHTML = "Предмет";
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
    td.innerHTML = 10;
    tr.appendChild(td);
  }
}
