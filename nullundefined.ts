// let MyName:number = null; 옵션상 에러

// let v1 : void = void; 에러
// let v2 : void = null; 에러
let v3 : void = undefined; 

// 아래와 같은 합집합 타입 유니온 타입을 쓰면 안전하다.
let union : string | null = null;
union="Mark"