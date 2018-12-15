import React, { Component } from 'react'

class MonsterList extends Component {
    state = {
        monsterList: null,
        monsterListLoaded: false
    }

    componentDidMount() {
        fetch('/monsters')
        .then(res => res.join)
        .then( res => {
            console.log(res);
        }).catch(err => console.log(err))
    }

    renderMonsters() {
        return this.state.monsterList.map(monster => {
            return (
                <div className="monster" key={monster.id}>
                <h2>{monster.name}</h2>
                <p> {monster.description} </p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="monster-list">
                {(this.state.monsterListLoaded)
                ? this.renderMonsters()
                : <p>Loading...</p>}
            </div>
        )

    }
}