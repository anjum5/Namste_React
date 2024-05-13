import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>Opps!!!!Something Went wrong
            <h1>{err.status}</h1>
        </div>
        
    )
}
export default Error;