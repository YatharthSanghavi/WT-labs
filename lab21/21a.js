const arrow = (num) => num>10?true:false;
function sum(num){
    return num*num
}

console.log(arrow(10))
console.log(sum(20))

const sc = (name,course) =>{
    if(course == null){
        course = "Web Development"
    }
    console.log(name+" "+ course);
}

sc("yatharth","html")
