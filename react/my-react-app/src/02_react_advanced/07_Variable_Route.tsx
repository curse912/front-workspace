import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

export function VariableRoute(){
    return(
        <div>
            <h1>Variable Route</h1>
            <Outlet/>
        </div>
    )
}

// 동적 라우팅 컴포넌트
export function UserDetail(){

    // userParams
    //  - URL파라미터를 추출하는 훅함수
    //  - /user/1234 1234를 추출가능
    const params = useParams();
    const id = Number(params.id);

    const navigate = useNavigate();

    // useLocation
    // - 현재 url위치 정보를 가져오는 훅 함수
    // - url의 pathname, search값,hash값 등을 가져온다.
    const location = useLocation();
    console.log(location);

    const users=[
        {id:1, name:'심은성'},
        {id:2, name:'안정현'},
        {id:3, name:'풍뎅이'}
    ];

    return(
        <div>
            <h2>사용자 상세 정보</h2>
            <p>사용자 ID : {id}</p>
            <p>사용자 name: {users.find(user => user.id === id)?.name}</p>
            <p>현재 경로 : {location.pathname}</p>
            <button onClick={()=> navigate('/variable-route')}>목록으로 가기</button>
            {/* navigate(-1)도 뒤로가기 역할 가능 */}
        </div>
    )
}
export function UserList(){
    // useNavigate
    // - 리엑트에서 안전한 페이지 이동을 위한 훅함수
    const navigate = useNavigate();
    
    const users=[
        {id:1, name:'심은성'},
        {id:2, name:'안정현'},
        {id:3, name:'풍뎅이'}
    ];

    const pageMove = (id:number) => {
        navigate("/variable-route/user/"+id);
    }

    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {
                    users.map(user=>{  //{} : return 필수 (): return 불필요
                        return(
                            <li key={user.id}>
                                <button onClick={()=> pageMove(user.id)}>{user.id} - {user.name}</button>
                            </li>                              
                        )
                    })
                }
            </ul>
        </div>

        
    )
}