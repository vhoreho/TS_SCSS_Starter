import { User } from "../index";

export const renderCard = (cardProps: User) => {
  const card: HTMLDivElement = document.createElement("div");
  card.className = "col-md-4 col-sm-6 content-card";
  card.innerHTML = `<div class="card border border-primary border-4 p-4 card-just-text" data-background="color" data-color="blue" data-radius="none">
                            <div class="content">
                                <h4 class="title">
                                  <a class="card-link" href="#">${cardProps.name}</a>
                                </h4>
                                <p class="description"><strong>Email</strong>: ${cardProps.email}</p>
                                <p class="description"><strong>Phone</strong>: ${cardProps.phone}</p>
                                <p class="description"><strong>Address</strong>: ${cardProps.address.city}, ${cardProps.address.street}</p>
                                <p class="description"><strong>Company</strong>: ${cardProps.company.name}</p>
                            </div>
                        </div>`;

  return card;
};

export const renderAddNewCard = () => {
  const card: HTMLDivElement = document.createElement("div");
  card.className = "col-md-4 col-sm-6 content-card";
  card.innerHTML = `<div class="card border border-primary border-4 p-4 card-just-text d-flex justify-content-center align-items-center" 
                           data-background="color" 
                           data-color="blue" 
                           data-radius="none"
                           data-bs-toggle="modal" 
                           data-bs-target="#modalId"
                          >
                            <div class="content">
                                <h4 class="title text-primary">
                                  Add new note
                                </h4>
                            </div>
                        </div>`;

  return card;
};
