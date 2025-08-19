// 1
const apply: (a: number, b: number) => number = (a, b) => a + b;

// 2
export type PrintType = (name:string, favorite:'돈까스'|'제육'|'치킨') => void;
const print:PrintType = (name, favorite) => {
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`)
}

// 3
let data:string; 
data = racoonInfo('podong' , 10, 'male', true );
console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
data = racoonInfo('coco',4, 'female' );
console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

function racoonInfo(name:string, weight:number, gender:string,trans?:boolean):string {
    if(trans != undefined){
        return `이름 : ${name}, 무게 : ${weight}, 성별 : ${gender}`;
    }
    return `이름 : ${name}, 무게 : ${weight}, 성별 : ${gender}, 중성화 : ${trans}`;
    // return `이름 : ${name}, 무게 : ${weight}, 성별 : ${gender}`+(trans? `, 중성화 : ${trans}`);
}

// 4
const array2:(string|number|number[])[] = ['1',2,3,4,'5',[1,2,3,4,5]];
function sum(array2: (string|number|number[])[]) : number{
    // 매개변수로 들어온 배열을 반복문을 통해 모두 더한 후 더한 값을 반환
    
    let sum = 0;
    for(let num of array2){
        if(typeof num ==='string'){
            sum += Number(num);
        }else if(typeof num ==='number'){
            sum += num;
        }else if(Array.isArray(num)){ //(typeof num === 'object' && Aarray.isArray(num))
            // sum += num.reduce( (prev,curr) => prev+curr);
            for(let no of num){
                sum += no;
            }
        }else{
            const check:never = num;
        }
    }
    return sum;
}
const total = sum(array2);
console.log(total); // 30

export default total;

// 5
function abc(param:string|number|string[]|number[]) : number|number[]{
    //??
    if(typeof param ==='string'){
        return Number(param);
    }else if(typeof param ==='number'){
        return param;
    }else if(typeof param === 'object' && Array.isArray(param)){
        let pArray:number[]=[];

        for(let par of param){
            
            if(typeof par === 'string'){
                pArray.push(Number(par));
            }else{
                pArray.push(par);
            }
        }
        return pArray;
    }else{
        const check:never = param;
        return check;
    }
}


// abc(11) // 11
// abc('11') // 11
// abc(['1','2','3','4']) //  [1,2,3,4]
// abc([1,2,3,4]) // [1,2,3,4]

// 6
function multiplyAll(...numbers): number {
    // 구현
    let mul = 1;
    for(let num of numbers){
        mul = num*mul;
    }
    return mul;
}
// function multiplyAll2(...numbers,...number[]): number {
//     // 구현
//     let total = 1;
//     for(let num of numbers){
//         total *= num;
//     }
//     return total;
// }
console.log(multiplyAll(2)); // 2
console.log(multiplyAll(2, 2)); // 4
console.log(multiplyAll(2, 2, 2)); // 8
console.log(multiplyAll(2, 2, 2, 2)); // 16
console.log(multiplyAll(2, 2, 2, 2, 2)); // 32
//...

// 7
type Types = string|number|boolean;
function handleValue(value:Types) {
    if(typeof value === 'string'){
        console.log('문자열 입니다.');
        return `문자열입니다.`;        
    }else if(typeof value === 'number'){
        console.log('숫자입니다');
        return `숫자입니다.`;
    }else if(typeof value === 'boolean'){
        console.log('불린입니다');
        return `불린입니다.`;
    }else{
        return assertNever(value);
    }
}

function assertNever(value : never){
    throw new Error("에러입니다.");
}

// 8
type FnType = ([first,...rest]:[number,...number[]]) => number[];
const fn:FnType  = ([first,...rest]) => {
    for(let i = 0; i < rest.length; i++){
        rest[i] += first;
    }
    return rest;
}
// fn([]) // 컴파일에러
fn([1]); // []
fn([1,2]); // [3]
fn([1,2,3]); // [3,4]
fn([1,2,3,4]); // [3,4,5]
