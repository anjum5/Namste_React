import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurnatMenu=(resId)=>{
    const[resMenuInfo,setresMenuInfo]=useState(null)
    
    useEffect(()=>{
      fetchData()
    },[])
    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId)
     
        const json=await data.json()
        console.log("data in useRestaurnatMenu",json);
        // console.log("json",json)
        setresMenuInfo(json)


    }
    
    return resMenuInfo

}
export default useRestaurnatMenu;