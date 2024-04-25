"use strict";
let age = 40;
console.log(age);
// arrays
let names = ["John", "Jane"];
let ages = [10, 20];
names.push("Bahar");
ages.push(20);
// type inference with arrays
let fruits = ["apple", "banana"];
const f = fruits[0];
let things = [1, true, "hello"];
const t = things[0];
// object literals
let user = {
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
function add(a, b) {
    return a + b;
}
const substract = (a, b) => a - b;
function addAll(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAll([1, 2, 3, 4, 5]);
// type inference with functions
function formatGreeting(name, greeting) {
    return `${greeting} ${name}`;
}
const result = formatGreeting("John", "Hi");
// any type
let age2;
let title;
age2 = 40;
age2 = "hello";
title = 25;
title = { name: "John" };
// any type in arrays
let things2 = ["hello", true, 30, null];
things2.push({ id: 123 });
// functions and any
function addTogether(value) {
    return value + value;
}
const result1 = addTogether(2);
const result2 = addTogether("Hello");
// tuples
let personTuple = ["John", 40, true];
let hsla;
hsla = [200, "100%", "50%", 1];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// named Tuples
let users;
users = ["John", 40];
console.log(users[0]);
const authors1 = {
    name: "John",
    avatar: "https://example.com/avatar.jpg",
};
const newPost = {
    title: "Hello World",
    body: "This is my first post",
    tags: ["hello", "world"],
    created_at: new Date(),
    author: authors1,
};
// interfaces as function argument types
function createPost(post) {
    console.log(post.title, post.author.name);
}
createPost(newPost);
// interfaces with arrays
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const user1 = {
    name: "John",
    score: 40,
};
function formatUser(user) {
    console.log(user.name, user.score);
}
formatUser(user1);
// union types
let someId;
someId = 123;
someId = "123";
let email = null;
email = "3Tb4P@example.com";
let anotherId;
anotherId = 123;
// type guards
function swapIdType(id) {
    if (typeof id === "string") {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use number methods
        return id.toString();
    }
}
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.username, value.email);
    }
    if (value.type === "person") {
        console.log(value.firstName, value.age);
    }
}
function add2(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function square(a) {
    return a * a;
}
function join(a, b) {
    return `${a}${b}`;
}
let calcs = [];
calcs.push(add2, multiply, square);
const shapeOne = {
    name: "square",
    calcArea(l) {
        return l * l;
    },
};
const user3 = {
    id: 1,
    format() {
        return `hello ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 40,
    server: "John",
    format() {
        return `hello ${this.id} ${this.amount} ${this.server}`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log("server:", bill.server);
    console.log("server:", bill.format());
}
printFormatted(user3);
printFormatted(bill);
// printBill(user3);
printBill(bill);
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
function printUser(user) {
    console.log(user.id, user.firstName, user.email);
}
// printUser(personneOne);
printUser(personTwo);
// printUser(personThree);
printUser(personFour);
