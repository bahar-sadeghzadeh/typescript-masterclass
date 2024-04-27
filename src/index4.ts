// sets
const names1 = new Set<string>();

names1.add("John");
names1.add("Jane");
names1.add("Bahar");
names1.add("John");
names1.add("Mario");

console.log(names1);

// sets with custom types
interface User20 {
  email: string;
  score: number;
}

const user20: User20 = { email: "3Tb4P@example.com", score: 40 };
const user21: User20 = { email: "3Tb4P@example.com", score: 40 };

const users20 = new Set<User20>();
users20.add(user20);
users20.add(user21);
users20.add(user21);

console.log(users20);

//sets as function arguments
function logUserEmails(users: Set<User20>) {
  users.forEach((user) => console.log(user.email));
}

logUserEmails(users20);

// enums

enum Priority {
  Lowest = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  Highest = 4,
}

function addTickets(details: string, priority: Priority) {}
