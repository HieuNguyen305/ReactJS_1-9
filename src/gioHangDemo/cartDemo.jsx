import React, { Component } from "react";
import Cart from "./cart";
import ProductList from "./productList";

export default class CartDemo extends Component {
  state = {
    gioHang: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
        soLuong: 2,
      },
    ],
  };

  themGioHang = (prodClick) => {
    // Thêm thuộc tính số lượng vào object prodClick
    prodClick = { ...prodClick, soLuong: 1 };

    let checkExistProd = this.state.gioHang.find(
      (p) => p.maSP === prodClick.maSP
    );
    checkExistProd
      ? (checkExistProd.soLuong += 1)
      : this.state.gioHang.push(prodClick);

    // console.log(prodClick);
    //setState
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  xoaGioHang = (maSPClick) => {
    console.log(maSPClick);

    this.state.gioHang = this.state.gioHang.filter((p) => p.maSP !== maSPClick);

    //setState
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    // console.log(maSPClick, soLuong);
    let sp = this.state.gioHang.find((spGH) => spGH.maSP === maSPClick);
    if (sp) {
      sp.soLuong += soLuong;
      if (sp.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sản phẩm khum")) {
          this.xoaGioHang(maSPClick);
        } else {
          sp.soLuong = 1;
        }
      }
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  render() {
    return (
      <div className="container">
        <Cart
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <ProductList themGioHang={this.themGioHang} />
      </div>
    );
  }
}
