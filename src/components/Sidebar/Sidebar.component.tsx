import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { dashboardMenuState } from "../../atoms/Dashboard";
import breifcase from "../../assets/icons/briefcase.png";
import dashboard from "../../assets/icons/home.png";
import users from "../../assets/icons/users.png";
import guarantors from "../../assets/icons/guarantors.png";
import loans from "../../assets/icons/loans.png";
import decisions from "../../assets/icons/decision-models.png";
import savings from "../../assets/icons/savings.png";
// import requests from "../assets/icons/loan-requests.png";
import whitelist from "../../assets/icons/whitelist.png";
import karma from "../../assets/icons/karma.png";
import transactions from "../../assets/icons/transactions.png";
import services from "../../assets/icons/services.png";
import settlements from "../../assets/icons/settlements.png";
import reports from "../../assets/icons/reports.png";
import audit from "../../assets/icons/audit.png";
import logout from "../../assets/icons/logout.png";
import preferences from "../../assets/icons/preferences.png";
import savingsProduct from "../../assets/icons/savings_products.png";
import feesAndCharges from "../../assets/icons/fees_and_charges.png";
import serviceAccount from "../../assets/icons/service_account.png";
import feesAndPricing from "../../assets/icons/fees_and_pricing.png";
import SidebarItems from "../SidebarItems/SidebarItems.component";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SidebarProps {
  userDetailsPage?: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const navigate = useNavigate();
  const [active, setActive] = useRecoilState(dashboardMenuState);
  return (
    <div className="side-bar-container">
      <div className="switch-organization">
        <img src={breifcase} alt="briefcase icon" />
        <p className="text">Switch Organizations</p>
        <KeyboardArrowDownIcon style={{ color: "#21407D" }} />
      </div>
      <SidebarItems title="Dashboard" icon={dashboard} setActive={setActive} />
      <p className="title">CUSTOMERS</p>
      <div className="grouping">
        <div onClick={() => setActive("Users")}>
        <SidebarItems title="Users" icon={users} active={active} />
        </div>
        <div onClick={() => {
            setActive("Guarantors")
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }}>
            <SidebarItems title="Guarantors" icon={guarantors} active={active} />
        </div>
        <div
          onClick={() => {
            setActive("Loans");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
             <SidebarItems title="Loans" icon={loans} active={active} />
        </div>
        <div
          onClick={() => {
            setActive("Decision Models");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
            <SidebarItems title="Decision Models" icon={loans} active={active} />
        </div>
        <div
          onClick={() => {
            setActive("Savings");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
            <SidebarItems title="Savings" icon={loans} active={active} />
        </div>
        <div
          onClick={() => {
            setActive("Loan Requests");

            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
             <SidebarItems title="Loan Requests" icon={loans} active={active} />
        </div>
        <div
          onClick={() => {
            setActive("Whitelist");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
             <SidebarItems title="Whitelist" icon={loans} active={active} />
        </div>
        <div
          onClick={() => {
            setActive("Karma");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
            <SidebarItems title="Karma" icon={loans} active={active} />
        </div>
      </div>
      <p className="title">BUSINESSES</p>
      <div className="grouping">
        <div
          onClick={() => {
            setActive("Organization");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems title="Organization" icon={breifcase} active={active} />
        </div>

        <div
          onClick={() => {
            setActive("Loan Products");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          {/* <SidebarItems title="Loan Products" icon={requests} active={active} /> */}
        </div>

        <div
          onClick={() => {
            setActive("Savings Products");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems
            title="Savings Products"
            icon={savingsProduct}
            active={active}
          />
        </div>

        <div
          onClick={() => {
            setActive("Fees and Charges");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems
            title="Fees and Charges"
            icon={feesAndCharges}
            active={active}
          />
        </div>

        <div
          onClick={() => {
            setActive("Transactions");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems
            title="Transactions"
            icon={transactions}
            active={active}
          />
        </div>

        <div
          onClick={() => {
            setActive("Services");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems title="Services" icon={services} active={active} />
        </div>

        <div
          onClick={() => {
            setActive("Service Account");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems
            title="Service Account"
            icon={serviceAccount}
            active={active}
          />
        </div>

        <div
          onClick={() => {
            setActive("Settlements");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems title="Settlements" icon={settlements} active={active} />
        </div>

        <div
          onClick={() => {
            setActive("Reports");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems title="Reports" icon={reports} active={active} />
        </div>
      </div>
      <p className="title">SETTINGS</p>
      <div className="grouping">
        <div
          onClick={() => {
            setActive("Preferences");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems title="Preferences" icon={preferences} active={active} />
        </div>

        <div
          onClick={() => {
            setActive("Fees and Pricing");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems
            title="Fees and Pricing"
            icon={feesAndPricing}
            active={active}
          />
        </div>

        <div
          onClick={() => {
            setActive("Audit Logs");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <SidebarItems title="Audit Logs" icon={audit} active={active} />
        </div>
      </div>
      {props.userDetailsPage && (
        <>
          <div className="divider"></div>

          <div>
            <div className="logout" onClick={() => navigate("/")}>
              <img src={logout} alt={`${logout} icon`} />
              <p className="">Logout</p>
            </div>

            <p className="version">v1.2.0</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Sidebar;
