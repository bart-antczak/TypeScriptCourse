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

enum Role { ADMIN, READ_ONLY, AUTHOR} // labels to numbers

const person = {
    name: 'Bart',
    age: 26,
    hobbies: ['Sailing', 'Webdev'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

console.log(person.name + ' ' + person.age);
console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())
}

