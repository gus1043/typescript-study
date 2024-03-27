"use strict";
// const Admin = 0;
// const Read_Only = 1;
// const Author = 2;
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_Only"] = 1] = "Read_Only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
const person = {
    name: "hi",
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: Role.Admin,
};
// person.role = [0, "hi"];
// person.role.push("admin");
//person.role[1]=10;
console.log(person.role);
let favoratieActivities;
favoratieActivities = ["Sports", 1];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.Admin) {
    console.log("is Admin");
}
