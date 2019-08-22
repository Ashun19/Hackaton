// function home (num, num2, num3){
// 	return num*num2-num3;
// }
// const answer =home(7,2,4);
// document.write(answer);


// function myWord(){
// 	document.write(`Hello, Gooogle how are you?`);
// }
// myWord();



// // || (OR)
// // && (AND)
// // ! (NOT)

// var a = 3;
// var b = -2;

// console.log(a > 0 && b > 0);

// console.log(a > 0 || b > 0);

// console.log(!(a > 0 || b > 0));


// function life (num, num2, num3){
// 	return num*num2-num3;
// }
// let clue =life(17,2,5);
// console.log(clue);

// function life (num, num2, num3){
// 	return num/num2-num3;
// }
// let love =life(20,2,5);
// console.log(love);


// function myLove(){
// 	document.write(`You're the love of my heart. believe that and let's make this happen`);
// }
// myLove();

// // Anonymous functions - functions without names
// const afia = function(){
//  console.log(`Hi Afia, was your weekend been?`);
// }
// afia();

// const munira = function(x,v,y) {
// 	return [x%v,y];
// }

// console.log(munira(3,2,90));


const kill = {
	name: 'Linda',
	age: 23,
	address: 'F 34',
	occupation: 'Lover'
}
const getResult = kill.name;
const getResult2 = kill.age;

document.write(getResult);
document.write(getResult2);

const myObject = {
	name: 'Wey',
	age: 25,
	talk(){
		return `my name is ${myObject.name} and I will be ${myObject.age} years old.`
	}
}
console.log(myObject.talk());

const result =myObject.talk();
console.log(result);

const person = {
	firstName: 'Lina',
	middleName: 'Adjoa',
	lastName: 'sisi',
	otherDetails: [`Tema`, `F 34`, `0543073465`]
};

const check = 'Linda' in person
const persons = person.firstName;
const inspect = person.hasOwnProperty(`Linda`)
const inspect2 = person.hasOwnProperty(`middleName`);

console.log(person);
console.log(check);
console.log(inspect);
console.log(inspect2);

//Accessing only keys of object
function access(){
	for(const key of Object.keys(person)){
		console.log(key);
	}
}

access();

//Accessing only the values of the object

function access2(){
	for(const value of Object.values(person)){
		console.log(value);
	}
}

access2();

//Accessing both key and value

function myKeyValues(){
	for(const [key,value] of Object.entries(person)){
		console.log(`${key}: ${value}`);
	}
}

myKeyValues();