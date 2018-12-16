import React, {Component} from 'react'
import Auth from '../modules/Auth';

class Dashboard extends Component {
    state = { 
        monstersLoaded: false,
    }

    componentDidMount(data) {

        fetch('/profile', {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorizarion': `Token ${Auth.getToken()}`,
            }
        }).then(res => res.json())
        .then(res => {
            this.setState({
                myMonsters: res.monsters,
                monstersLoaded: true,
            })
        }).catch(err => console.log(err))
        debugger
    }

    render() {
        return (
            <div className="dash" >
                <h1>Testing</h1>
            </div>
        )
    }
}

export default Dashboard