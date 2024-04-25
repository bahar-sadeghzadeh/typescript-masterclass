// classes
type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

abstract class MenueItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }

  abstract format(): string;
  //   {
  //     return `This menue item is called ${this.title} and is $${this.price}`;
  //   }
}

class Pizza extends MenueItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }

  format(): string {
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

const pizza: Pizza = new Pizza("mario special", 15);
const pizzaTwo: Pizza = new Pizza("Bahar special", 20);
pizza.selectBase("garlic");
pizza.addTopping("peperoni");
pizza.addTopping("mushrooms");

console.log(pizza);

function addMushroomsToPizza(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping("olives");
  }
}

addMushroomsToPizza([pizza, pizzaTwo]);
console.log(pizza, pizzaTwo);

function printMenueItem(item: MenueItem): void {
  console.log(item.details);
}

printMenueItem(pizza);
printMenueItem(pizzaTwo);

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

printFormatted(pizza);
