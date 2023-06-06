const number1=document.getElementById("num1") as HTMLInputElement
const number2=document.getElementById("num2")as HTMLInputElement
const buttonele=document.querySelector("button")as HTMLButtonElement

let numresult:number[]=[]
let stringresult:string[]=[]

type numandstr=number|string
type result={val:number;timestamp:Date}

interface Resobj{
    val:Number;
    timestamp:Date;

}

function add(num1:numandstr,num2:numandstr){
    if(typeof(num1)==='number' && typeof(num2)=='number'){
        return num1+num2
    }else if(typeof(num1)==='string' && typeof(num2)=='string'){
        return num1 +' '+ num2
    }else{
        return +num1 + +num2
    }
   
}

function obj(obj:result){
    console.log(obj.val)
}

buttonele.addEventListener("click",()=>{
    const num11=number1.value
    const num21=number2.value
    let sum= add(+num11,+num21)
    let res=add(num11,num21)

    let result=add(num11,+num21)
    numresult.push(sum as number)
    stringresult.push(res as string)

    obj({val:sum as number,timestamp:new Date()})
    
})






// console.log(add(1,4))
// console.log(add('2','3'))