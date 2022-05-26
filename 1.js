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

// #9. concat을 활용한 출력 방법
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/',month,'/',day, ' ', hour, ':',minute,':',second)

console.log(result);  // 2019/04/26 11:34:27라고 출력되게하기


// #10. 인풋모름 패스



// # 11. for을 이용한 기본 활용
// 1부터 100까지 모두 더하는 코드를 for를 사용하여작성해라
let s = 0;

for (i = 1; i <= 100; i++) {
    s += i
    // console.log(i)
}

console.log(s);

// # 12. 게임 캐릭터 클래스 만들기
class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼')
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// # 13. 몇번째 행성인가요?
// let arr_13 = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']

// let n = prompt('n 입력 : ')
// console.log(arr_13[n-1]);

// # 14. 3의 배수인가?
// const n = prompt('숫자 입력 : ')

// if (n % 3 === 0) {
//     console.log('짝')
// } else {
//     console.log(n)
// }

// # 15. 자기소개
// const name = prompt('이름입력 : ')
// console.log(`안녕하세요. 저는 ${name}입니다.`)

// # 16. 로꾸꺼
// const input = prompt('문자 입력 : ')

// function reverse_msg(msg) {

//     const input_msg = msg.split('');  // 하면 문자열을 배열로 만든다.
//     input_msg.reverse();   // 하면 문자열 거꾸로 정렬
//     const return_msg = input_msg.join('')  // 하면 다시 배열을 문자열로 만든다.
//     return return_msg
// }

// console.log(reverse_msg(input))

// # 17. 놀이기구 키 제한
const height = prompt('키 : ')

if (height >= 150) {
    console.log('YES')
} else {
    console.log('NO')
}