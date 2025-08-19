// 1
let animal:String[], human:{name:String,age:Number,height:Number,married:boolean};
animal = ['panda','cat','wombat','frog','hamster'];
human = {name : 'mkm', age : 25, height: 180.5, married : false};

// 2
let zoo:any;
zoo = {
    animals : ['panda','cat','wombat','frog','hamster'],
    total   : 120,
    isClosed : false,
    location : "용인",
    masterInfo : {
        name : 'mkm',
        age : 25,
        height : 180.5
    }
};

// 3
let response: readonly [number,String];

// 4
let array:(number|String|boolean|undefined|{name:string})[];
// let array:(number|String|boolean|any);
array = [12345, 'mkm', true, undefined]; // ok
array = ['mkm' , 12345, true]; // ok
array.push({name : 'mkm'}); // ok


// 5
let favorite:'치킨'|'햄버거' = '치킨';   // ok
// favorite = '햄버거';     // ok 
// favorite = '피자';       // x
// favorite = '짜장면';     // x

// 6
// Q1. test1 변수에는
//    undefined를 넣어도 문제가 없습니다.
//    '1234'를  넣어도 문제가 없습니다.
//    1234를 넣으면 컴파일 에러가 발생합니다.
//    true를 넣으면 컴파일 에러가 발생합니다.
//    test1의 타입은 ?
let test1: string|undefined  = undefined; // ok
// test1 = '1234'; // ok
// test1 = 1234; // compile error
// test1 = true; //compile error

//Q2. test2 변수에는 모든 값을 담을 수 있습니다.
//    true, 1234, undefined등을 넣어도 문제가 없습니다.
//    test1에 test2를 담을 수 있습니다.
//    test2는 UnionType이 아닙니다.
//    test2의 타입은?
let test2 :any = true; //ok
test2 = 1234;// ok
test1 = test2; // ok

//Q3. test3 변수에는모든 값을 담을 수 있습니다.
//    test1에 test3를 담으면 컴파일 에러가 발생합니다.
//    test3은 UnionType이 아닙니다.
//    test3의 타입은?
let test3 : unknown = undefined; // ok
test3 = 1234; // ok
test3 = true; // ok
// test1 = test3; // compile error