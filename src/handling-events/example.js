import React, { Component } from "react";

export default class ExampleEvent extends Component {
  // If true đang đăng nhập, hiện màn hình logout và ngược lại
  flag = false;
  // Cách 1 :
  //   renderHTML() {
  //     if (this.flag) {
  //       return (
  //         <div>
  //           <h3>ExampleEvent</h3>
  //           <p>Hello Cybersoft</p>
  //           <button className="btn btn-danger">Log Out</button>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           <p>Vui lòng login</p>
  //           <button className="btn btn-success">Log in</button>
  //         </div>
  //       );
  //     }
  //   }

  handleLogin = () => {
    console.log(this.flag);
    this.flag = true;
    console.log(this.flag);
  };
  // Cách 2 :
  renderHTML() {
    // Toán tử 3 ngôi Điều kiện ? "đúng" : "sai"
    return this.flag ? (
      <div>
        <h3>ExampleEvent</h3>
        <p>Hello Cybersoft</p>
        <button className="btn btn-danger">Log Out</button>
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
    // console.log("render");
    return (
      <div>
        <h3>(*) ExampleEvent </h3>
        {this.renderHTML()}
      </div>
    );
  }
}
