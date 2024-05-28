let current_users:string[]=["user1",'user2','admin','user3','user4'];
let new_users:string[]=["User1","user6",'user7',"admin"];
new_users.forEach((newUser)=>{
    if(current_users.some(
    (currentUser)=> currentUser.toLowerCase() === newUser.toLowerCase()

    )){
        console.log(`${newUser}will need to enter a new username`);
    }
})