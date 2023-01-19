import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameChild: "Cybersoft",
            numberChild: 5,
        }
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log("getDerivedStateFromProps", nextProps, currentState);
        if (nextProps.number === currentState.numberChild) {
            // Cập nhật state => usernameChild = "NMMH"
            return {
                usernameChild: "NMMH"
            }
        }
        return null;
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps", nextProps);
    // }
    render() {
        console.log("Child");
        return (
            <div>
                <h3>Child</h3>
                <p>UsernameChild: {this.state.usernameChild} - numberChild: {
                    this.state.numberChild
                } </p>
            </div>
        )
    }
}
