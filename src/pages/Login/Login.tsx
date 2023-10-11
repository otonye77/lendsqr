import { useState } from "react";
import logo from "../../assets/login-logo.png";
import image from "../../assets/login-image.png";
import { Link, useNavigation } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const Login = () => {
  const [data, setData] = useState({email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { state } = navigation;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {value, name}} = event;
    setData((prevState) => ({...prevState, [name]: value}))
  }
  const passwordVisibility = () => {
    setShowPassword(!showPassword)
  }
  console.log(data.email);

  return (
    <div className="login-container">
      <div className="leftside-container">
        <img className="logo" src={logo} alt="" />
        <img className="logo" src={image} alt="" />
      </div>
      <div className="rightside-container">
        <img className="rightside-logo" src={logo} alt="" />
        <h2 className="welcome-text">Welcome!</h2>
        <p className="login-text">Enter details to login.</p>
        <form action="">
        <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="email-input"
            onChange={handleChange}
            value={data.email}
          />
          <div className="password-container">
          <input
              required
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password-input"
              onChange={handleChange}
              value={data.password}
            />
            <button
              disabled={data.password.length === 0}
              className="show-password-button"
              onClick={passwordVisibility}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
          <p className="forgot-password-text">FORGOT PASSWORD?</p>
          {!data.email || !data.password ? (
            <Link to={'/'} className="login-link">
                LOGIN
            </Link>
          ) : (
            <Link to={'/dashboard'} className='link'>
                {state === "loading" ? (
                    <SyncLoader size={"0.8rem"} color="#ffffff" />
                ) : (
                    'LOG IN'
                )}
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
