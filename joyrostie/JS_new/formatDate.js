  ;'use strict';

function fancyDate(date) {
  let arr = (date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()).split('.');

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] < 10 ) arr[i] = ('0' + arr[i]);
  }

  arr[2] = arr[2].substring(2, 4)
  let str = arr.join('.')
  return str;
}

function formatDate(date) {
  if (typeof date == typeof '') {
    return fancyDate(new Date(Date.parse(date)));
  }

  else if (typeof date == 'number') {
    return fancyDate(new Date(date * 1000));
  }

  else if (Array.isArray(date)) {
    for (let i = 0; i < date.length; i++) {
      if (date[i] === 0) date[i] = 'Jan'
    }
    let str = date.join('-');
    return fancyDate(new Date(Date.parse(date)));

  }else {
    return fancyDate(date);
  }
}
