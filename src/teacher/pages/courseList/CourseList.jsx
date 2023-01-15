import axios from "axios";
import React from "react";
import { useState ,useEffect} from "react";
import AbsCourseList from "../../Components/absCourseList/AbsCourseList";

const CourseList = () => {
  const [courseList, setCourseList] = useState([ ]);
  useEffect(() => {
    axios.get("https://dark-gray-agouti-kit.cyclic.app/api/teacher").then((resp)=>{
      if (resp?.data?.success) {
        setCourseList(resp.data);
      }
    }).catch((err)=>console.log(err))
  }, [])
  
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr #:</th>
                    <th>Course</th>
                    <th>Subject</th>
                    <th>Attendance Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {courseList?results?.map((e, idx) => (
                    <>
                      <AbsCourseList
                        idx={idx + 1}
                        key={idx}
                        id={e.id}
                        courseListName={e.}
                        subjectListName={e.}
                        open={e.open}
                        close={e.close}
                      />
                    </>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseList;
