/**
 * 任意值（Any）用来表示允许赋值为任意类型。
 */
//如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// let myFavNum:string = 'six';
// myFavNum = 7 //Type '7' is not assignable to type 'string'.

//如果是 any 类型，则允许被赋值为任意类型
let myFavNum:any = 'six';
myFavNum = 7

//任意值的属性和方法
//在任意值上访问任何属性都是允许的：
let anyThing1: any = 'hello';
console.log(anyThing1.myName);
console.log(anyThing1.myName.firstName);
//也允许调用任何方法：

let anyThing2: any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');

//未声明类型的变量
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型