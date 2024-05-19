/* Задача 2:
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды. */

const dogsElement = document.querySelector("section.dogs");
const h1Element = document.createElement("h1");
h1Element.innerHTML = "10 dogs";
h1Element.classList.add("heading");
dogsElement.appendChild(h1Element);
const dogsSetElement = document.createElement("div");
dogsSetElement.classList.add("dogs_set");
dogsElement.appendChild(dogsSetElement);

const dogsURL = "https://dog.ceo/api/breeds/image/random/10";
fetch(dogsURL)
  .then((response) => response.json())
  .then((data) => {
    const dogsArray = data.message;
    for (let i = 0; i < dogsArray.length; i++) {
      setTimeout(
        () =>
          dogsSetElement.insertAdjacentHTML(
            "beforeend",
            `<img src="${dogsArray[i]}">`
          ),
        3000 * (i + 1)
      );
    }
  })
  .catch((error) => console.error(error));
