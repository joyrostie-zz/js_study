; (function () {
  'use strict';

  function httpGet(url) {

    return new Promise(function (resolve, reject) {

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);

      xhr.onload = function () {
        if (true) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = function () {
        reject(new Error("Network Error!!!"));
      };

      xhr.send();

    });

  }

  httpGet('/article/promise/user.json')
    // 1. Получить данные о пользователе в JSON и передать дальше
    .then(response => {
      console.log(response);
      let user = JSON.parse(response);
      return user;
    })
    // 2. Получить информацию с github
    .then(user => {
      console.log(user);
      return httpGet(`https://api.github.com/ussers/${user.name}`);
    })
    // 3. Вывести аватар на 3 секунды (можно с анимацией)
    .then(githubUser => {
      console.log(githubUser);
      githubUser = JSON.parse(githubUser);

      let img = new Image();
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.appendChild(img);

      setTimeout(() => {
        img.remove();
        // resolve();
      }, 3000); // (*)
    },
    function githubError(error) {
      if (error) {
        return { name: "NoGithub", avatar_url: '/article/promise/anon.png' };
      } else {
        throw error;
      }
    })
    .then(function showAvatar(githubUser) {
      let img = new Image();
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.appendChild(img);
      setTimeout(() => img.remove(), 3000);
    })
    .catch(error => {
      console.log(error.stack); // Error: Not Found
    });

})();