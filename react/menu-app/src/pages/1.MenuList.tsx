import { useState } from "react"
import type { Menu } from "../type/menu";
import { deleteMenu, searchMenus } from "../api/menuApi";
import RadioGroup from "../components/RadioGroup";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export default function MenuList() {
    // const [menus, setMenus] = useState<Menu[]>([]);
    const navigate = useNavigate();
    // #1. 게시글 불러오기
    //  - useEffect를 활용하여 컴포넌트가 마운트 될 때 1번만 로드되도록 설정
    // useEffect(() => {
    //     /*
    //         #2. CORS설정
    //          - 브라우저는 보안상 SOP정책을 사용한다.
    //          - SOP = 동일한 출처(Orgin)에서만 리소스 요청을 허용하는 정책
    //          - 출처(Orgin) : 프로토콜+ip주소+포트번호
    //          - 이때, 요청을 받는 서버측에서 현재 출처에 대한 요청을 허용하도록
    //            CrossOrigin속성을 추가해줘야 한다.
    //     */
    //     loadMenus()
    //     .then((response) => {
    //         setMenus(response.data);
    //     });
    // },[]);
    // #3. 메뉴 검색 기능
    const [searchKeyword, onChangeKeyword] = useInput({
        type : 'all',
        taste : 'all'
    });
    const [submittedKeyword, setSubmittedKeyword] = useState({
        type : 'all',
        taste : 'all'
    })
    const {data:menus, isLoading, isError, error} = useQuery<Menu[]>({
        queryKey:['menus', submittedKeyword], //
        queryFn : () => searchMenus(submittedKeyword),
        staleTime : 1000 *60
    })
    const handleSearchMenus = () => {
        setSubmittedKeyword(searchKeyword)
        // axios.get("http://localhost:8081/api/menus", {
        //     params : searchKeyword
        // }).then( res => setMenus(res.data))
        // .catch(err => console.log(err));
    }
    const queryClient = useQueryClient();
    const deleteMenuMutation = useMutation ({
        // mutationFn : (id:number) => axios.delete(`http://localhost:8081/api/menus/${id}`),
        mutationFn : (id:number) => deleteMenu(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['menus',submittedKeyword]});
            //queryClient.invalidateQueries({queryKey: ['menu',id]});
        }
    })
        const handleDelete = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        deleteMenuMutation.mutate(id);
        };
    if(isLoading)return <div>loding...</div>
    if(isError) return <div className="alert alert-danger">{error.message}</div>
     return(
        <>
            <div className="menu-test">
                <h4>전체 메뉴 조회(GET)</h4>
            </div>
            <div  className="form-check form-check-inline">
                <RadioGroup id="get-no-type" value="all" name="type"
                checked={searchKeyword.type === 'all'} onChange={onChangeKeyword} label="모두" />
                <RadioGroup id="get-kr" value="kr" name="type"
                checked={searchKeyword.type === 'kr'} onChange={onChangeKeyword} label="한식" />
                <RadioGroup id="get-jp" value="jp" name="type"
                checked={searchKeyword.type === 'jp'} onChange={onChangeKeyword} label="일식" />
                <RadioGroup id="get-ch" value="ch" name="type"
                checked={searchKeyword.type === 'ch'} onChange={onChangeKeyword} label="중식" />
            </div>
            <div  className="form-check form-check-inline">
                <RadioGroup id="get-no-taste" value="all" name="taste"
                checked={searchKeyword.taste === 'all'} onChange={onChangeKeyword} label="모두" />
                <RadioGroup id="get-mild" value="mild" name="taste"
                checked={searchKeyword.taste === 'mild'} onChange={onChangeKeyword} label="순한맛" />
                <RadioGroup id="get-hot" value="hot" name="taste"
                checked={searchKeyword.taste === 'hot'} onChange={onChangeKeyword} label="매운맛" />
            </div>
            <input type="button"
            className="btn btn-block btn-outline-success btn-send"
            value="검색"
            onClick={handleSearchMenus}
            />
            <div className="result" id="menu-result">
                <table className="table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>음식점</th>
                        <th>메뉴</th>
                        <th>가격</th>
                        <th>타입</th>
                        <th>맛</th>
                        <th>버튼</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menus && menus.map((menu) => {
                            return (
                                <tr key={menu.id} onClick={() => navigate(`/menus/${menu.id}`)}>
                                    <td>{menu.id}</td>
                                    <td>{menu.restaurant}</td>
                                    <td>{menu.name}</td>
                                    <td>{menu.price}</td>
                                    <td>{menu.type}</td>
                                    <td>{menu.taste}</td>
                                    <td>
                                            <button className="btn" onClick={(e)=>{
                                                e.stopPropagation();
                                                navigate("/menus/"+menu.id+"/edit")
                                            }
                                            }>수정</button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={(e) => handleDelete(e, menu.id)}
                                                disabled={deleteMenuMutation.isPending}
                                                >
                                                삭제
                                            </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            </div>
        </>
    )
}





// 뭔가를 수정했는데 뭔지 모르겠어유