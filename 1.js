// #1. 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);

// #2. 배열의 내장함수
var arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);  // 출력 [200, 100, 10000, 300]되게 해라.

// #3. 변수의 타입
var arr = [100, 200, 300];
console.log(typeof(arr));  // 정답 object

// #4. 변수의 타입2

// 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
// 1)  입력 : a =1,   출력 : number
// 2)  입력 : a = 2.22,   출력 : boolean   -> Number
// 3)  입력 : a = 'p',   출력 : string
// 4)  입력 : a = [1, 2, 3],   출력 : object

// #5. for문 계산
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

// console.log(a+b); 의 값은 ? 
// i가 1일때 a는 10 + 1 = 11
// i가 3일때 a는 11 + 3 = 14
// i가 5면 반복문 종료. 
// a+b는 14+2로 정답 16.

// #6. False
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.
// 1)  NaN
// 2)  1    -> true
// 3)  ""
// 4)  0
// 5)  undefined

// #7. 변수명
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
// 1)  age
// 2)  Age
// 3)  let    -> 예약어
// 4)  _age
// 5)  1age   -> 숫자로 시작 불가. 문자/밑줄(_)/달러기호($)로만 시작

// #8. 객체의 키 이름 중복
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

// console.log(d['weight']); 의 출력값은 ? 78? 땡