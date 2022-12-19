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
    this.eventClicksChangeUsername = this.eventClicksChangeUsername.bind(this);
  }

  eventClicksChangeUsername() {
    this.setState({
      username: "Hieu",
      age: 10,
    });
  }

  handleresetUsername = (username) => {
    console.log(username);
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
                username={username}
                age={age}
                user={this.state}
                resetUsername={this.handleresetUsername}
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
          {/* Bên trái đặt tên gì cũng được, còn bên phải thông tin cần truyền */}

          <hr />
        </div>
      </div>
    );
  }
}
