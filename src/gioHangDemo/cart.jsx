import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div>
        {/* <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Launch
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã Sản Phẩm</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số Lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  {/* tbody chỉnh lại */}
                  <tbody>
                    {gioHang.map((spGioHang) => {
                      return (
                        <tr key={spGioHang.maSP}>
                          <td>1</td>
                          <td>
                            <img src={spGioHang.hinhAnh} alt="" width={50} />
                          </td>
                          <td>{spGioHang.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                tangGiamSoLuong(spGioHang.maSP, -1);
                              }}
                            >
                              -
                            </button>
                            {spGioHang.soLuong}
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                tangGiamSoLuong(spGioHang.maSP, 1);
                              }}
                            >
                              +
                            </button>
                          </td>
                          <td>{spGioHang.giaBan.toLocaleString()}</td>
                          <td>
                            {(
                              spGioHang.soLuong * spGioHang.giaBan
                            ).toLocaleString()}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger mx-2"
                              onClick={() => {
                                xoaGioHang(spGioHang.maSP);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
