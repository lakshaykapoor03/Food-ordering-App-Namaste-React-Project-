import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   count: 1,
    //   count2: 2,
    console.log("child constructor called")

    this.state={
      userInfo:{
  name:"dummy Name",
  location:"location"
      }
    }
    };
  
    
async componentDidMount(){
  this.timer=setInterval(()=>{
    return(
      console.log("Namaste react")
    )
  },1000)
  //API Calls
  // const data= await fetch("https://api.github.com/users/lakshaykapoor03")
  // const json= await data.json()
  // this.setState({
  //   userInfo:json,
  // })
console.log("component didUpdate")

  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    console.log("chid rendr called")
    return (
      <>
        <h1>Profile class component</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h3>{this.state.userInfo.name}</h3>
        <h3>{this.state.userInfo.bio}</h3>
        <UserContext.Consumer>
          {({user})=>(<h1>{user.name} & {user.email}</h1>)}
        </UserContext.Consumer>
      </>
    );
  }
}

export default Profile;
