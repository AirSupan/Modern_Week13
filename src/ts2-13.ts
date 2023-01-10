let emCode:any = 111
let employeeCode = emCode as number
console.log(`${employeeCode} is ${typeof(employeeCode)}`)

let empFname:any ="Mark"
let empFirstName = <string>empFname
console.log(`${empFirstname} is ${typeof(empFirstName)}`)
