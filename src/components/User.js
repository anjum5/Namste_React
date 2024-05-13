import { useState } from "react";

const User=(props)=>{

    const [count]=useState(0)
    return(
        <div className="user-card">
            <h3>user of functional componet</h3>
             <h3>name:{props.name}</h3>
             <h3>location:{props.location}</h3>
             <h3>count={count}</h3>
        </div>
    )   
}

export default User;