//콜백함수: 자바콜백함수(service, doGet, doPost)
//1. 함수 선언식

function checkMood(mood, type){
    if(mood === "good"){
        if(type === 1){
            sing();
        }else{
        dance();
        }
    }else{
        if(type === 1){
            cry();
        }else{

            angry();
        }
    }
}

//콜백처리1
function checkMood2(mood, goodCallback, badCallback){
    if(mood === "good"){
        goodCallback();
    }else{
        badCallback();
     
    }
}
//checkMood("good", 1);
// checkMood2("bad", ()=>{
//     console.log("ACTION :: dance3");
// }, ()=>{
//     console.log("ACTION :: angry3");
// });


//콜백처리2
function repeat(idx, callback){
    for(let i = 1; i<idx ; i++){
        callback(i);
        // console.log(i);
    }
}
repeat (5,(i)=>{
    console.log(i**7);

});

function calculate(i){
    console.log(i**4);
}

