"use strict";
class MenueItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
class Pizza extends MenueItem {
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
    format() {
        let formatted = this.details + `\n`;
        //base
        formatted += `Pizza on a ${this.base} base`;
        //toppings
        if (this.toppings.length < 1) {
            formatted += " with no toppings";
        }
        if (this.toppings.length > 0) {
            formatted += ` with ${this.toppings.join(", ")}`;
        }
        return formatted;
    }
}
const pizza = new Pizza("mario special", 15);
const pizzaTwo = new Pizza("Bahar special", 20);
pizza.selectBase("garlic");
pizza.addTopping("peperoni");
pizza.addTopping("mushrooms");
console.log(pizza);
function addMushroomsToPizza(pizzas) {
    for (const p of pizzas) {
        p.addTopping("olives");
    }
}
addMushroomsToPizza([pizza, pizzaTwo]);
console.log(pizza, pizzaTwo);
function printMenueItem(item) {
    console.log(item.details);
}
printMenueItem(pizza);
printMenueItem(pizzaTwo);
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizza);
