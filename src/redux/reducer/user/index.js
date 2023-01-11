const initialState = {
  userList: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Nguyen Van A",
      username: "vana",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
  ],
  keyword: "",
  userEdit: null,
};

const userReducer = (state = initialState, action) => {
  // Arrow Func + Default Params
  console.log(action);
  switch (action.type) {
    case "DELETE_USER": {
      // clone userlist từ state
      let userList = [...state.userList];
      // tìm vị trí
      const index = userList.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        // xóa phần tử tại vị trí tìm được
        userList.splice(index, 1);
      }
      // Update State
      state.userList = userList;
      return { ...state };
      // UI không render lại do ảnh hưởng từ bộ nhớ tham chiếu Object và Array, clone ra 1 giá trị mới để cập nhật lại state ...
    }
    case "SUBMIT": {
      let userList = [...state.userList];
      if (action.payload.id) {
        //update
        const index = userList.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        //add
        const userNew = { ...action.payload, id: new Date().getTime() };
        userList.push(userNew);
      }
      state.userList = userList;
      return { ...state };
    }
    default:
      return { ...state }; // Spread Operator
  }
};
export default userReducer;
