var users;
users = [];
var user1;
user1 = { Id: 100, Name: "Salman" };
var user2;
user2 = { Id: 101, Name: "Farshe" };
var user3;
user3 = { Id: 102, Name: "Zihad" };
var user4;
user4 = { Id: 103, Name: "Less Important" };
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
console.log(users[0]["Name"] +
    " " +
    users[1]["Name"] +
    " " +
    users[2]["Name"] +
    " " +
    users[3]["Name"]);
var useAccount;
useAccount = "Active";
useAccount = "Deactive";
function userInfo(ActiveStatus) {
    console.log(ActiveStatus);
}
userInfo("Active");
userInfo("Deactive");
