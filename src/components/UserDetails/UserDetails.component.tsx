import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header.component";
import Sidebar from "../Sidebar/Sidebar.component";
import UserDetail from "../UserDetail/UserDetail.component";
import { useEffect } from "react";
import "./UserDetails.scss";

const UserDetails = () => {
  const data = useLoaderData();
  console.log("from", data)
  const { id } = useParams();
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data, id]);
  console.log(data);
  return (
    <div>
      <Header />
      <div className="user-detail-container">
        <Sidebar userDetailsPage />
        <UserDetail />
      </div>
    </div>
  );
};
export default UserDetails;
