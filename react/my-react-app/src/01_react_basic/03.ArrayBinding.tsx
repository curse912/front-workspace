import { useState } from "react";
function ArrayDataBinding(){
    const [fruits, setFruits] = useState([{id:1, name:'apple'}, {id:2, name:'banana'}, {id:3, name:'cherry'}])
    const addFruit = () =>{
        // 배열에 데이터를 추가 
        // fruits.push({id : 4, name:'oranage'});
        // 데이터 추가시 화면에 렌더링
        // setFruits([...fruits]);
        // 과일 데이터 {id : 4, name:'oranage}
        const nextId = Math.max(...fruits.map((fruits)=>fruits.id))+1;
        setFruits([...fruits,{id : nextId, name:'oranage'}]);
    }
    const deleteFruit = (id: number)=>{
        // 전달한 id값과 일치하는 요소를 삭제하는 기능.
        // 배열에서 삭제하고, 삭제결과가 랜더링 되어야한다.
        // 전달한 id와 일치하지 않는 요소만 남긴 새로운 배열로 상태를 업데이트

        // filter()
        // - 배열 내부 요소에 대하여 조건에 맞는 요소만 남긴 새로운 배열을 반환하는 함수
        setFruits(fruits.filter((fruit) => fruit.id !== id));
    }
    const sortFruit = ()=>{
        const sortedFruit = [...fruits].sort((a,b) => b.id - a.id);  //오름차순
        // 깊은 복사를 통해 원본배열의 상태값을 건드리지 않게 함.
        console.log(sortedFruit,fruits);
        setFruits(sortedFruit);
    }

    return (
        <div>
            <h1>ArrayDataBinding</h1>
            <h2>FruitList</h2>
            <ul>
                {/* 
                    1. 배열 데이터 바인딩
                    map()
                     - 배열의 각 요소에 대해 함수를 호출하여 새로운 요소를 만들어 반환하는 함수
                     - 리액트에서는 배열의 각 요소를 map함수를 호출하여 JSX요소로 변경 후 바인딩
                     - JSX에서는 FOR, IF WHILE과 같은 예약어를 사용 할 수 업쇼기 때문에 함수를 이용하여 바인딩 한다.

                */}
                {
                    fruits.map( (fruit) => (
                        /*
                            key
                             - 배열의 요소를 식별하는 유니크 값
                             - key값을 추가하면 리액트가 요소를 추정하여 변화를 감지할 수 있다.
                             - 효율적인 랜더링을 위해 필수로 추가해야함
                        */
                        <li key={fruit.id}>{fruit.id} - {fruit.name}
                            <button onClick={()=>deleteFruit(fruit.id)}> 삭제 </button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={addFruit}> 추가 </button>
            <button onClick={sortFruit}> 역순정렬 </button>
        </div>
    )
}
export default ArrayDataBinding;