import React, { Component } from 'react'

class LoginForm extends Component {
state = { 
    username: '',
    password: '',
}

handleChange = (e) => {
    const { target:{name, value} } = e
    this.setState({ [name]: value })
  }


render() {

    return(
        <div className="form">
        <form onSubmit={(e) => 
                this.props.LoginSubmit(e, this.state )} >
        <input type="text" name="username" placeholder="username"
             value={this.state.username} onChange={this.handleChange}/>
        <input type="password" name="password" placeholder="password"
             value={this.state.password} onChange={this.handleChange}/>
      
        <input type="submit">Login</input>       
        </form>
        </div>
    )
}

}

export default LoginForm