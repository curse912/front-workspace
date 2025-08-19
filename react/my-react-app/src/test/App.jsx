import { useState } from "react";
import './default.css';


function App() {
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);



  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const registUser = () => {
    const user = { name, age, gender, phone };
    // userList.push(user);
    // 여기 바꿈! :  이유 기존 userList와 입력한 User 정보를 같이 저장해야함~~
    setUserList([...userList,user]);

    setName("");
    setAge("");
    setGender("");
    setPhone("");

  };

  return (
    <div className="App">
      <h1>회원 정보 출력</h1>
      <hr></hr>
      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => {
            <User key={"user" + index} item={item} />;
          })}
        </tbody>
      </table>
      <div className="regist-wrap">
        <h3>회원 정보 등록</h3>
        <hr></hr>
        <InputWrap text="이름" data={name} setData={setName} />
        <InputWrap text="나이" data={age} setData={setAge} />
        <InputWrap text="성별" data={gender} setData={setGender} />
        <InputWrap text="전화번호" data={phone} setData={setPhone} />
        <button onClick={registUser}>회원등록</button>
        {/* joinUser이 아닌 앞에 입력값을 userList에 저장하는 registUser을 선언해야함 */}
      </div>
    </div>
  );
}



const User = (props) => {
  const user = props.user;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
    </tr>
  );
};



const InputWrap = (props) => {
  const text = props.text;
  const data = props.data;
  const setData = props.setData;
  const changeInputValue = (e) => {
    // event객체 에서 받은 값의 이름과 값을 {이름: name값,...}이렇게 저장해야함.
    const{name,value} = e.target;
    setData(
      {
        ...userList,
        [name]:value
      }
    );
  };

  return (
    <div className="input_wrap">
      <label>{text}</label>
      <input type="text" value={data} onChange={changeInputValue} />
    </div>
  );
};



export default App;

포기해썽
대충했으