import React, { Component } from "react";
const TeacherTable = (props) => {
  const {
    id,
    _id,
    teacherprofile,
    teachername,
    cnic,
    qualification,
    course,
    passcode,
    pressDlt,
    blocked,
    _handleUpdate,
    idx,
    courseList,
    _handleCourseSelection,
    _handleCourseOption,
  } = props;

  return (
    <>
      <tr>
        <td>{idx}</td>
        <td>
          <div>
            <img
              src={"https://good-erin-ox-suit.cyclic.app/" + teacherprofile}
              alt="iamge"
              className="img-fluid"
            />
          </div>
        </td>
        <td>
          <h4>{teachername}</h4>
        </td>
        <td>
          <p className="m-0">{cnic}</p>
        </td>
        <td>
          <p className="m-0">{qualification}</p>
        </td>
        <td>
          <select onClick={() => _handleCourseSelection(id)}>
            <option>Plase Select Course </option>
            {courseList?.map((e, idx) => (
              <option onClick={() => _handleCourseOption(e._id,id)}>
                {e.title}
              </option>
            ))}
          </select>
        </td>
        <td className="m-0">{passcode}</td>

        <td>
          {" "}
          <select
            className="form-select form-select-lg mb-0 select_option_teacher"
            aria-label=".form-select-lg example"
          >
            {/* <option selected className="">
              Select Status
            </option> */}
            {/* <option value="blocked">{blocked}</option> */}
            {blocked ? (
              <option value="blocked">Blocked</option>
            ) : (
              <option value="blocked">Un Blocked</option>
            )}
          </select>
        </td>
        <td>
          <i
            className="fa-solid fa-circle-minus"
            title="Delete"
            data-mdb-toggle="tooltip"
            onClick={() => pressDlt(id)}
          ></i>
          <i
            className="fa-solid fa-user-pen mx-2"
            title="Update"
            onClick={() => _handleUpdate(id)}
          ></i>
        </td>
      </tr>
    </>
  );
};
export default TeacherTable;
