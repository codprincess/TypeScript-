/**
 * 使用接口（Interfaces）来定义对象的类型
 */
//在面向对象语言中，接口（Interfaces）是一个很重要的概念，
//它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
//赋值的时候，变量的形状必须和接口的形状保持一致
interface Person{
    name:string;
    age:number
}
let tom:Person = {
    name:'Tom',
    age:24
}

//可选属性
interface Person2{
    name:string;
    age?:number;
}
let tom2:Person2 = {
    name:'jing'
}
let tom3:Person2 = {
    name:'jing',
    age:19
}

