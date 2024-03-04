import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1', { id: "heading" }, "Hello World");
// const jsxHeading = <h1 id="heading" className="head">Hello World</h1>;
// react element
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello World
  </h1>
);
/*
React component
->class based component - old
->functional component - new
react functional compenent is just js function (always name it in capital)
it is a function returning react element(jsx code)
to render use <component_name/>
*/
const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Hello
    </h1>
  );
};
const title = (
  <h1 className="head" tabIndex="5">
    HI
  </h1>
);
function HeadingComponent() {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      {title}
      <h1 className="heading">Hello Again</h1>
      {console.log(title)}
    </div>
  );
}
// <Title/> can  also be written as <Title></Title> or {Title()}
// const HeadingComponent = () => <h1 id="heading" className="head">Hello Again</h1> this can be also written if there is only one statement i.e return
// using {} we can write any js code in jsx
// jsx takes care of injection attacks (XSS cross site scripting attack) ,jsx sanitizes data
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

/*
npm init
npm install -D parcel
npm i react
npm i react-dom
npx parcel index.html
npm run start or npm start - see scripts in packages
react element->object->html element 
jsx is not html in js
jsx is html or xml like syntax
jsx is transpiled before it reaches the js engine and this job is done by parcel(by babel) 
how jsxHeading is working[jsx->react.creatElement->react element->JS object->html element]
attributes in jsx are in camelcase
for multi lien jsx use ()
*/
