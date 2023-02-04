import { createContext } from "react";



const UserContext= createContext({user:{  name:"Lakshay",
email:"lakshay@gmail.com"}
})

UserContext.displayName= "UserContext";

export default UserContext;