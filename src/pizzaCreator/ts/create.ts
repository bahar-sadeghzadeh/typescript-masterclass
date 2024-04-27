import { PizzaProps, pizza } from "./models/pizza";

const form = document.querySelector(".create") as HTMLFormElement;
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const newPizza: PizzaProps = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    toppings: data.getAll("toppings") as string[],
    price: parseInt(data.get("price") as string),
  };

  const response = await pizza.save(newPizza);

  if (!response.ok) {
    console.log("Not able to save the pizza");
  }
  if (response.ok) {
    window.location.href = "/";
  }
});
