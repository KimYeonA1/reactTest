//1. 함수선언식, 함수표현식, 화살표 함수 

function getArea(width, height){
    //중첩함수
    function anotherFunction(){
        console.log("another function 입니다.");
    }
    anotherFunction();

    return width * height;
}


let area1 = getArea(10,50);
console.log(area1);

