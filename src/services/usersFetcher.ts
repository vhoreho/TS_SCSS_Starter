import { User } from "../components/index";

export async function getUsersFetcher() {
  try {
    const response = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function createUserFetcher(user: User) {
  let data = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let body = await data.json();
  return body;
}
