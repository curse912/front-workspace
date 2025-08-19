// 1 (*)
const obj = {
    name: "홍길동",
    normalFn: function() {
        console.log("일반 함수:", this.name);   //obj가 this로 바인딩
    },
    arrowFn: () => {
        console.log("화살표 함수:", this.name); //상위스코프 global
    }
};
obj.normalFn(); // undefined ==> 틀림
obj.arrowFn();  // 홍길동 ==> 틀림

// 2
const person = {
    name: "안찰스",
    greet: function() {
        const innerArrow = () => console.log(this.name);
        const innerNormal = function() { console.log(this.name); };
        
        innerArrow();
        innerNormal();
    }
};
person.greet();
// innerArrow 출력: 안찰스
// innerNormal 출력: undefined

// 3
function User(name) {
    this.name = name;
    setTimeout(() => {
        console.log("Hello, " + this.name);
    }, 1000);
}
new User("찰스"); // "Hello, undefined"


// 4(*)
const tom = {
    name : 'Tom',
    sayName : function(){
        console.log(this.name);
    }
}
const alice = { name: "Alice" };

tom.sayName(); // undefined ==>틀림
tom.sayName.call(alice); // Alice


//5
this.tag = "Error";
function print() {
  console.log(this.tag); 
}
const obj2 = { tag: "OK" };

const boundPrint = print.bind(obj2);

print(); // Error ==> 틀ㄹ림(강사님도 틀림!)
boundPrint(); // OK