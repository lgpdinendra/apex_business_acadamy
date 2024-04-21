
import {ClassTop, ClassForm, ClassTable, ClassTableMarks, PieChartMarks } from "../../components_Teacher";



const Class = () => {
  return (
    <div className="content-area">
      <ClassTop/>
      <ClassForm/>
      <ClassTable/>
      <ClassTableMarks/>
      <PieChartMarks/>
    </div>
  );
};

export default Class;
