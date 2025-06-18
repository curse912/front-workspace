function test1(){
    console.log('요소에 이벤트 발생');
    // retrun undefined;  (기본값)
}

/*
    html페이지 로딩이 완료된 이후에 코드를 실행하고자 할때
     - window.onload 사용

    => window.onload를 사용하면 html의 head태그에 script태그를 만들어도 실행이 된다.
*/
window.onload = function(){
    /*
        test1 과 test1()의 차이 
         - test1() : 함수 호출
         - test1 : 호출하지 않은 함수 값
    */
    document.querySelector("#btn2").onclick = test1;
    document.querySelector("#btn2").onclick = function(e){
        console.log("하이");
        // btn2.onclick이 2개있으면 덮어씌워짐.
    };

    document.querySelector('#btn3').addEventListener("click",function(e){
        console.log('btn3 clicked!');
    });
    document.querySelector('#btn3').addEventListener("click",function(e){
        console.log('22222222222 btn3 clicked!');
    });

    /*
        Event객체
         - 발생한 이벤트 고나련 모든 정보를 가지고 잇는 객체
         - 이벤트가 발생한 요소, 발생한 이벤트의 유형, html내부의 위치정보 등
         - 이벤트 발생시 브라우저는 이벤트 핸들러 함수의 첫번재 매개변수로 항상 이벤트 객체를 주입

        Event target객체
         - 이벤트가 발생한 객체
         - 이벤트 객체의 target 속성의 값
    */
    document.querySelector('.box').onmouseover = function(e){
        console.log(e);
        console.log(e.target);

        //같은 말임 -> 덮어씌워짐
        e.target.innerHTML = "하이";
        this.innerHTML = "하이2";
    };

    document.querySelector('.box').onmouseout = function(e){    //e : 이벤트 객체
        e.target.innerHTML = "잘가";
    };


    /*
        keyEvent
         - keydown - keypress - keyup(input에 값이 기록되는 순간)
                              - inpuit
    */
    document.querySelector('#userInput').addEventListener('keyup',function(e){  //inputeh 사용
        console.log(e);
        document.querySelector('.text-wrapper').innerHTML = e.target.value;
    });


    /* submit event */
    document.querySelector('form').onsubmit = function(e){
        /*
            사용자가 입력한 값이 유효한 값인지 유효성 검사를 진행하기 위한 목적으로 작성한다.
        */
        console.log(e);
        //1. 아이디 검사
        const userId = document.querySelector('#userId');
        if(userId.value.length < 4){
            console.log('유효한 아이디를 입력하세요');  //alrt사용하면 브라우저 화면에 나옴
            userId.focus();

            // return false;   //submit 이벤트 막기
            e.preventDefault(); //submit 이벤트 막기
            // 기본이벤트 실행 방지.
            // 기본이벤트 ? 각 태그마다 내장되어있는 이벤트 기능
            // ex) submit 버튼 태그 :  submit 이벤트
            //     a 태그 : click 이벤트

        }
        //2. 비밀번호 검사
        const pwd = document.querySelector('#pwd');
        if(pwd.value.length < 4){
            console.log('유효한 비밀번호를 입력하세요..!');
            pwd.select();   //focuse상태가 됨
            e.preventDefault();
        }

        //유효성 검사를 모두 통과시 true반환
        return true;
    };
}

function displayMsg(e,boxx){
    console.log(e.target, boxx.dataset.text);

    //상위요소로의 이벤트 전파를 막는 함수
    // e.stopPropagation();
}