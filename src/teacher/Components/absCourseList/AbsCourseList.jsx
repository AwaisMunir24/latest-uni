import React from "react";

const AbsCourseList = (props) => {
  const { idx, courseListName, subjectListName,open,close } = props;
  return (
    <>
      <tr>
        <td>{idx}</td>
        <td>{courseListName}</td>
        <td>{subjectListName}</td>
        <td>
        <select
            className="form-select form-select-lg mb-0 select_option_teacher"
            aria-label=".form-select-lg example"
          >
          
            <option value="2">{close}</option>
            <option value="1">{open}</option>
          
          
          </select>
        
        </td>
      </tr>
    </>
  );
};

export default AbsCourseList;
