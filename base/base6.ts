/**
 * 数组的类型
 */
//在 TypeScript 中，数组类型有多种定义方式，比较灵活
let myArray:number[] = [1,2,3,4];
//数组的项中不允许出现其他类型
//let myArray2:number[] = [1,2,'3'];
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
let myArray3:number[] = [1,2,3,4,5];
myArray3.push(6);
//myArray3.push('8');