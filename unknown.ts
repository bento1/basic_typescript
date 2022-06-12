// 


declare const maybe:unknown;
// const anumber:number=maybe;

if (maybe===true){
    const aBoolean:boolean=maybe;
    // const aString:string=maybe; 이미 분기점에서 불리언으로 판단했기때문 
}

if (typeof maybe ==='string'){
    const aString:string=maybe; // 반대로 string 타입인지 확인했기 때문에 
}

//any보다 type safe함.