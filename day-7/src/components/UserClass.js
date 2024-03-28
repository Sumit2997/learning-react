import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "sumit",
        location: "India",
        avatar_url: "http://dummy.com",
      },
    };
  }
  componentWillUnmount() {
    console.log("about is about to unmount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{login}</h2>
        <h3>Location:{id}</h3>
        <h4>Contact:@sumit3848</h4>
      </div>
    );
  }
}
export default UserClass;
