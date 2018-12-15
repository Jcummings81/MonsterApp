import React, { Component } from 'react'

class LoginForm extends Component {
state = { username: '', password: ''}

handleChange = (e) => {
    const { target:{name, value} } = e
    this.setState({ [name]: value })
  }

render() {
return (
    <div className="form">
        <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
        <input name={this.state.username} placeholder={"Username"} onChange={this.handleChange} /> 
        <input name={this.state.password} placeholder={"Password"} onChange={this.handleChange} />
        <button>Login</button>
        </form>
    </div>
)
}
}

export default LoginForm