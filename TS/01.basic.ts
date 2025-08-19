/* 
    1. 타입 주석
     - 타입스크립트에서는 변수 선언시 타입을 명시 할 수 있다.
     - 타입 주석을 통해 정적 타입 검사가 가능해지며, 잘못된 타입의 값이 
       들어갈 경우 컴파일 오류가 발생
*/
// let 변수명:자료명
let num:number;
num = 12345;
// num = '12345';
num = num * Number('1');
// num = num * '1';    // 무조건 양쪽 행 타입이 같아야지만 가능

// 배열 타입 주석
// type[]
let animals:string[];
animals = ['hamster','cat'];

// 객체 타입 주석
//{key : type}
let animal:{name:string};
animal = {name : 'coco'};

/*
    2. 타입추론
     - 변수에 대입하는 값을 바탕으로 자동으로 타입을 추론하는 기능
     - 간단한 변수 선언시에는 타입 주석을 작성하지 않고 타입 추론을 이용한다.
     - 단, 복잡한 함수의 매개변수나 반환형, api함수와 같이 명확한 타입 정의가
       필요한 곳에는 반드시 작성한다.
*/
let userName = 'kh 타이거';
let age = 5;

/* 
    3. 배열과 튜플
    배열의 특징
     - 배열의 크기에 대한 제약이 존재하지 않으며, 
       js기준 들어가는 타입에 대한 제한도 없다.
     - 잘못된 인덱스에 접근시 에러가 발생하지 않는다.
*/
let numArr:number[];
numArr = [1,2,3];
console.log(numArr[2],numArr[3]);
numArr = [1,2,3,4,5];

/*
    튜플
     - 튜플은 배열의 특수한 형태로 '길이'와 '타입'이 고정된 배열
     - 일반배열은 언제든 요소의 수가 변할 수 있지만, 튜플은 항상 고정된 구조를 가짐
*/
let numTuple:[number,number,number];
// numTuple = [1,2];
numTuple = [1,2,3];
console.log(numTuple[2]);   //잘못된 인덱스 접근시 에러 발생
//numTuple[3] 3번 배열은 없으므로 오류발생

/* 
    4. readonly
     - 튜플은 배열이 가질 수 있는 값의 수와 타입을 정의한다.
     - 단, 튜플은 javascript에는 존재하지 않는 타입으로, 컴파일 완료 후에는 배여로 변환된다.
     - 타입스크립트의 정적타입 체크 시스템은 실제 코드를 '실행하기 전' 단계에서 작동하므로, 
       실행환경에서 동작하는 '메서드에 대한검사'는 수행하지 않는다.
*/
numTuple.push(4);

// 수정 불가 튜플
let readonlyTuple : readonly[number,String,boolean];
readonlyTuple = [1,'kh',true];

// readonlyTuple.push(11); 매서드가 없어져서 수정 불가

// 객체의 속성에 수정 불가 옵션 추가하기
let readonlyObject:{readonly name:string};
readonlyObject = {name:'kh'};
// readonlyObaject.name = 'mkm';

/*
    5. any Type
     - 어떤 값이든 저장할 수 있는 타입
     - 타입 스크립트의 정적 타입 검사를 우회하기 위해 설계되었다.
     - javascript코드와 호환성유지 및 마이그레이션을 돕기 위한 타입이고, 무분별하게 사용시
       typescript의 사용 의미가 사라진다.
*/
let any:any;
any = undefined;
any = 1;
any = "mkm";

let str:string;
let num2:number;
let undef:undefined;

str = any;
num2 = any;
undef = any;

/*
    6. unknown Type
     - 어떤 값이 든 할당 할 수 있는 타입
     - 단, 타입검사 기능이 제대로 동작하여, any와 달리 타입안정성 유지 가능
*/

let unknown:unknown;
unknown = 1;
unknown = "mkm";

//unknown 타입의 값은 ㅓㅇ떤 타입에도 재할당이 불가능
// 단순히 값을 받기 위한 용도로만 사용하며, unknow에 할당된 데이터를 재할 당 하기 위해서는 
// 적절한 타입으로의 narrowing필요
// str= unknown;
// num2 = unknown;

/*
    7. union Type
     - 여러타입들응ㄹ 하나로 묶어서 관리하는 타입ㅂ
     - type1 | type2 | type3
*/

let stringOrNumber:String|number;
stringOrNumber = "Union";
stringOrNumber = 12344;


//다양한 타입들이 들어가는 배열
let unionArr:(string|number|boolean)[]


// 8. 리터럴 타입 
// - 값 자체를 타입으로 사용하는 타입
// - 여러 리터럴 값들을 묶어서 리터럴 유니온 타입으로 자주 활용된다.

const PI = 3.14;
let constNumber:1234 = 1234;
// constNumber = 4567;

//리터럴 유니온 타입
let method:'card'|'bank';
method = 'bank';
method = 'card';
// method = 'point';

// as const
// - 객체나 배ㅐ열에 저장된 값을 리터럴 타입으로 고정시켜 타입 안정성을 확보할 수 있게 도와주는 기능
let payInfo = {name:'kh 풍뎅이', price:15000, method:'bank'} as const;
method = payInfo.method;

export default num;