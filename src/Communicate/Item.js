import React from "react";

export default function Item(props) {
  return (
    <div>
      <h3>Item</h3>
      {props.children}
      {/* children là thuộc tính của Js, nhận hết tất cả data từ index truyền sang. */}
    </div>
  );
}
