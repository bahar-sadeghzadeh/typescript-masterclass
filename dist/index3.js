"use strict";
// Generics
function logAndReturnValue(value) {
    console.log(value);
    return value;
}
const resultOne = logAndReturnValue("bahar");
const resultTwo = logAndReturnValue(10);
//
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users12 = [
    { name: "John", score: 40 },
    { name: "Jane", score: 20 },
    { name: "Bahar", score: 10 },
    { name: "Mario", score: 50 },
];
const randomUser = getRandomArrayValue(users12);
const randomUser2 = getRandomArrayValue(users12);
const randomUser3 = getRandomArrayValue(users12);
console.log(randomUser);
console.log(randomUser2);
console.log(randomUser3);
function addIdToValue(value) {
    const id = Math.random();
    return Object.assign(Object.assign({}, value), { id });
}
const post = addIdToValue({ title: "hello", thumbsUp: 10 });
console.log(post);
const collection1 = {
    data: ["hello", "world"],
    name: "names",
};
const collection2 = {
    data: [1, 2, 3],
    name: "numbers",
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultThree = randomCollectionItem(collection1);
console.log(resultThree);
const resultFour = randomCollectionItem(collection2);
console.log(resultFour);
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(value) {
        this.data.push(value);
        return this.data;
    }
    // Generic Constraints
    deleteOne(id) {
        this.data = this.data.filter((d) => d.id !== id);
    }
}
const users11 = new DataCollection([
    { name: "John", score: 40, id: 1 },
    { name: "Jane", score: 20, id: 2 },
    { name: "Bahar", score: 10, id: 3 },
]);
console.log(users11.loadOne());
console.log(users11.loadAll());
users11.deleteOne(3);
console.log(users11.add({ name: "bb", score: 40, id: 4 }));
