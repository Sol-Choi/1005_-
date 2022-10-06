// todo 입력 form 가져와서 submit(이벤트)을 눌렀을 때 함수 실행
const todoForm = document.querySelector("#todo-form");

// todo 입력 DOM 가져오기
const todoInput = document.querySelector("#todo-form #todo-input")

// 완료한 할 일 DOM 가져오기
const countText = document.querySelector("#count");

// 완료한 할 일 변수
let count = 0;

// todoForm에 submit 이벤트 발생시 함수 추가
todoForm.addEventListener("submit", todoAdd);

// 실행될 함수 작성 : todo list 추가
function todoAdd(e){
    e.preventDefault();
    
    // 요소 생성
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const text= document.createTextNode(todoInput.value);
    const button = document.createElement("button");
    button.innerHTML = "X";

    // 요소를 li 안에 추가
    li.append(checkbox);
    li.append(text);
    li.append(button);

    // todo-board에 li요소 추가
    document.querySelector("#todo-board").append(li);

    // todoInput의 값 비우기
    todoInput.value = "";

    // checkbox에 클릭 이벤트 삽입 - text 색상 회색
    checkbox.addEventListener("click", todoCheck);

    // button에 클릭 이벤트 삽입 - li 삭제
    button.addEventListener("click", todoDelete);
}

function todoCheck(e){
    // check 표시가 되면 색상을 회색으로 바꿈
    // checkbox에서 체크 여부 알 수 있음
    // console.dir(e.target);
    if (e.target.checked) {
        e.target.parentNode.style.color = "lightgray";
        // count 값을 1 증가
        count++;
        countText=innerHTML=count;
    } else {
        e.target.parentNode.style.color = "black";
        // count 값을 1 감소
        count--;
        countText=innerHTML=count;
    }
}

function todoDelete(e) {
    // console.dir(e.target.parentNode)
    if(e.target.parentNode.firstChild.checked); {
        count--;
        countText.innerHTML = count;
    }
    
    e.target.parentNode.remove();
}