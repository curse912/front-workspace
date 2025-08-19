/*
    1. 함수타입
     - 함수의 매개변수와 반환 값에 타입을 저장할 수 있다.
     - 지정된 타입과 다른 값이 전달되거나, 반환되면 컴파일 에러가 발생한다.
*/
function greet(name:string){
    console.log('안녕하세요 : ' + name);
}
greet('mkm');

function returnNumber():number{
    return 1;
}
let a:number = returnNumber();

/*
    2. void
     - 함수가 값을 반환하지 않을 때 사용하는 타입
     - 반환값이 없는 함수의 기본 반환 타입으로 사용됨.
     - 계층구조상 undefined의 super타입
*/
function fnVoid(x:number):void{
    // return;
    return undefined;
}

/*
    3. Optional Parameter
     - 선택적인 속성을 표현할때 사용하는 속성
     - 변수명?:type
     - 옵셔널 파라미터는 type | undefined와 동일하다
*/
function fnOptional(a:number, b?:number):number{
    console.log(b);
    /*
        b는 선택적 파라미터이므로 타입스크립트는 b에 값이 올수도 있고 안올수도 있으므로
        type | undefined로 추론한다.
        따라서 b를 그대로 반환 시키고자 한다면 컴파일 에러가 발생할 수 있으며, 조건문을 통해
        타입을 좁히는 작업이 필요하다
    */
    if(b != undefined){
        return b;
    }
    return a;
}
fnOptional(1);
fnOptional(1,5);

/*
    4. restParameter
     - 함수의 매개변수에 들어갈 인자의 수가 정해지지 않는 경우 사용하는 문법
     - 매개변수로 전달되는 값들을 하나의 배열로 관리한다.
*/
function restParameter(...m:number[]){
    console.log(a);
}
restParameter();
restParameter(1);
restParameter(1,2,3,4,5);

/*
    5. spread 연산자
     - 배열이나 객체의 값을 쭉 펼쳐서 깊은 복사나, 함수의 매개인자로 전달하는 문법
*/
const spreadArr = [1,2,3,4,5];
restParameter(...spreadArr);

function normalFn(a:number, b:number){
    console.log(a,b);
}
// normallFn(...spreadArr);

/*
    배열은 크기가 정해지지 않은 타입이기 때문에, 매개변수의 갯수가 고정된 일반 함수에서 
    스프레드 문법을 통해 인자를 전달 받을 수 없다.
    하지만, 배열을 크기가 정해진 튜플로 젼경시 문법을 사용할 수 있다.
*/
const arr2 = [1,2] as const;
normalFn(...arr2);

/*
    6. Destructuring
     - 배열이나 객체의 구조를 분해하여 개별 변수로 할당하는 문법
 */
// 객체 구조분해 할당시 타입주석
function objectDesFn({a,b,c}:{a:number, b:string,c:boolean}){
    console.log(a,b,c);
}
objectDesFn({a:1,b:"mkm",c:true});

// 타입 별칭
type ABC = {a:number; b:string; c:boolean};
function arrayDesFn([first,second,third]:[number,string,boolean]){
    console.log(first,second,third);
}
function arrayDesFn2([first, ...rest]:[number,...(string|boolean)[]]){
        console.log(first,rest);
}
arrayDesFn2([1,'mkm',true]);

// function objectDesFn2({a,...rest}){
//     a:number,
//     // b:string,
//     // c:boolean,
//     [key:string]:string|boolean
// }{
//     console.log(a,rest);
// }


/*
    7. 타입 내로잉
     - union type처럼 변수가 여러터압을 갖고 있을때, 이를 사용하려고 하는 "한가지 타입"으로 좁히는 문법
     - typeof, instanceof,in 연산자
*/
function typeNarrowing(strOrNumber:string|number):void{
    if(typeof strOrNumber === 'number'){
        console.log(strOrNumber.toFixed(2));
    }else{
        console.log(strOrNumber.toUpperCase());
    }
}
typeNarrowing(1000);
typeNarrowing("mkm");

/*
    8. Type Assertion
     - 여러 타입을 가질 수 있는 변수에 대하여 개발자가 해당 값의 타입을 명확히 할고 있는 경우 사용하는 문법으로, 컴파일러에게
       이 "변수의 타입은 xx다" 라고 단언하는 문법
     - 타입 단언 시 컴파일러가 이를 믿고 타입 체크를 생략한다.
     - 타입 단언은 개발자가 실제 타입을 "완벽하게" 알고 있을때만 사용한다.
 */

function typeAssertion(strOrNumber:string|number):string{
    return (strOrNumber as string).toUpperCase();
}
// typeAssertion(100); 런타임 에러발생

// not null 단언문
// - 선택변수의 값이 null이 아님을 단언하는 문법
function notNullAssertion(number?:number):number{
    return number!;
}

/*
    9. never type
     - 어떤 값도 가질 수 없는 타입으로, 절대값을 반환할 수 없는 함수나 도달할 수 없는 코드블럭을 사용할때 사용
     - never은 예외적인 상황을 명확히 표현하여 버그를 방지하기 위해 사용
 */
function fnNever():never{
    throw new Error; // 값을 절대 반환하지 않는다.
    // return 1;
}
function fnNever2(){
    while(true){

    }
    // return 1;
}
type etc = string|number;
function typeNarrowing2(sOrn:etc):void{
    if(typeof sOrn == 'number'){
        console.log(sOrn);
    }else if(typeof sOrn ==='string'){
        console.log(sOrn);
    }else{
        // exhaustiveness check
        console.log(sOrn);  //never
        const check:never = sOrn;
        // 현재 sOrN에 새로운 타입이 추가되는 경우 위코드에서 컴파일 에러를 발생 시킴으로써,
        // 모든 타입이 철저히 검사되고있는지 확인 할 수 있다.

        // 타입 체크용 메서드
        // 컴파일 단계의 타입체크 기능을 무효화 하여 dheck 에 string, number와 같은 다른 값이
        // 전달된경우, 런타임시 에러가 발생할 수 잇도록 처리하는 함수
        UnexpectedValue(check);
    }
}
function UnexpectedValue(value:never):never{
    throw new Error(`Unexptected Value : ${value}`);
}
// const any:any = ['zzz'];
// typeNarrowing2(any);

/*
    10. 함수 타입 표현식/ 함수 시그니처
     - 함수의 시그니처를 타입으로 정의하는 방법
     - 함수의 시그니처? 함수가 가지는 매개변수의 개수와 자료형 , 반환형을 함친것.
 */
// 일반 함수
function print(s:string):void{
    console.log(s);
}

// 함수 표현식
const print2 = (s:string):void =>{
    console.log(s);
}

//함수를 매개변수로 받는 함수의 타입표현식
const hello = (callback:(s:string) =>void):void =>{
    callback("Hello ts");
}


/* 
    11. Type Aliases
     - 복잡한 타입을 별칭으로 관리하기 위한 문법
     - 타입의 ㅏ독성과 재사용성을 크게 늘려주는 문법
     - 대문자로 시작하는 것이 관ㄹ계
*/
type PrintFn = (s:string) => void;
type HelloFn = (callback:PrintFn) => void;

const Hello2:HelloFn = (callback) => {
    callback("Hello ts");
}
Hello2(print);

export default print;