import React, { Component } from "react";

export default class State_Lifecycle extends Component {
  //   flag = false;
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
    
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin = () => {
    this.setState({ flag: true }, () => {
      console.log(this.state.flag);
    });
  };
  // Hàm setState asynchoronus, nên phải truyền param thứ 2 là 1 call back func để giải quyết async

  // handleLogOut = () => {
  //   this.setState({ flag: false });
  // };

  // Nếu sử dụng phương thức handleLogout(){} thì dùng dòng lệnh bind ở dòng 11, giống window.
  handleLogout() {
    this.setState({
      isLogin: false,
    });
  }

  renderHTML() {
    return this.state.flag ? (
      <div>
        <h3>ExampleEvent</h3>
        <p>Hello Cybersoft</p>
        <button className="btn btn-danger" onClick={this.handleLogOut}>
          Log Out
        </button>
      </div>
    ) : (
      <div>
        <p>Vui lòng login</p>
        <button className="btn btn-success" onClick={this.handleLogin}>
          Log in
        </button>
      </div>
    );
  }
  render() {
    // console.log("render state");
    return (
      <div>
        <h3>(*) State </h3>
        {this.renderHTML()}
      </div>
    );
  }
}
