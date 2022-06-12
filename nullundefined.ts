let MyName:number = null;

let v1 : void = void;
let v2 : void = null;
let v3 : void = undefined;

// 아래와 같은 합집합 타입 유니온 타입을 쓰면 안전하다.
let union : string | null = null;
union="Mark"