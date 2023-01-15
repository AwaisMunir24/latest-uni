import axios from "axios";
import React, { useEffect, useState } from "react";
import NewInput from "../../components/newInput/Newinput";
import TeacherForm from "../../components/teachers/TeacherForm";
import TeacherTable from "../../components/Teachertable/TeacherTable";
import "./Teachers.css";
const Teachers = () => {
  const [teacherLists, setTeacherLists] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [cechkTrue, setcechkTrue] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const[getCourse,setGetCourse]=useState([]);
  const [images, setImages] = useState([]);
  const addTeacher = (data) => {};

  const handleDelete = (id) => {
    console.log(id, "id get for teacher delete");
    axios
      .delete(`https://dark-gray-agouti-kit.cyclic.app/api/teacher/${id}`)
      .then((resp) => {
        getTeacherData();
        return resp;
      })
      .catch((err) => console.log(err));
  };

  const getTeacherData = () => {
    axios
      .get("https://dark-gray-agouti-kit.cyclic.app/api/teacher")
      .then((resp) => {
        if (resp?.data?.success) {
          setTeacherLists(resp.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateTeacher = (id) => {
    console.log(id, "id get by user");
    setEditForm(true);
  };
  console.log(teacherLists.results);
  useEffect(() => {
    getTeacherData();
   }, []);
  // function handleInput(e) {
  //   const newTeaching = { ...postTeacher };
  //   newTeaching[e.target.name] = e.target.value;
  //   setPostTeacher(newTeaching);
  //   console.log(e.target.name, e.target.value);
  // }
  const handleFileSelect = (e) => {
    let arr = Object.values(e.target.files);
    console.log(arr[0]);

    setImages(arr[0]);
  };
  const _handleTab = () => {
    setEditForm(false);
  };
  const handleTeacher = () => {
    setEditForm(false);
  };
  const _handleCourseIdGet=(id)=>{
    console.log(id,"course Id");

  }
  const _handleCourseOPt=(course,teacher)=>{
    console.log(course,teacher,"id Clg");

  }
  useEffect(() => {
    axios.get("https://dark-gray-agouti-kit.cyclic.app/api/course").then((resp)=>{
      if (resp?.data?.success) {
      console.log(resp.data.data,"respdat")
        setGetCourse(resp.data.data);
      }
    }).catch((err)=>console.log(err)) 


    _handleCourseIdGet()
  }, [])
  
  return (
    <>
      <>
        <section className="teacher-section">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Teacher</h4>
              </div>
            </div>
            <div className="row">
              {/* <!-- Tabs navs --> */}
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                    onClick={_handleTab}
                  >
                    Add Teacher
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    View Teacher List
                  </a>
                </li>
              </ul>
              {/* <!-- Tabs navs --> */}

              {/* <!-- Tabs content --> */}
              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <TeacherForm onSubmitTeacher={addTeacher}  />
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  {editForm ? (
                    <>
                      <form onSubmit={handleTeacher} className="text-center">
                        <div className="row">
                          <div className="col-lg-12">
                            <h4>Update Teacher Data</h4>
                          </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                          <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="mb-4">
                              <NewInput
                                type="text"
                                name="firstName"
                                className="form-control"
                                labelName="firstName"
                                // value={postTeacher.firstName}
                                // onChange={(e) => handleInput(e)}
                              />
                            </div>
                            <div className="mb-4">
                              <NewInput
                                type="number"
                                className="form-control"
                                labelName="CNIC"
                                // value={postTeacher.cnic}
                                // onChange={(e) => handleInput(e)}
                                name="cnic"
                              />
                            </div>
                            <div className="mb-4">
                              <NewInput
                                type="text"
                                className="form-control"
                                labelName="Last Qualification"
                                // value={postTeacher.lastName}
                                // onChange={(e) => handleInput(e)}
                                name="lastName"
                              />
                            </div>
                            <div className="mb-4">
                              <NewInput
                                type="text"
                                className="form-control"
                                labelName="Course"
                                // value={postTeacher.gender}
                                // onChange={(e) => handleInput(e)}
                                name="gender"
                              />
                            </div>
                            <div className="mb-4">
                              <NewInput
                                type="file"
                                className="form-control"
                                onChange={handleFileSelect}
                                name="files"
                              />
                            </div>
                            <div className="mb-4">
                              {/* <NewInput
                            type="text"
                            className="form-control"
                            labelName="Teacher Reg Id"
                            value={postTeacher._id}
                         
                          /> */}
                            </div>
                            <div className="mb-5">
                              {/* <NewInput
                            type="text"
                            className="form-control"
                            labelName="Passcode"
                            value={passcode}
                            onChange={(e) => handleInput(e)}
                          /> */}
                            </div>
                          </div>
                        </div>
                        {isUpdating ? (
                          <button className="buttonload teacher_button">
                            <i className="fa fa-spinner fa-spin"></i>Saving
                            Teacher Data
                          </button>
                        ) : (
                          <button className="teacher_button">
                            Save Teacher Data
                          </button>
                        )}
                      </form>
                    </>
                  ) : (
                    <div className="col-lg-12">
                      <table className="table teacher-tables">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Teacher Name</th>
                            <th scope="col">CNIC #</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Course</th>
                            <th scope="col" colSpan={2}>
                              Status
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {teacherLists?.results?.map((e, idx) => (
                            <TeacherTable
                              
                              key={idx}
                              id={e._id}
                              idx={idx + 1}
                              teacherprofile={e.image}
                              teachername={e.firstName}
                              cnic={e.cnic}
                              qualification={e.gender}
                              course={e.lastName}
                              blocked={e.blocked}
                              courseList={getCourse}
                              pressDlt={(id) => handleDelete(id)}
                              _handleUpdate={(id) => handleUpdateTeacher(id)}
                              _handleCourseSelection={(id)=>_handleCourseIdGet(id)}
                              _handleCourseOption={_handleCourseOPt}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
              {/* <!-- Tabs content --> */}
            </div>
          </div>
        </section>
      </>
    </>
  );
};
export default Teachers;
