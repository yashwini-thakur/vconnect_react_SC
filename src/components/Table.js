import React from "react";
const Table = (props) => {
  <table>
    <tr>
      <td>Name</td>
      <td>ID</td>
    </tr>
    <tr>
      <td>{props.name}</td>
      <td>{props.id}</td>
    </tr>
  </table>;
};
export default Table;
