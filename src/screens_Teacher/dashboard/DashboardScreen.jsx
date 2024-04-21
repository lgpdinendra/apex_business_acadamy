import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components_Teacher";

const DashboardScreen = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default DashboardScreen;
