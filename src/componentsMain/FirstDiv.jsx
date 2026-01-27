import "./FirstDiv.css";
import { useNavigate } from "react-router-dom";

function FirstDiv() {
  const navigate = useNavigate();

  return (
    <section className="firstDiv fade-up">
      <div className="firstDiv-content">
        <h2>
          See your workflow, manage your tasks, and boost your productivity with
          our smart workflow tool.
        </h2>
        <button className="firstDiv-btn" onClick={() => navigate("/signIn")}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default FirstDiv;
