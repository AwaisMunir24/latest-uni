import React, { Component } from "react";
const Users = (props) => {
  const {id,studentName,image,fatherName ,cnic,address,age,studentId,password ,pressDltStudent,_handleUpdateStudent,idx} = props;
  return (
    <>
      <tr>
      <td>{idx}</td>
      <td>{studentName}</td>
     
      <td>{fatherName}</td>
      <td>{cnic}</td>
      <td>{address}</td>
      <td>{age}</td>
      <td>{studentId}</td>
      <td>{password}</td>
      <td className="text-center">
          <i className="fa-solid fa-circle-minus" title="Delete" onClick={()=>pressDltStudent(id)}></i>
          <i className="fa-solid fa-user-pen mx-3" title="Update" onClick={()=>_handleUpdateStudent(id)}></i>
        </td>
      </tr>
    </>
  );
};
export default Users;
