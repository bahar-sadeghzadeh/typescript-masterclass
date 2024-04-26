// Generics

function logAndReturnValue<T>(value: T): T {
  console.log(value);
  return value;
}

const resultOne = logAndReturnValue<string>("bahar");
const resultTwo = logAndReturnValue<number>(10);

//

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);
  return values[i];
}

interface User12 {
  name: string;
  score: number;
}

const users12: User12[] = [
  { name: "John", score: 40 },
  { name: "Jane", score: 20 },
  { name: "Bahar", score: 10 },
  { name: "Mario", score: 50 },
];

const randomUser = getRandomArrayValue<User12>(users12);
const randomUser2 = getRandomArrayValue<User12>(users12);
const randomUser3 = getRandomArrayValue<User12>(users12);
console.log(randomUser);
console.log(randomUser2);
console.log(randomUser3);

// Intersection Types
// type Person12 = {
//   name: string;
//   id: number;
// };

// type User13 = Person12 & {
//   email: string;
// };

interface HasId {
  id: number;
}

function addIdToValue<T>(value: T): T & HasId {
  const id = Math.random();
  return { ...value, id };
}

interface PostNew {
  title: string;
  thumbsUp: number;
}

const post = addIdToValue<PostNew>({ title: "hello", thumbsUp: 10 });
console.log(post);

// Generics with interfaces
interface Collection<T> {
  data: T[];
  name: string;
}

const collection1: Collection<string> = {
  data: ["hello", "world"],
  name: "names",
};

const collection2: Collection<number> = {
  data: [1, 2, 3],
  name: "numbers",
};

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);
  return c.data[i];
}

const resultThree = randomCollectionItem<string>(collection1);
console.log(resultThree);

const resultFour = randomCollectionItem(collection2);
console.log(resultFour);

//// Generic classes

interface HasId2 {
  id: number;
}

class DataCollection<T extends HasId2> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }

  loadAll(): T[] {
    return this.data;
  }

  add(value: T): T[] {
    this.data.push(value);
    return this.data;
  }

  // Generic Constraints
  deleteOne(id: number): void {
    this.data = this.data.filter((d) => d.id !== id);
  }
}

interface User15 {
  name: string;
  score: number;
  id: number;
}

const users11 = new DataCollection<User15>([
  { name: "John", score: 40, id: 1 },
  { name: "Jane", score: 20, id: 2 },
  { name: "Bahar", score: 10, id: 3 },
]);
console.log(users11.loadOne());
console.log(users11.loadAll());
users11.deleteOne(3);
console.log(users11.add({ name: "bb", score: 40, id: 4 }));
