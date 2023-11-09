class user {
  userName: string;
  userAge: number;
  constructor(name: string, age: number) {
    this.userName = name;
    this.userAge = age;
  }
  display(): void {
    console.log(`User: ${this.userName} Age: ${this.userAge}`);
  }
}
let user1 = new user("Salman", 21);
let user2 = new user("Farshe", 40);
let user3 = new user("Zihad", 17);
class student extends user {
    studentId: number;
    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId;
        this.studentId = studentId;
    }
    display(): void {
        console.log(
            `User: ${this.userName} Age: ${this.userAge} Id: ${this.studentId}`
    );
}
}
let student1 = new student("Zihad", 17, 222400010);
user1.display();
user2.display();
user3.display();
student1.display()
