
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


// const kill = {
// 	name: 'Linda',
// 	age: 23,
// 	address: 'F 34',
// 	occupation: 'Lover'
// }
// const getResult = kill.name;
// const getResult2 = kill.age;

// document.write(getResult);
// document.write(getResult2);

// const myObject = {
// 	name: 'Wey',
// 	age: 25,
// 	talk(){
// 		return `my name is ${myObject.name} and I will be ${myObject.age} years old.`
// 	}
// }
// console.log(myObject.talk());

// const result =myObject.talk();
// console.log(result);

// const person = {
// 	firstName: 'Lina',
// 	middleName: 'Adjoa',
// 	lastName: 'sisi',
// 	otherDetails: [`Tema`, `F 34`, `0543073465`]
// };

// const check = 'Linda' in person
// const persons = person.firstName;
// const inspect = person.hasOwnProperty(`Linda`)
// const inspect2 = person.hasOwnProperty(`middleName`);

// console.log(person);
// console.log(check);
// console.log(inspect);
// console.log(inspect2);

// //Accessing only keys of object
// function access(){
// 	for(const key of Object.keys(person)){
// 		console.log(key);
// 	}
// }

// access();

// //Accessing only the values of the object

// function access2(){
// 	for(const value of Object.values(person)){
// 		console.log(value);
// 	}
// }

// access2();

// //Accessing both key and value

// function myKeyValues(){
// 	for(const [key,value] of Object.entries(person)){
// 		console.log(`${key}: ${value}`);
// 	}
// }

// myKeyValues();

// const btn = document.getElementById('button');
// const rainbow = 
// ['red', 'orange', 'yellow', 'green','blue','pink','grey','indigo','blueblack', 'black'];

// function change(){
//  document.body.style.background =
//    rainbow[Math.floor(7*Math.random())];
// }
// btn.addEventListener('click',change);

// alert('Welcome to Quiz Ninja!'); 


// const love_js ={
// 	name: "Linda",
// 	age:28,
// 	Nicky: "sweet"
// };

// const love_json =`{
// 	"name": "Linda",
// 	"age":28,
// 	"Nicky": "sweet"
// }`;

// var Obj1= JSON.parse(love_json);
// console.log(Obj1);

// var Obj2= JSON.stringify(love_js);
// console.log(Obj2);


// var now =new Date(); //this is what changes the date on the browser
// document.write(now + '<br><br>');

// var special =new Date('6 Feb 1996');
// document.write(special + '<br><br>');

// const today =new Date()
// today.toString()
// console.log(today)

// const birthday =new Date('1996 02 06')
// birthday.toString()
// document.write(birthday)

// var remember =new Date()
// remember.getDay()
// console.log

function animatedForm(){
	const arrows = document.querySelectorAll(".fal fa-arrow-alt-down");
	arrows.forEach(arrow =>{
		arrow.addEventListener('click', () => {
			const input = arrow.previousElementSibling;
			const parent = arrow.parentElement;
			const nextForm = parent.nextElementSibling;

			// check for validation          

			if(input.type=== "text" && validateUser(input)) {
				nextSlide(parent,nextForm);
			}  else if (input.type==='email' && validateEmail(input)){
				nextSlide(parent,nextForm);
			}  else if(input.type==='password' && validateUser(input)){
				nextSlide(parent,nextForm);
			}  else{
				parent.style.animation = "shake 0.5s ease";
			}

		});
	});
}

function validateUser(user){
	if(user.value.length < 6){
		console.log('not enough characters');
		error("rgb(189,87,87");
	} else{
		error("rgb(87,189,130)");
		return true;
	}
}

function validateEmail(email){
	const validation =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (validation.test(email.value)) {
		error("rgb(189,87,87)");
		return true;
	} else{
		error("rgb(87,189,130)");

	}
}

function nextSlide(parent,nextForm){
	parent.classList.add('innactive');
	parent.classList.remove('active');
	nextForm.classList.add('active');
}


function error(color){
	document.body.style.backgroundColor
}





animatedForm();