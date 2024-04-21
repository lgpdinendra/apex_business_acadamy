import "./AreaChartsIm.scss";

const data = [
    {
      id: 1,
      name: "Class fees must be paid within the first two weeks of each month. Late payments may incur additional fees or result in suspension from classes.",
      percentValues: 90,
    },
    {
      id: 2,
      name: "Students are expected to attend all classes punctually. Excessive absences may affect eligibility for certification or completion of the course.",
      percentValues: 65,
    },
    {
      id: 3,
      name: "Respectful and courteous behavior is expected at all times. Any form of harassment, discrimination, or disruptive behavior will not be tolerated and may result in immediate expulsion.",
      percentValues: 80,
    },
  ];
  
  const AreaProgressChart = () => {
    return (
      <div className="progress-bar">
        <div className="progress-bar-info">
          <h4 className="progress-bar-title">Important</h4>
        </div>
        <div className="progress-bar-list">
          {data?.map((progressbar) => {
            return (
              <div className="progress-bar-item" key={progressbar.id}>
                <div className="bar-item-info">
                
                  <p className="bar-item-info-name">{progressbar.id}. {progressbar.name}</p>
                  {/* <p className="bar-item-info-value">
                    {progressbar.percentValues }%
                  </p> */}
                </div>
                {/* <div className="bar-item-full">
                  <div
                    className="bar-item-filled"
                    style={{
                      width: `${progressbar.percentValues}%`,
                    }}
                  ></div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default AreaProgressChart;
  