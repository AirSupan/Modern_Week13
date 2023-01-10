enum Directoin{
    Up = 1 ,
    Down  ,
    Left ,
    Right ,
}
console.log(Directoin)

enum AppStatus{
    Active = 'Yes',
    InActive = 1,
    OnHolding = 2,
    OnStop = 'STOP'
}
let y:any
function checkStatus (status:AppStatus):void{
    console.log(status)
    }


checkStatus(AppStatus.Active)   
checkStatus(AppStatus. InActive)   
checkStatus(AppStatus.OnHolding)   
checkStatus(AppStatus.OnStop)   