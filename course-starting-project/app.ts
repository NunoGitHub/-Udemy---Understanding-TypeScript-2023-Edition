/*const person : {
    name:string;
    age:number;
    hobbies: string[];
    role: [number, string];//tupple
}= {
  name: "Meximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role:[2, 'author']
};*/
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person ={
  name: "Meximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

let favoriteActivities: any[];
console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

if(person.role === Role.AUTHOR){
    console.log('is author');
}