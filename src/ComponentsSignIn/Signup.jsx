import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import email from "./img/email.png";
import mdp from "./img/padlock.png";
import name from "./img/user.png";

const inputs = [
  { type: "text", placeholder: "User Name", img: name },
  { type: "email", placeholder: "Email Adress", img: email },
  { type: "password", placeholder: "Password", img: mdp },
];

function SignUp() {
  const navigate = useNavigate();

  const handlebtn = () => {
    navigate("/signin");
  };

  return (
    <div className="sign-in-page">
      <a className="sign-in-header" href="/">
        tasker
      </a>
      <div />
      <main className="main-content-sign">
        <div className="sign-in-card">
          <h1 className="card-title">Sign up</h1>

          <form>
            {inputs.map((input, index) => (
              <div className="sign-content" key={index}>
                <div className="input-div">
                  <div className="input-content">
                    <img src={input.img} alt={input.type} />
                    <input
                      type={input.type}
                      className="info-input"
                      placeholder={input.placeholder}
                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="create-account">
              <label className="or">Already have an account?</label>
              <Link to="/signin" className="link-sign">
                sign in
              </Link>
            </div>

            <div className="btn-bot">
              <button className="btn-sign" onClick={handlebtn}>
                sign up
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
