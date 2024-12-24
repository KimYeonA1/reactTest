//=forEach(함수(value, index, 객체배열)): 향상된 포문 for( 객체 : 객체배열)
const array = [1,2,3,4];
const array2 = [];



//1. 일반 for문
for(let i=0; i<array.length ; i++){
    // console.log(array[i]);
}

// console.log(array2);
//2. foreach
array.forEach((v)=> array2.push(v*2));

//console.log(array2);
let array3 = [
    {name: "구길동", age: 10},
    {name: "홍길동", age: 10},
    {name: "저길동", age: 10},
    {name: "말길동", age: 10},
    {name: "홍길동", age: 20},
];

//3. find
const findValue = array3.find((v)=>{
    return v.name === "홍길동";
});
// console.log(findArray);

//4. filter
const findArray = array3.filter((v)=>{
    return v.name === "홍길동";
});
// console.log(findArray);

//5. Map(지도: 객체 새로 만들어지는 것)
const nameArray = array3.map((v)=>{
     return v.age+30;
});
// console.log(nameArray);

//6. findIndex 해당된 객체를 찾아서 그 위치를 리턴한다
const findIdx = array3.findIndex((v)=>{
    return v.name === "말길동"
});
// console.log(findIdx);

// 7. includes(true, false)
// const array = [1,2,3,4];
const flag = array.includes(5);
// console.log(flag);

//8. indexOf(index)
const array6 = [1,2,2,2,2,4];
const value = array.indexOf(2);
// console.log(value);

//9. slice
const array7 = [1,2,3,4,5,6,7];
const sliceArray = array7.slice(2,5);
// console.log(sliceArray);

let array8 = [
    {name: "구길동", age: 10},
    {name: "홍길동", age: 10},
    {name: "저길동", age: 10},
    {name: "말길동", age: 10},
    {name: "홍길동", age: 20},
]

const sliceArray2 = array8.slice(2,4);
// console.log(sliceArray2);

//10. concat
let array9 = [
    {name: "구길동", age: 10},
    {name: "홍길동", age: 10},
]
let array10 = [
    {name: "말길동", age: 10, tall: 170},
    {name: "홍길동", age: 20, tall: 180},
 
]

const returnArray  = array9.concat(array10);
// console.log(returnArray);

//11. sort
const array11 = [1,10,2,20,3,30,4,40];
array11.sort();
// console.log(array11);

array11.sort((a,b)=>{return b-a}); //a-b//b-a역정렬
// console.log(array11);

//12. join 합치기
const array12 = ["김동진","님","안녕하세요"];
// console.log(array12.join("="));

//13. for of 반복문 (자바의 향상된 for문)
let array13 = [1,2,3];
for(let item of array13){
    console.log(item);
}

//14. for in
const person = {
    name: "kdf",
    age: 34,
    tall: 123
};
for(let key in person){
    const value = person[key]
    console.log(key, value);
}