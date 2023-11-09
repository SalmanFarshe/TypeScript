let obj: Object;
obj = {};
console.log(typeof obj);

let users: Object[];
users = [];

let user1: { Id: number; Name: String };
user1 = { Id: 100, Name: "Salman" };
let user2: { Id: number; Name: String };
user2 = { Id: 101, Name: "Farshe" };
let user3: { Id: number; Name: String };
user3 = { Id: 102, Name: "Zihad" };
users.push(user1);
users.push(user2);
users.push(user3);
console.log(users[0]["Name"] + " " + users[1]["Name"] + " " + users[2]["Name"]);

