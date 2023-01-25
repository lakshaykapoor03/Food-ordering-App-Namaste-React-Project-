import React from 'react'
import Profile from './ProfileClass';

// function About() {
//   return (
//     <div>
//         <h1>About us</h1>
//         <p>This is namaste react live course.</p>
//     </div>
//   )
// }

class About extends React.Component {
constructor(props) {
  super(props);
  console.log("constructor called")

}

componentDidMount(){
  console.log("parent comp did mount called")
}


render(){
  console.log("render called")
  return(
    <div>
         <h1>About us</h1>
           <p>This is namaste react live course.</p>
           <Profile name={"first child"} />
         </div>
  )
}
}

export default About;