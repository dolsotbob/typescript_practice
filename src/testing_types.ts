let isShow: boolean = true;
let isDone: boolean = false; 

// console.log(isShow);
// console.log(isDone);

let number1: number = 5;
let number2: number = 0.7;

// console.log(number1);
// console.log(number2);

let firstname: string = "alice";
let lastname: string = "kim";
let longString: string = `Kimalice is a developer.
He is 20 years old`

// console.log(firstname);
// console.log(lastname);
// console.log(longString);

let items: string[] = ["apple", "banana", "grape"];
let numberList: Array<number> = [4, 7, 100];
let evenNumbers: number[] = [2, 4, 6, 8];
let colors: Array<string> = ["red", "blue", "yellow"];

// console.log(items);
// console.log(numberList);
// console.log(evenNumbers);
// console.log(colors);

let user: [string, number, boolean] = ["Alice", 20, true];
// let user2: [number, boolean, string] = ["Bob", 22, false];

// console.log(user[2].toString());
// console.log(user2[0].toString());

let obj: object = {}
let user2: {name: string, age: number} = {
    name: "alice",
    age: 20
}

// console.log(obj);
// console.log(user2);

let maybe: any = 4;

// console.log(maybe.length);

let list: any[] = [1, true, "free"];
list[1] = 100;
list[0] ="hello";
list[2] = 3;
// console.log(list[1]);
// console.log(list[0]);
// console.log(list[2]);

function add(x: number, y: number):number {
    return x + y;
}

// console.log(add(3, 2));

let add2 = (x: number, y: number): number => {
    return x + y;
}

// console.log(add2(3, 2));

let printAnswer = (): void => {
    console.log("YES");
}

// printAnswer();

let greeting = (firstName: string, lastName: string): string => {
    return `hello, ${firstName} ${lastName}`;
}

greeting('Alice', 'Kim');

// console.log(greeting('Alice', 'Kim'));

let greeting2 = (firstName: string, lastName?: string): string => {
    return `hello, ${firstName} ${lastName}`;
}

// console.log(greeting2('Alice'));
// console.log(greeting2('Alice', 'Bob'));

function printValue(value: any): void {
    if (typeof value === "number") {
        console.log(`The value is a number: ${value}`);
    } else {
        console.log(`The value is a string: ${value}`);
    }
}

// printValue(10);
// printValue("hello");

function printValue2(value: number | string): void {
    if (typeof value === "number") {
        console.log(`The value is a number: ${value}`);
    } else {
        console.log(`The value is a string: ${value}`);
    }
}

// printValue2(10);
// printValue2("hello");

interface Developer {
    name: string;
    skill: string;
};

interface Person {
    name: string; 
    age: number; 
}

function askSomeone(someone: Developer | Person) {
    console.log(someone.name);
}

const dev: Developer = { name: "David", skill: "TypeScript"};
const person: Person = {name: "Grace", age: 20};

// askSomeone(dev);
// askSomeone(person);

interface Developer {
    name: string;
    skill: string;
  }
  
  interface Person {
    name: string;
    age: number;
  }

  function askSomeone2(someone: Developer & Person) {
    console.log(someone.name);
    console.log(someone.age);
    console.log(someone.skill);
}

// askSomeone2({name: "David", age: 65, skill: "TypeScript"});

interface Developer {
    name: string;
    skill: string;
};

interface Person {
    name: string; 
    age: number; 
}

function askSomeone3(someone: Developer | Person) {
    if ('skill' in someone) {
        console.log(someone.skill);
    }

    if ('age' in someone) {
        console.log(someone.age);
    }
}

// askSomeone({name: 'Alice', skill: '웹 개발'});
// askSomeone({name: 'Alice', age: 20});


interface Developer {
    name: string;
    skill: string;
};

interface Person {
    name: string; 
    age: number; 
}

function askSomeone4(someone: Developer & Person) {
    console.log(someone.age);
    console.log(someone.name);
    console.log(someone.skill);
}

// askSomeone4({name: 'Alice', skill: '웹 개발', age: 20});

enum Color {
    Red, 
    Green, 
    Blue, 
}

// console.log(Color);

enum Color2 {
    Red = 1, 
    Green = 2, 
    Blue = 4, 
}

// console.log(Color2);

enum Color3 {
    Red = 1, 
    Green = 2, 
    Blue = 4, 
}

let c: Color3 = Color3.Green;
let greenValue: number = Color3.Green;
let blueValue:number = Color3.Blue;

// console.log(c);
// console.log(greenValue);
// console.log(blueValue);

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let myDirection: Direction = Direction.Up;
let myDirection2: Direction = Direction.Right;

// console.log(myDirection);
// console.log(myDirection2);

enum HttpMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
}

function makeRequest(url: string, method: HttpMethod) {
}

makeRequest("/api/data", HttpMethod.Post);

//

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a];

// console.log(Enum[a]);

enum Enum {
    Vege = 5
}
let cucumber = Enum.Vege;
let nameOfVege = Enum[cucumber];

// console.log(Enum[cucumber]);

interface User {
    name: string;
    age: number;
}

const user3: User = {
    name: "anna", 
    age: 20
}

// console.log(user3)

interface Student {
	name: string;
	age: number;
	job: string;
}

interface Greeting {
	(student: Student, greeting: string): string;
}

const greet: Greeting = (student, greeting) => {
	return `${greeting}, ${student.name}! Your job : ${student.job}.`;
}

const student: Student = {
	name: "anna",
	age: 30,
	job: "developer"
};

const message = greet(student, "Hi");

// console.log(message);


interface Calculator {
    add(x: number, y: number): number;
    substract(x: number, y: number): number;
}

class SimpleCalculator implements Calculator {
    add(x: number, y: number) {
        return x + y;
    }

    substract(x: number, y: number) {
        return x - y;
    }
}

const calculator = new SimpleCalculator();

// console.log(calculator.add(4, 9));
// console.log(calculator.substract(10, 5));


