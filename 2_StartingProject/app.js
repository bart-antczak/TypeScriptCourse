// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Bart',
//     age: 26,
//     hobbies: ['Sailing', 'Webdev'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // labels to numbers
var person = {
    name: 'Bart',
    age: 26,
    hobbies: ['Sailing', 'Webdev'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
console.log(person.name + ' ' + person.age);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
