import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props); //we always have to use this
    // console.log(props);
    this.state = {
      userInfo: {
        name: "sumit",
        location: "India",
        avatar_url: "http://dummy.com",
      },
    };
    // console.log(this.props.name+"constructed");
  }
  // async componentDidMount() {
  // console.log(this.props.name+"mounted");
  //   const data = await fetch("https://api.github.com/users/Sumit2997");
  //   const json = await data.json();
  //   console.log(json);
  //   this.setState({
  //     userInfo: json,
  //   });
  // }
  componentWillUnmount() {
    console.log("about is about to unmount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    const { login, id, avatar_url } = this.state.userInfo;
    // const { count, count1 } = this.state;
    // console.log(name + "rendered");
    // debugger;
    return (
      <div className="user-card">
        {/* <h1>Count={count}</h1> */}
        {/* <button onClick={()=>{
            // this.state.count=this.state.count+1; never directly update state variable directly
            this.setState({
                count:this.state.count+1,
            });
        }}>click</button> */}
        <h4>#Using Class Component</h4>
        <h2>Name:{login}</h2>
        <h3>Location:{id}</h3>
        <h4>Contact:@sumit3848</h4>
        {/* <img src={avatar_url} alt="" />  */}
      </div>
    );
  }
}
export default UserClass;
/*
-constructor is called
-render
    -html has dummy data
-componentditmount is called
    -api call
    -this.setState()
---update
-render
  -html is loaded with api data
  -componentdidupdate
*/
