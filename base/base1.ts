/**
 * 第一个ts
 * @param person 
 */
function greeter(person:string){

    return 'Hello,'+person;
}
let user = 'jing';
document.body.innerHTML = greeter(user)

/**
 * boolean 定义布尔值类型
 */

let isDone : boolean = false;
/**
 * new Boolean()返回的是一个Boolean对象
 */
let createBoolean :Boolean = new Boolean(1)

/**
 * 直接调用 Boolean 也可以返回一个 boolean 类型：
 */
let createdByBoolean: boolean = Boolean(1);

/**
 * 使用number定义数值类型
 */
let nums:number = 8;
// es6中二进制表示法
let binyNmums:number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

/**
 * 使用string定义字符串类型
 */
let myName:string = 'jing';
let myAge:number = 18;
//模板字符串
let content:string = `Hello,my name is ${myName},I will be ${myAge+1} years old`;

/**
 * 使用void表示没有返回值的函数
 */
function alertName():void{
    alert('my name is jing');
}
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;

/**
 * 使用 null 和 undefined 来定义这两个原始数据类型
 */
let u:undefined = undefined;
let n:null = null;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。
//也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let u2: undefined;
let num2: number = u2;

//而 void 类型的变量不能赋值给 number 类型的变量：
// let u3: void;
// let num3: number = u3;
// Type 'void' is not assignable to type 'number'.

