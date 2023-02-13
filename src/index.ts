import { User, renderCard, renderAddNewCard } from "./components/index";
import { createUserFetcher, getUsersFetcher } from "./services/usersFetcher";
import "./styles/main.scss";

const notesHTML = document.querySelector(".notes .row");
const addButton = document.querySelector("#addBtn");

addButton.addEventListener("click", () => {
  const titleControl = <HTMLInputElement>document.getElementById("titleControl");
  const textControl = <HTMLTextAreaElement>document.getElementById("textControl");

  const newUser: User = {
    id: 1,
    name: titleControl.value,
    username: "Bret",
    email: textControl.value,
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  createUserFetcher(newUser).then((body) => console.log(body));

  getUsersFetcher().then((users: User[]) => {
    users.forEach((user) => {
      const userCard = renderCard(user);
      notesHTML.appendChild(userCard);
    });

    const newCard = renderAddNewCard();
    notesHTML.append(newCard);
  });

  notesHTML.innerHTML = "";
  titleControl.value = "";
  textControl.value = "";
});

getUsersFetcher().then((users: User[]) => {
  users.forEach((user) => {
    const userCard = renderCard(user);
    notesHTML.appendChild(userCard);
  });

  const newCard = renderAddNewCard();
  notesHTML.append(newCard);
});
