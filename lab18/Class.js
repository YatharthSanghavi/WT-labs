class person{
    constructor(a,b){
        this.a = a
        this.b=b
        this.add(a,b)
    }
    add(a,b){
        console.log(a+b)
    }
}

const p = new person(10,20)