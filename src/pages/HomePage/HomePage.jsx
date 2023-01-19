import React, { Component } from 'react'
import Child from './Child';
import ChildPure from './ChildPure';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        console.log("constructor - Chạy 1 lần duy nhất");
        this.interval = null
    }

    UNSAFE_componentWillMount() {
        console.log("componentWillMount - Chạy 1 lần duy nhất");
    }

    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentDidMount() {
        //call API
        console.log("componentDidMount - Chạy 1 lần duy nhất");
        this.interval = setInterval(() => {
            console.log("hello");
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        if (nextState.number === 2) {
            return false;
        }
        return true;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        console.log("render");
        return (
            <div>
                <h3>Number: {this.state.number}</h3>
                <button className='btn btn-primary' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>Click</button>
                <hr />
                <Child number={this.state.number} />
                <hr />
                <ChildPure />
            </div>

        )
    }
}
