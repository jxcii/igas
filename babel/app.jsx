const ReactDOM = require("react-dom/client");
const React = require("react");
const User = require("./user.jsx");
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <User id='username'/>
);