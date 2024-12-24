// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two , three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
   };
   let {
    age, //age 변수명을 myAge
    hobby,
    name,
    extra = "hello",
   } = person;
//    console.log(age, name, hobby, extra);

//3. 객체구조 분해할당을 이용해서 함수 매개변수 받는 방법
const func = ({name, age, hobby})=>{
    console.log(name, age, hobby);
};

func(person);