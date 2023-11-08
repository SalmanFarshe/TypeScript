// string array
let myName: string[];
myName = ["Salman", "Farshe", "Zihad"];
myName.forEach((element) => {
  console.log(element);
});
myName.sort();
console.log(myName);

// union array
let myInfo: (string | number | boolean)[];
myInfo = [22, "Salman Farshe", "Eastern University", 1341];
myInfo.forEach((index) => {
  console.log(index);
});
