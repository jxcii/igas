const react = require('react')
class User extends react.Component {
    constructor(props){
        super(props)
        this.state = { name : props.username }
    }
    render(){
        return <div id={this.state.name}>
            <img/>
            <p>{"Javohr"}</p>
            <img/>
        </div>
    }
}

module.exports = User;