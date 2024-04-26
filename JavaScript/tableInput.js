// === Обработка ввода в таблицу =====================================//

// Inputs всех ячеек
input_list = document.querySelector("tbody").querySelectorAll("td form input");

for (i = 0, inp_len = input_list.length; i < inp_len; i++) {
  // Событие при вводе
  input_list[i].oninput = function () {
    // Запомнить позицию курсора (чтобы не изменял свою позицию после обработки)
    curcor_pos = this.selectionStart;

    // Максимум - 3х значный модуль
    var maximum;
    if (this.value[0] == "-") maximum = 4;
    else maximum = 3;

    // Обрезать значение
    if (this.value.length > maximum) {
      this.value =
        this.value.slice(0, this.selectionStart - 1) +
        this.value.slice(this.selectionStart, this.value.length);
      curcor_pos -= 1;
    }

    // Корректность ввода
    var check_min = "0123456789-";
    var check_num = "0123456789";
    index = 0;
    len = this.value.length;

    // Проход по всей строке
    while (index < len) {
      // Проверка первого символа
      if (index == 0 && !check_min.includes(this.value[0])) {
        this.value = this.value.slice(1, len);
        len -= 1;
        curcor_pos -= 1;

        // Проверка остальных
      } else if (index != 0 && !check_num.includes(this.value[index])) {
        this.value =
          this.value.slice(0, index) + this.value.slice(index + 1, len);
        len -= 1;
        curcor_pos -= 1;
      } else index++;
    }

    // Установить курсор
    this.setSelectionRange(curcor_pos, curcor_pos);

    // Отправка формы
    // this.parentElement.submit();
  };
}
