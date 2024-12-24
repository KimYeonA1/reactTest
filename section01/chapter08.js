//1. 단락평가
let a = false;
let b = true;

let funca = ()=>{
    console.log("funca");
    return false;
};
let funcb = ()=>{
    console.log("funcb");
    return true;
};

//console.log(funca() || funcb());
//실제 사용하는 방법
//함수선언, 표현식, 화살표함수
function printname(person){
    const name = person && person.name;
    console.log(name || "person 값이 없음");
}
function printname2(person){
    if(typeof person === 'object' ){
        console.log(person.name);
    }else{
        console.log("person 값이 없음");
    }

}
// console.log(typeof {});

printname2();
// printname2({name: "kya"});