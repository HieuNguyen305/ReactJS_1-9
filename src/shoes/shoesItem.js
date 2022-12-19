import React, { Component } from "react";

export default class ShoesItem extends Component {
  getDetailShoes = () => {
    this.props.getDetail(this.props.shoes);
  };
  render() {
    const { shoes } = this.props;
    // console.log(shoes);
    return (
      <div className="col-md-4 mt-4">
        <div className="card">
          <img className="card-img-top" src={shoes.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{shoes.name}</h4>
            <p className="card-text">{shoes.price}$</p>
            <button className="btn btn-info" onClick={this.getDetailShoes}>
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
