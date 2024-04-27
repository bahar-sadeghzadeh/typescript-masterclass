"use strict";
// sets
const names1 = new Set();
names1.add("John");
names1.add("Jane");
names1.add("Bahar");
names1.add("John");
names1.add("Mario");
console.log(names1);
const user20 = { email: "3Tb4P@example.com", score: 40 };
const user21 = { email: "3Tb4P@example.com", score: 40 };
const users20 = new Set();
users20.add(user20);
users20.add(user21);
users20.add(user21);
console.log(users20);
//sets as function arguments
function logUserEmails(users) {
    users.forEach((user) => console.log(user.email));
}
logUserEmails(users20);
