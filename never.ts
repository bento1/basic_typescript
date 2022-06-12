function error(message:string):never{
    throw new Error(message);
}

function fail(){
    return error("failed");
}

function infiniteLoop():never{
    while(true){

    }
}

declare const a : string | number;
if (typeof a!=="string"){
    a; // string이 걸러 number 만. uniontype이 아니라면,  never로 표시됨.
}

type Indexable<T> = T extends string ? T & {[index:string]:any} : never;

type ObjectIndexable = Indexable <{}>