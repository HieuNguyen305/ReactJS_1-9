import React, { Component } from "react";
import Child from "./child";
import ChildFNC from "./childFNC";
import Item from "./Item";

export default class Communicate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "CyberSoft",
      age: 5,
    };
    // This binding is necessary to make `this` work in the callback
    this.eventClicksChangeUsername = this.eventClicksChangeUsername.bind(this);
  }

  eventClicksChangeUsername() {
    this.setState({
      username: "Hieu",
      age: 10,
    });
  }

  handleresetUsername = (username) => {
    console.log(username); // log ra giá trị cybersoft dòng 6 child.js
    this.setState({
      username,
    });
  };

  render() {
    const { username, age } = this.state;
    return (
      <div>
        <h3>Communicate</h3>
        <p>
          Username: {username} - age {age}
        </p>
        <button
          className="btn btn-info"
          onClick={this.eventClicksChangeUsername}
        >
          Change username
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Child
                username={username} // đặt tên props là username hoặc bất kì tên gì.
                age={age} /* Bên trái đặt tên gì cũng được, còn bên phải thông tin cần truyền */
                user={this.state} // truyền cả 1 object
                resetUsername={this.handleresetUsername} //Lifting State Up
              />
            </div>
            <div className="col-md-4">
              <ChildFNC username={username} />
            </div>
            <div className="col-md-4">
              <Item>
                <div>
                  <p>
                    Username: {username} - Age: {age}
                  </p>
                </div>
              </Item>
            </div>
          </div>
          

          <hr />
        </div>
      </div>
    );
  }
}
