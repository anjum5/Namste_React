import React from "react";
// import User from "./User";
import UserClass from "./UserClass"



class About extends React.Component{
    constructor(){
        super()
      
      //console.log("parent constructor")
     
    }
    componentDidMount(){
        // console.log("parent component did mount")
    }
    render(){
        // console.log("parent render")
        return(
            <div>
              <div>About page</div>
             {/* <User name={"Anjum Dhalait"} location={"Karad"}/> */}
             <UserClass name={"Anjum Salim Dhalait"} location={"Rahimatpur"}/>
            </div>
        )     
    }
}

export default About;