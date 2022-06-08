interface DB<T> {
    add(v:T):void;
    get():T;
}
class D<T> implements DB<T>{
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }

}

interface JSONSerializer{
    serialize():string;
}
class LocalDB<T extends JSONSerializer> implements DB <T>{
    constructor(private localStorageKey: string){}
        add(v: T){
            localStorage.setItem(this.localStorageKey,v.serialize());
        }
        get():T{
            const v= localStorage.getItem(this.localStorageKey);
            return (v) ? JSON.parse(v):null;
        }
    }

interface User {name:string}

// const userDb=new LocalDB<User>('user');
// userDb.add({name:'jay'});
// const userA = userDb.get();
// userA.name;

interface Vegitable{
    v: string;
}
interface Meat{
    v: string;
}

interface Cart<T> {
    getItem():T extends Vegitable ? Vegitable : Meat
}

const cart1:Cart<Vegitable>={
    getItem(){
        return {v:''};
    }
}

cart1.getItem();