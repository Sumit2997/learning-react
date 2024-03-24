import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is an About Page</h2>
//       {/* <User name={"Sumit"} location={"India"}/> */}
//       <UserClass  name={"Sumit"} location={"India"}/>
//     </div>
//   );
// };
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructed");
  }
  componentDidMount() {
    //this will be called when the component is completely mounted on to the web page
    // console.log("parent mounted");

  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is an About Page</h2>
        <UserClass name={"Sumit"} location={"India"}/>
        {/* <UserClass name={"first"} location={"India"} />
        <UserClass name={"second"} location={"India"} /> */}
      </div>
    );
  }
}
export default About;
/*
-parent constructor
-parent render
 -first child constructor 
 -first child render

 -second child constructor 
 -second child render
<DOM is updated in single batch>
 -first child componentdidmount
 -second child componentdidmount
- parent componentdidmount
*/