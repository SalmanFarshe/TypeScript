let userid: string | number;
userid = "101";
userid = 111;
console.log(userid);

function display(name: number | string | boolean): void {
    console.log(name);
}

display("salman");
display(111);
display(true);
