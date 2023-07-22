let sales: number = 123_456_789;
let course: string = 'typescript';
let is_published:  boolean = true;

let num: number[] = [1,2,3,4];

let user: [number, string] = [1, 'Akarsh'];

enum SIZE {
    SMALL = 1,
    MEDIUM,
    LARGE
}
let mySize: SIZE = SIZE.MEDIUM;


function calculateTax(income: number, taxYear: number = 2022): number {
    if (income < 50_000) return income* 1.2;

    return income * 1.3;
}


let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'akarsh', 
    retire: (date:Date) => {
        console.log(date)
    } 
};

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let newEmployee: Employee = {
    id: 1, 
    name: 'akarsh', 
    retire: (date:Date) => {
        console.log(date)
    } 
}

function kgToLbs(weight: number | string): number {
    if (typeof weight == 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}


type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;
 

let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
}
type Qualtity = 50 | 100;
let quantity:Qualtity  |  100 



function greet(name:string | null) {
    console.log(name.toLowerCase());
}
greet(null)


type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()};
}

let customner = getCustomer(0);
console.log(customner?.birthday)