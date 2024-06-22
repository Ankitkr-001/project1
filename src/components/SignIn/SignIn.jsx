import React, { useState } from "react";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import painter from "../../assets/artist.png"
import book from "../../assets/book.png"
import pokemon from "../../assets/pokemon.png"
import singing from "../../assets/singing.png"


const SignIn = () => {
  const [login, setLogin] = useState(false);

  const toggle = () => {
    login ? setLogin(false) : setLogin(true);
  };

  return (
    <>
      <div className={`signin ${login ? "hidden" : ""}`}>
        <div className="signIn_text">
          <h2 className={`signIn-btn ${login ? "signIn-btn-color" : ""}`}>
            Sign In
          </h2>
          <h2
            className={` ${login ? "signUp-btn-color" : "signUp-btn"}`}
            onClick={toggle}
          >
            Join In
          </h2>
        </div>
        <div className="button">
          <button className="google-btn">
            <FontAwesomeIcon className="g-icon-color" icon={faGoogle} />{" "}
            <h3>Continue With Google</h3>
          </button>
          <button className="google-btn ">
            <FontAwesomeIcon className="fb-icon-color" icon={faFacebook} />
            <h3>Continue With Facebook</h3>
          </button>
        </div>

        <div className="or">
          <h1></h1>
          <span>or connect with</span>
        </div>

        <div>
          <form className="input" action="">
            <div className="form-group">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="check">
              <div className="check-box">
                <input type="checkbox" id="remember-me" name="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="forget-pass">
                <FontAwesomeIcon icon={faLock} />
                <span>Forgot Password?</span>
              </div>
            </div>
            <div className="login-btn">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
        <div className="home_logo1">
          <img className="home_img" src={singing} alt="" />
          <img className="home_img" src={pokemon} alt="" />
          <img className="home_img" src={book} alt="" />
          <img className="home_img" src={painter} alt="" />
        </div>
      </div>

      <div className={`signin ${login ? "" : "hidden"}`}>
        <div className="signIn_text">
          <h2
            className={`signIn-btn ${login ? "signIn-btn-color" : ""}`}
            onClick={toggle}
          >
            Sign In
          </h2>
          <h2 className={` ${login ? "signUp-btn-color" : "signUn-btn"}`}>
            Join In
          </h2>
        </div>
        <div className="button">
          <button className="google-btn">
            <FontAwesomeIcon icon={faGoogle} /> <h3>Continue With Google</h3>
          </button>
          <button className="google-btn">
            <FontAwesomeIcon icon={faFacebook} />
            <h3>Continue With Facebook</h3>
          </button>
        </div>

        <div className="or">
          <h1></h1>
          <span>or connect with</span>
        </div>

        <div>
          <form className="input" action="">
            <div className="form-group">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="check-join">
              <div className="pass-strength">
                <span>Password Strength</span>
              </div>
            </div>
            <div className="join-text">
              By continuing you agree <span>Term of Service </span> and{" "}
              <span>Privacy Policy </span>
            </div>
            <div className="login-btn-join">
              <button type="submit">Agree and Continue</button>
            </div>
          </form>

          <div className="home_logo1">
          <img className="home_img" src={singing} alt="" />
          <img className="home_img" src={pokemon} alt="" />
          <img className="home_img" src={book} alt="" />
          <img className="home_img" src={painter} alt="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
