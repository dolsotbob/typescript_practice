
interface Person {
    name: string;
    age: number;
    }

interface Developer extends Person {
    language: string;
}

const person: Developer = {
    language: "TypeScript",
    age: 20,
    name: "Anna",
}

// console.log(person);

interface FoodStuff {
    name: string;
}

interface FoodAmount {
    amount: number;
}

interface FoodFreshness extends FoodStuff, FoodAmount {
    isFreshed: boolean;
}

const food = {} as FoodFreshness;

food.name = "egg";
food.amount = 2;
food.isFreshed = true;

// console.log(food.name);
// console.log(food.amount);
// console.log(food.isFreshed);

type MyString = string; 
let str1: string = 'hello!';
let str2: MyString = 'hello world!'

// console.log(str2);

type Person2 = {
    id: number;
    name: string;
    email: string;
  }

interface Commentary {
    id: number;
    content: string; 
    user: Person2;
}

let comment1: Commentary = {
    id: 1,
    content: "뭐에요?",
    user: {
        id: 1, 
        name: "Alice", 
        email: "Alice@rocketboost.com",
    },
}

// console.log(comment1);

// let alice: Commentary = {
//     id: 1,
//     user: {
//         id: 1,
//         name: "Alice",
//         email: "Alice@roketboost.com",
//     },
// };

// console.log(alice);

// let alice: Commentary = {
//     id: 1,
//     content: "뭐예요?",
//     user: {
//         id: 1,
//         name: "Alice",
//         email: "Alice@roketboost.com",
//         isDeveloper: true,
//     },
// };

// console.log(alice);


type Person5 = {
    name: string;
    age: number;
}

interface User {
    name: string;
    age: number;
}

let aliceKim: Person5 = {
    name: 'Alice',
    age: 30,
}

let alice: User = {
    name: 'Alice',
    age: 30,
}

// console.log(aliceKim);
// console.log(alice);


interface Person7 {
    name: string;
}

interface Employee2 extends Person7 {
    company: string;
}

const emp: Employee2 = { name: "Alice", company: "Google" };

type Person7Type = { name: string };
type EmployeeType = Person7Type & { company: string };

const emp2: EmployeeType = { name: "Bob", company: "Amazon" };

// console.log(emp);
// console.log(emp2);

let isNumber = 123; 
// console.log(isNumber);

let x = [0, 1, null];
// console.log(x);

class PersonA {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet2(): void {
      console.log(`안녕하세요, 제 이름은 ${this.name}이고, ${this.age}살 입니다.`);
    }
  }

// const persona = new PersonA('Alice', 30);
// persona.greet2(); 


class Animal {
    move(distanceInMeters: number): void {
        console.log(`${distanceInMeters}m 이동했습니다.`);
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("멍멍!");
    }
}

const dog = new Dog();
// dog.move(10);
// dog.speak();

class PersonB {
    public name: string;
    private age3: number;
  
    constructor(name: string, age3: number) {
      this.name = name;
      this.age3 = age3;
    }
  
    greet(): void {
      console.log(`안녕하세요, 제 이름은 ${this.name}이고, ${this.age3}살 입니다.`);
    }
  }

// const personb = new PersonB("Alice", 5); 
// console.log(personb);
// personb.greet();

class Mydog {
    readonly name8: string;
    constructor(theName: string) {
        this.name8 = theName;
    }
}
let spooky = new Mydog("스푸키");

// console.log(spooky);

function printLog(text: string): string {
	return text;
}

function printLogNumber(text: number): number {
	return text;
}

printLog('hello'); 
printLogNumber(123); 


function printLog2(text: string | number) { 
    return text;
}

printLog2('hello');
printLogNumber(123);

// console.log(printLog2('hello'));
// console.log(printLogNumber(123));


function printLog3(text: any): any { 
    return text;
}

// console.log(printLog3(123));

function printLog4<T>(text: T): T { 
    return text;
}

const str = printLog4<string>('hello');
// console.log(printLog4('hello'));


interface Item<T> {
    name: T; 
    stock: number;
    selected: boolean;
}

const obj2: Item<string> = { 
	name: "T-shirts",
	stock: 2, 
	selected: false
};

const obj3: Item<number> = { 
	name: 2044512,
	stock: 2, 
	selected: false
};

// console.log(obj2);
// console.log(obj3);



