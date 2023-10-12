import DashboardContent from "../../components/DashboardContent/Dashboard.component";
import Header from "../../components/Header/Header.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <DashboardContent />
            </div>
        </div>
    )
}
export default Dashboard;