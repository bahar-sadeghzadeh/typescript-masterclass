let age = 40;

console.log(age);

// arrays
let names: string[] = ["John", "Jane"];
let ages: number[] = [10, 20];

names.push("Bahar");
ages.push(20);

// type inference with arrays
let fruits = ["apple", "banana"];

const f = fruits[0];

let things = [1, true, "hello"];
const t = things[0];

// object literals

let user: {
  firstName: string;
  age: number;
  id: number;
} = {
  firstName: "John",
  age: 40,
  id: 1,
};

// type inference with object literals

let person = {
  name: "John",
  age: 40,
};

// functions
function add(a: number, b: number): number {
  return a + b;
}

const substract = (a: number, b: number): number => a - b;

function addAll(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAll([1, 2, 3, 4, 5]);

// type inference with functions

function formatGreeting(name: string, greeting: string) {
  return `${greeting} ${name}`;
}

const result = formatGreeting("John", "Hi");

// any type
let age2: any;
let title;

age2 = 40;
age2 = "hello";

title = 25;
title = { name: "John" };

// any type in arrays
let things2: any[] = ["hello", true, 30, null];

things2.push({ id: 123 });

// functions and any

function addTogether(value: any): any {
  return value + value;
}

const result1 = addTogether(2);
const result2 = addTogether("Hello");

// tuples
let personTuple: [string, number, boolean] = ["John", 40, true];

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

function useCoords(): [number, number] {
  // get coords

  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoords();

// named Tuples

let users: [name: string, age: number];

users = ["John", 40];
console.log(users[0]);

// interfaces
interface Author {
  name: string;
  avatar: string;
}

const authors1: Author = {
  name: "John",
  avatar: "https://example.com/avatar.jpg",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "Hello World",
  body: "This is my first post",
  tags: ["hello", "world"],
  created_at: new Date(),
  author: authors1,
};

// interfaces as function argument types
function createPost(post: Post): void {
  console.log(post.title, post.author.name);
}

createPost(newPost);

// interfaces with arrays

let posts: Post[] = [];
posts.push(newPost);

// type aliases
// tuples
type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

// object literals
type User = {
  name: string;
  score: number;
};

const user1: User = {
  name: "John",
  score: 40,
};

function formatUser(user: User): void {
  console.log(user.name, user.score);
}

formatUser(user1);

// union types
let someId: string | number;
someId = 123;
someId = "123";

let email: string | null = null;
email = "3Tb4P@example.com";

type Id = number | string;
let anotherId: Id;
anotherId = 123;

// type guards
function swapIdType(id: Id) {
  if (typeof id === "string") {
    // can use string methods
    return parseInt(id);
  } else {
    // can use number methods
    return id.toString();
  }
}

// tagged interfaces
interface User1 {
  type: "user";
  username: string;
  email: string;
  id: Id;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: Id;
}

function logDetails(value: User1 | Person): void {
  if (value.type === "user") {
    console.log(value.username, value.email);
  }
  if (value.type === "person") {
    console.log(value.firstName, value.age);
  }
}

// reusable interfaces

// function signatures
type Calculator = (numberOne: number, numberTwo: number) => number;

function add2(a: number, b: number) {
  return a + b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function square(a: number) {
  return a * a;
}

function join(a: number, b: number) {
  return `${a}${b}`;
}

let calcs: Calculator[] = [];
calcs.push(add2, multiply, square);
// calcs.push(join);

// function signature on interfaces
interface HasArea {
  name: string;
  calcArea: (a: number) => number;
}

const shapeOne: HasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};

// extending interfaces
interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const user3 = {
  id: 1,
  format(): string {
    return `hello ${this.id}`;
  },
};

const bill = {
  id: 2,
  amount: 40,
  server: "John",
  format(): string {
    return `hello ${this.id} ${this.amount} ${this.server}`;
  },
};

function printFormatted1(val: HasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log("server:", bill.server);
  console.log("server:", bill.format());
}

printFormatted1(user3);
printFormatted1(bill);
// printBill(user3);
printBill(bill);

// extending type aliases
type Person2 = {
  id: string | number;
  firstName: string;
};

type User4 = Person2 & {
  email: string;
};

const personeOne = {
  id: 1,
  firstName: "John",
};

const personTwo = {
  id: 2,
  firstName: "Jane",
  email: "3Tb4P@example.com",
};

const personThree = {
  email: "3Tb4P@example.com",
};

const personFour = {
  id: 2,
  firstName: "Jane",
  email: "3Tb4P@example.com",
  phone: "555-555-5555",
};

function printUser(user: User4) {
  console.log(user.id, user.firstName, user.email);
}

// printUser(personneOne);
printUser(personTwo);
// printUser(personThree);
printUser(personFour);
