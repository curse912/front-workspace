import React, { useState } from 'react';

type User = {
    name:string;
        age:number;
        hobby:string[];
}

interface UserInfoProps {
    // name : string;
    // age : number;
    // hobby : string[];
    // setName : (str:string)=>void;
    // setAge : (num:number)=>void;
    // setHobby : (arr:string[])=>void;
    user : User,
    setUser : (user:User) => void
}

export default function UserInfoContainer() {
    // let[name,setName] = useState('홍길동');
    // let[age,setAge] = useState(30);
    // let[hobby,setHobby] = useState(['코딩','게임']);
    const[user,setUser]=useState({name : '홍길동', age : 30, hobby : ['코딩','게임']});

    return (
        <div>      
            {/* <UserInfo name={name} age={age} hobby={hobby} setName={setName} setAge={setAge} setHobby={setHobby}/> */}
            <UserInfo user={user} setUser={setUser}></UserInfo>
        </div>
    );
}

// function UserInfo({name,age,hobby,setName,setAge,setHobby}: UserInfoProps) {
function UserInfo({user,setUser}: UserInfoProps) {

    const handleChangeName = () => {
        // setName("mkm");
        // setAge(22);
        // setHobby(['취미1','취미2']);
        setUser({name : 'mkm', age : 22, hobby : ['취미1','취미2']})
    }

    return (
        <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
        <h2>사용자 정보</h2>
        <h3>이름: {user.name}</h3>
        <h3>나이: {user.age}</h3>
        <h3>취미: {user.hobby.join(",")}</h3>
        <button onClick={handleChangeName}>정보 변경변경</button>
        </div>
    );
}