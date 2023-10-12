import ProfilePicture from "../../assets/profile-picture.png";
import logo from '../../assets/dashboard-logo.png';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRecoilState } from "recoil";
import { filterState } from "../../atoms/Dashboard";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useRecoilState(filterState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  }
  return (
    <div className="header">
      <div className="left-section">
        <div className="logo-image">
          <img
            src={logo}
            alt="lendsqr logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="search-container">
            <div className="search-input">
            <input
              type="text"
              value={filterValue || ""}
              placeholder="Search for anything"
              onChange={handleChange }
            />
            </div>
            <div className="green-search-icon">
             <SearchIcon style={{ color: 'white' }} />
          </div>
        </div>
      </div>
      <div className="right-section">
        <p className="docs">Docs</p>
        <div className="icon">
          <NotificationsNoneIcon style={{ color: '#21407D' }} />
        </div>
        <div>
          <img className="profile-image" src={ProfilePicture} alt="" />
        </div>
        <div className="action-btn">
          <p className="username">Ayodeji</p>
          <div className="drop">
            <ArrowDropDownIcon style={{ color: '#21407D' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
