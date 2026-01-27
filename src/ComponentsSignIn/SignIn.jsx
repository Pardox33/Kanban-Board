import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import email from "./img/email.png";
import mdp from "./img/padlock.png";

const inputs = [
  { type: "email", placeholder: "Email Adress", img: email },
  { type: "password", placeholder: "Password", img: mdp },
];

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="sign-in-page">
      <a className="sign-in-header" href="/">
        tasker
      </a>
      <div />

      <main className="main-content-sign">
        <div className="sign-in-card">
          <h1 className="card-title">Sign in</h1>

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
              <label className="or">or</label>
              <Link to="/Signup" className="link-sign">
                create account
              </Link>
            </div>

            <div className="btn-bot">
              <button
                className="btn-sign"
                onClick={() => navigate("/NameTable")}
              >
                sign in
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
