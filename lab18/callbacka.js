function greet(name,callback){
    console.log(name)
    callback(name)
}
function callback(name){
    console.log(`hi ${name}`)
}

greet("yatharth",callback)