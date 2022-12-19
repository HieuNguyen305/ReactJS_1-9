import React, { Component } from "react";

export default class ListKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { id: 1, username: "Hieu", age: 18 },
        { id: 2, username: "Tu", age: 20 },
        { id: 3, username: "Nam", age: 21 },
        { id: 4, username: "Lam", age: 22 },
      ],
      listCar: [
        { id: 1, nameCar: "Black Car", img: "./images/imgBlackCar.jpg" },
        { id: 2, nameCar: "Silver Car", img: "./images/imgSilverCar.jpg" },
        { id: 3, nameCar: "Red Car", img: "./images/imgRedCar.jpg" },
      ],
    };
  }

  renderListUser = () => {
    return this.state.listUser.map((user) => {
      return (
        <li key={user.id}>
          Username: {user.username} - age: {user.age}
        </li>
      );
    });
  };

  renderListCar = () => {
    const { listCar } = this.state;
    return listCar.map((car) => {
      return (
        <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.nameCar}</td>
          <td>
            <img src={car.img} width="100" alt="" />
          </td>
        </tr>
      );
    });
  };

  render() {
    // const { listUser } = this.state;
    return (
      <div>
        <h3>(*)ListKey</h3>
        {/* {this.state.listUser.map((user) => {
            return (
              <li key={user.id}>
                Username: {user.username} - age: {user.age}
              </li>
            );
          })} */}
        <ul>{this.renderListUser()}</ul>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>{this.renderListCar()}</tbody>
        </table>
      </div>
    );
  }
}

// import React, { Component } from "react";

// export default class ListKeys extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       listUser: [
//         { id: 1, username: "Nguyen", age: 18 },
//         { id: 2, username: "Van", age: 20 },
//         { id: 3, username: "Phat", age: 22 },
//         { id: 4, username: "Phi", age: 23 },
//       ],

//       listCar: [
//         { id: 1, nameCar: "Black Car", img: "./images/imgBlackCar.jpg" },
//         { id: 2, nameCar: "Silver Car", img: "./images/imgSilverCar.jpg" },
//         { id: 3, nameCar: "Red Car", img: "./images/imgRedCar.jpg" },
//       ],
//     };
//   }

//   renderListUser = () => {
//     return this.state.listUser.map((user) => {
//       return (
//         <li key={user.id}>
//           Username: {user.username} - age: {user.age}
//         </li>
//       );
//     });
//   };

//   renderListCar = () => {
//     const { listCar } = this.state;
//     return listCar.map((car) => {
//       return (
//         <tr key={car.id}>
//           <td>{car.id}</td>
//           <td>{car.nameCar}</td>
//           <td>
//             <img src={car.img} width="100" alt="" />
//           </td>
//         </tr>
//       );
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>*ListKeys</h3>

//         <ul>
//           {/* {this.state.listUser.map((user) => {
//             return (
//               <li key={user.id}>
//                 Username: {user.username} - age: {user.age}
//               </li>
//             );
//           })} */}
//           {this.renderListUser()}
//         </ul>

//         <table className="table">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Img</th>
//             </tr>
//           </thead>
//           <tbody>{this.renderListCar()}</tbody>
//         </table>
//       </div>
//     );
//   }
// }
