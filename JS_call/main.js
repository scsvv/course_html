const url = 'https://jsonplaceholder.typicode.com/users';
let list = [];

fetch(url)
  .then(response => response.json())
  .then(resp => {
      list = resp;
      list.map(e => console.log(e.name))
  })
  .catch(err => console.error("Ошибка загрузки"))
