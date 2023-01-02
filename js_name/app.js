const loginInput =  document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAMEKEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    // console.dir(event);  // 해당 이벤트 정보 확인
    
    loginForm.classList.add(HIDDEN_CLASSNAME);  //loginForm에 hidden 클래스 추가, 실행하면 클래스가 적용됨
    const username=loginInput.value;
    localStorage.setItem(USERNAMEKEY, username); // 변수를 DB에 저장
    
    paintGreeting(username)

    // localStorage에 저장하기
    // localStorage.setItem("username", 'ljc') // DB에 저장
    // localStorage.getItem("username") // 저장된 값 불러오기
    // localStorage.removeItem("username") // 저장된 값 삭제
}

function paintGreeting(username){
    greeting.innerText = 'Hello ' + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function linkClick(event){
    // event.preventDefault(); // 이벤트 멈추는 함수 -> 페이지 이동 X
    // console.dir(event); // 해당 이벤트 정보 확인
    alert('Click!')  
}


link.addEventListener('click',linkClick)

const savedUsername = localStorage.getItem(USERNAMEKEY);  // 저장한 값 로드

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit)
} else {
    paintGreeting(savedUsername);
}
