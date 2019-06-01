import React, { Component } from 'react'

export default class headerContainer extends Component {
    state = {
        menuOpen: false,
    }
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Only three Days </h2>
                <button>Menu</button>
            </div>
        )
    }
}
