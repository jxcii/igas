const ReactDOM = require("react-dom/client")
const React = require("react")
const User = require("./user.jsx")
let users = []
fetch('/gjwfwhf39201920.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        data.forEach(x => {
            users.push(<User class='user' username={x.username} />)
        });
        ReactDOM.createRoot(
            document.getElementById("app")
        )
            .render(
                 users 
            );

    });