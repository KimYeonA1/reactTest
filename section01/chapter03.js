//1. 숫자 양수무한대값, 음수무한대
let infinityValue = Infinity;
let mInfinityValue = -Infinity;
//나는 숫자가 아니야.
let notANumber = NaN;
//연산식결과가 나올 수 있도록 형변환한다
let nan = 1 * "10";

//덧셈으로 문자열 만들기
let name = "김"+"연아";

//템플릿 리터널 기능을 잘 사용하자
let name2 = "김연아";
let mylocation = "강남";
let introduceText = "저는" + mylocation + "에서 352 수업을 듣는 학생입니다";
let introduceText2 = `저는 ${mylocation}에서 352 수업을 듣는 ${name2}입니다.`;

console.log(introduceText2);

//형변환 Number, parseInt(앞에있는 숫자만) => Number 타입으로 변경한다.
let str2 = "10개";
// console.log( Number(str2));
// console.log( Number(str2) + 10);
// console.log( parseInt(str2) + 10);

//산술연산자에서 주의할 점
let num1 = 1.0;
let num2 = 2.0;

console.log(num1 / num2);
//비교연산자 (==),(!==): 비추, (===),(!==) 강추, (타입과 값을 같이 비교한다)
let compA = "1";
// console.log( 1 == "1");

//typeof 연산자(신경쓰기 XX 쓸 일이 없음)
let num3 = null;
console.log(num3);

//typeof 연산자(신경쓰기 XX 쓸 일이 없음) object 객체가 됨
let num4 = null;
console.log(typeof num3);

//병합연산자 (??)
let num5 = 20;
num5 = num5 ?? 10; //변수가 undefined 이면 다른 값을 준다.
console.log(num5);
