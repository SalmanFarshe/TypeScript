var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    user.prototype.display = function () {
        console.log("User: ".concat(this.userName, " Age: ").concat(this.userAge));
    };
    return user;
}());
var user1 = new user("Salman", 21);
var user2 = new user("Farshe", 40);
var user3 = new user("Zihad", 17);
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId;
        _this.studentId = studentId;
        return _this;
    }
    student.prototype.display = function () {
        console.log("User: ".concat(this.userName, " Age: ").concat(this.userAge, " Id: ").concat(this.studentId));
    };
    return student;
}(user));
var student1 = new student("Zihad", 17, 222400010);
user1.display();
user2.display();
user3.display();
student1.display();
