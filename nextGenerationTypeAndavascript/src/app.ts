const userName = 'Max';
let age=30;
age=20;

/*
function add(a:number, b:number){
    let result;
    result= a+b;
    return result;
}

*/
/*
//arrow function
//default function parameter
const add = (a:number, b:number=1 ) => a+b;
//const printOutput = (output: string | number) => console.log(output);

const printOutput : (a:number | string) => void = output => console.log(output);

printOutput(add(5,7));
printOutput(add(5));

const button= document.querySelector('button');

if(button){
    button.addEventListener('click', event =>{
        console.log(event);

    })
}
*/
//array

const hobbies = ['sports', 'cooking'];
console.log(hobbies)

const activeHobbies=['hiking'];
//spread operator
//add all element of the array 
activeHobbies.push(...hobbies);
//or const activeHobbies=['hiking', ...hobbies];
console.log(activeHobbies)

const person ={
    name1: 'Max',
    age1: 30
};

const copiedPerson = {...person};

console.log(copiedPerson)


//rest parameters sintax ...
// all paramets or list, go to array numbers
const add =(...numers: number[]):any =>{
    //reduce = loop through array numbers
   return numers.reduce((curResult:any, curValue:any)=>{
        return curResult+curValue;
    },0);

};

const addedNumbers = add(5,6,7,3.7);
console.log(addedNumbers)

//Array Object Destructuring

//go through hobbies array and copied to hobbies1 and hobbies2, and the remaining go to remainingHobbies
const [hobby1, hobby2, ...remainingHobbies]= activeHobbies;

console.log(" Destructuring")
console.log(hobby1)
console.log(hobby2)
console.log(remainingHobbies)

//to objects

const {name1: newName, age1} = person;

console.log(newName, age1, person)