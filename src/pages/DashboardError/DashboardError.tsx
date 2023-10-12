import Header from "../../components/Header/Header.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";

const DashboardErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="error-body">
        <Sidebar />
        <h2>
          Users information currently unavailable. Please check your network and
          refresh.
        </h2>
      </div>
    </div>
  );
};

export default DashboardErrorPage;
