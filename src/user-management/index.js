import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: data,
      keyword: "",
    };
  }

  _findIndex = (id) => {
    this.state.userList.findIndex((user) => {
      return user.id === id;
    });
  };

  /**
   * Search
   */
  handleSearch = (keyword) => {
    console.log(keyword);
    this.setState({
      keyword,
    });
  };

  /**
   * Xóa User từ User Item -> User -> Home
   */
  handleDelete = (userId) => {
    console.log(userId);
    const index = this._findIndex(userId);
    // return lại giá trị this.state.userList tham chiếu vào ô nhớ tạm, Xem lại video anh khải giảng 23/12/22
    if (index !== -1) {
      let userList = this.state.userList;
      userList.splice(index, 1);
      this.setState({
        userList,
      });
    }
  };

  /**
   * Submit User
   *  */
  handleSubmitUser = (user) => {
    const userNew = { ...user, id: new Date().getTime() };
    let userList = [...this.state.userList, userNew];
    console.log(userNew);
    this.setState({
      userList,
    });
  };

  render() {
    let { userList, keyword } = this.state;
    //filter
    userList = this.state.userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleSearch} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={userList} getUserDelete={this.handleDelete} />
        <Modal getUserSubmit={this.handleSubmitUser} />
      </div>
    );
  }
}

export default Home;
