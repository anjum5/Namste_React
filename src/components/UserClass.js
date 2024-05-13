import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
      console.log(this.props)
      console.log("child constructor")
      this.state={
        userInfo:{
            name:"dummy",
            location:"india",
            avtar:""
        }
      

        // count:0,
        // count1:1
      }
    }
    async componentDidMount(){
        console.log("child component did mount")
        const data=await fetch(" https://api.github.com/users/anjum5")
        const json=await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
        
    

    render(){
        const {name,location}=this.props
        // const{count,count1}=this.state
        console.log("child render")
        return(
            <div className="user-card">
                <h3>User of class componet</h3>
                <h3>name:{this.state.userInfo.name}</h3>
                <h3>location: {this.state.userInfo.location}</h3>
                {/* <h3>count={count}</h3>
                <h3>count1={count1}</h3> */}
                {/* <button className="btn-login" onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count1:this.state.count1+2
                    })
                }}>count increase</button> */}


            </div>
        )
    }
       
    
}
export default UserClass
    