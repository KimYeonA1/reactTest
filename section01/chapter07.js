//1. 배열생성, 배열리터널
let arrayA = new Array();
let arrayB = []; 

//2. 배열 들어올 수 있는 멤버(기본타입 5가지, 객체타입1 (3종류))
let arrayC = [
    1,
    1.0,
    true,
    "hello",
    undefined,
    null,
    {},
    [],
    ()=>{
        console.log("난 함수");
    }
];

console.log(arrayC[8]());