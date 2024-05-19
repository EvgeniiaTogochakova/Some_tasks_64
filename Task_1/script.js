/* Задача 1:
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) 
и отобразить их на странице. 
Пользователь должен иметь возможность удалить любого пользователя из списка. */

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const usersURL = "https://jsonplaceholder.typicode.com/users";
const usersData = await getData(usersURL);
// console.log(usersData);

const usersSetElem = document.querySelector("section.users div.usersSet");
usersData.forEach((user) => {
  usersSetElem.insertAdjacentHTML(
    "beforeend",
    `
    <article class="user">
        <img class="profile" src="./free-icon-user.png">
        <img class="cross" src="./cross.png">
        <h4>Имя: ${user.name}</h4>
        <h6>Город: ${user.address.city}</h6>
        <p>Телефон: ${user.phone}</p>
        <p>Почта: ${user.email}</p>
        <p>Сайт: ${user.website}</p>
    </article>
    `
  );
});

const usersCollection = usersSetElem.children;
console.log(usersCollection);
const imgCrossElems = usersSetElem.querySelectorAll("img.cross");
imgCrossElems.forEach((crossElement) => {
  crossElement.addEventListener("click", function (e) {
    crossElement.parentElement.remove();
    console.log(usersCollection.length);
    if (usersCollection.length === 0) {
      const noUsers = document.createElement("h1");
      noUsers.innerHTML = "удалены";
      usersSetElem.appendChild(noUsers);
    }
  });
});
