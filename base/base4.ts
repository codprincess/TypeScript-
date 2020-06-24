/**
 * 联合类型
 */
let myFavoriteNumber4: string | number;
myFavoriteNumber4 = 'seven';
myFavoriteNumber4 = 7;
// myFavoriteNumber4 = true  boolean

//访问联合类型的属性或方法
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
//我们只能访问此联合类型的所有类型里共有的属性或方法：
// function getLength(something:string|number):number{
//    // return something.length;
//      //Property 'length' does not exist on type 'string | number'.
//      // Property 'length' does not exist on type 'number'.
//      //上例中，length 不是 string 和 number 的共有属性，所以会报错
// }

//访问 string 和 number 的共有属性是没问题的：
function getString(something: string | number): string {
    return something.toString();
}

//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber5: string | number;
myFavoriteNumber5 = 'seven';
console.log(myFavoriteNumber5.length); // 5
myFavoriteNumber5 = 7;
//console.log(myFavoriteNumber5.length); // 编译时报错