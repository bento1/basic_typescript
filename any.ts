function returnAny(message:any):any{
    console.log(message);

}
const any1=returnAny("return any");

any1.toString();

let looselyTpyed:any = {};
const d = looselyTpyed.a.b.c.d; // 컴파일시 오류를 잡아주지 못한다. 동적 데이터 처리에 필요함. 
