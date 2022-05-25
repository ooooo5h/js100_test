// #1. 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);

// #2. 배열의 내장함수
var arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);  // 출력 [200, 100, 10000, 300]되게 해라.
