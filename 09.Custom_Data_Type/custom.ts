type customType = { Id: number; Name: String };
let users: customType[];
users = [];
let user1: customType;
user1 = { Id: 100, Name: "Salman" };
let user2: customType;
user2 = { Id: 101, Name: "Farshe" };
let user3: customType;
user3 = { Id: 102, Name: "Zihad" };
let user4: customType;
user4 = { Id: 103, Name: "Less Important" };
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
console.log(
  users[0]["Name"] +
    " " +
    users[1]["Name"] +
    " " +
    users[2]["Name"] +
    " " +
    users[3]["Name"]
);
// another one
type accountStatus = "Active" | "Deactive";
let useAccount: accountStatus;
useAccount = "Active";
useAccount = "Deactive";

function userInfo(ActiveStatus: accountStatus) {
  console.log(ActiveStatus);
}
userInfo("Active");
userInfo("Deactive");
