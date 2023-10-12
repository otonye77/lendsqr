import { useNavigation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { dashboardMenuState } from "../../atoms/Dashboard";
import { useRecoilValue } from "recoil";
import UsersInformation from "../UserInformations/UserInformations.component";
import UsersTable from "../UserTable/UserTable.component";
import "./Dashboard.scss";

const DashboardContent = () => {
    const navigation = useNavigation();
    const {state} = navigation;
    console.log(state);
    const active = useRecoilValue(dashboardMenuState);
    if (state === "loading") {
        return (
          <div className="loader-container">
            <BounceLoader color="#39cdcc" size={"15rem"} />
          </div>
        );
      } else {
        return (
          <div className="right-container">
            {active === "Users" ? (
              <>
                <p className="heading">Users</p>
                <UsersInformation />
                <UsersTable />
              </>
            ) : (
              <div className="no-content">No Data Available to Display</div>
            )}
          </div>
        );
      }
}
export default DashboardContent;