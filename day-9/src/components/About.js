import User from "./User";
import UserClass from "./UserClass";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Component } from "react";
const About = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>you are offline</h1>;
  return (
    <div>
      <h1>About</h1>
      <h2>This is an About Page</h2>
      {/* <User name={"Sumit"} location={"India"}/> */}
      <User  name={"Sumit"} location={"India"}/>
    </div>
  );
};
export default About;