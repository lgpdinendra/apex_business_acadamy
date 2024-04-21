import {TeacherClassTop, TeacherClassTable, MyclassForm } from "../../components_Teacher";


const TeachersClass = () => {
  return (
    <div className="content-area">
      <TeacherClassTop />
      <MyclassForm/>
      {/* <TeacherClassTable/> */}
    </div>
  );
};

export default TeachersClass;
