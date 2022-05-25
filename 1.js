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
