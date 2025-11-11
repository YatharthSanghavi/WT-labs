let a = [10,20,30,40,3,1,2,4,3,10]
const doublen = a.map(num=>num*2)
console.log(doublen)
const even = a.filter(num=>num%2===0)
console.log(even)
const reducetotal = a.reduce((num,current)=>num+current)
console.log(reducetotal)
const a1 = new Set(a)
console.log(a1)
const map1 = new Map([
    ["student", 
        { 
            name: "yatharth", 
            mark: 23 
        }],
    ["raj",    {
            name:"vimal",
            mark:99
        }
    ]
]);

map1.forEach((value,key)=>{
    console.log(key+":",value);
});