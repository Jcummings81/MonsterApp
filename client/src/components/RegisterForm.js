import React, { Component } from 'react'

class RegisterForm extends Component {
state = { 
    username: '',
    password: '',
    email: '',
    name: ''
}

handleChange = (e) => {
    const { target:{name, value} } = e
    this.setState({ [name]: value })
  }


render() {

    return(
        <div className="form">
        <form onSubmit={(e) => 
                this.props.handleRegisterSubmit(e, this.state )} >
        <input type="text" name="username" placeholder="username"
             value={this.state.username} onChange={this.handleChange}/>
        <input type="password" name="password" placeholder="password"
             value={this.state.password} onChange={this.handleChange}/>
        <input type="text" name="email" placeholder="email"
             value={this.state.email } onChange={this.handleChange} />
        <input type="text" name="name" placeholder="name"
             value={this.state.name} onChange={this.handleChange} />

<input type="submit">Submit</input>        </form>
        </div>
    )
}

}

export default RegisterForm