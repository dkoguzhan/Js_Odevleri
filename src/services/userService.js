export default class UserService{
    constructor(loggerService){
         this.users = []
         this.loggerService = loggerService
        
    }
    add(user){
        this.users.push(user)
        console.log("eklendi : " + user)
        this.loggerService.log(user);
    }
    list(){
        console.log("listelendi")
        return this.users
        
    }
    getById(id){
        this.users.find(user=>user.id === id)
        console.log("idye göre geldi.")
    }
}