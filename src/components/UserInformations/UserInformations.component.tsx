import UsersCard from "../UsersCard/UsersCard.component";
import users from "../../assets/icons/users_icon.png";
import activeUsers from "../../assets/icons/active_users.png";
import usersWithLoans from "../../assets/icons/users_with_loans.png";
import usersWithSavings from "../../assets/icons/users_with_savings.png";
import "./UserInformations.scss";

const UserInformations = () => {
  return (
    <div className="user-information-container">
      <UsersCard name="USERS" icon={users} amount={2452} />
      <UsersCard name="ACTIVE USERS" icon={activeUsers} amount={2452} />
      <UsersCard name="USERS WITH LOANS" icon={usersWithLoans} amount={2452} />
      <UsersCard
        name="USERS WITH SAVINGS"
        icon={usersWithSavings}
        amount={102452}
      />
    </div>
  );
};
export default UserInformations;
