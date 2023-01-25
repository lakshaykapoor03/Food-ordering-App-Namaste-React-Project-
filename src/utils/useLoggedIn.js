import { useEffect } from "react"
import { useState } from "react"

const isLoggedIn=()=>{
const[loggedIn,setIsLoggedIn]= useState(true)

useEffect(()=>{

    const isLoggedIn=()=>{
        setIsLoggedIn(true)
    }
    const isLoggedOut=()=>{
        setIsLoggedIn(false)
    }

    window.addEventListener("onClick", isLoggedIn);
window.addEventListener("onClick", isLoggedOut);
   ;
},[])
return loggedIn
}

export default isLoggedIn;