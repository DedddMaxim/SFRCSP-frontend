// === Обработка DropDown ============================================//

// Все dropdown
var dropdown_list = document.querySelector("nav").querySelectorAll(".dropdown");

//Пройти по всем dropdown
for (i = 0, dropdown_len = dropdown_list.length; i < dropdown_len; i++) {
  // На кнопке отображение текста первого элемента
  var btn = dropdown_list[i].querySelector(".blue-btn");
  var item_list = dropdown_list[i].querySelectorAll(".dropdown-item");
  btn.innerHTML = item_list[0].innerHTML;

  // События по нажатию на элемент списка
  for (j = 0, item_len = item_list.length; j < item_len; j++) {
    item_list[j].onclick = function () {
      // Переименование списка
      btn =
        this.parentElement.parentElement.parentElement.querySelector(
          ".blue-btn"
        );
      btn.innerHTML = this.innerHTML;
    };
  }
}
