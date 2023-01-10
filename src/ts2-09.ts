let i:any
let arr2:number[]
arr2 = [10,20,30,40]

for(i in arr2){
console.log(arr2[i])
}
let p:any
const province:string[] = ["Trat","Rayong"]
for(p in province){
    console.log(`${province[p]}`)
}

let a:any
let animal:string[] = new Array("Cat","Dog","Rabbit")
function display(arr_value:string[]):void{
    for(a in arr_value){
        console.log(`${animal[a]}`)
    }
}
display(animal)