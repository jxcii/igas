const react = require('react')
class User extends react.Component {
    constructor(props){
        super(props)
        this.state = { class : props.class, username: props.username }
    }
    render(){
        return <div className={this.state.class}>
            <img/>
            <p>{this.state.username}</p>
            <img/>
        </div>
    }
}

module.exports = User;