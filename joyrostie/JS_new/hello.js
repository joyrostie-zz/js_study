
; (function () {
  'use strict';

  let group = {
    title: "Наш курс",
    students: ["Вася", "Петя", "Даша"],

    showList: function () {
      this.students.forEach((function (student) {
        alert(this.title + ': ' + student);
      }));
    }
  };

  group.showList();

})();