import "./Users.css";
import studImg from "./images/stud.png";
import devImg from "./images/dev.png";
import teamImg from "./images/team.png";
import indivImg from "./images/indiv.png";

const usersData = [
  { title: "Students", img: studImg, alt: "Students" },
  { title: "Developers", img: devImg, alt: "Developers" },
  { title: "Teams", img: teamImg, alt: "Teams" },
  { title: "Individuals", img: indivImg, alt: "Individuals" },
];

function Users() {
  return (
    <section id="users" className="users">
      <div className="users-container">
        <h3 className="users-title">Who Is This Tool For?</h3>
        <div className="users-cards">
          {usersData.map((user, index) => (
            <div className="users-card" key={index}>
              <img src={user.img} alt={user.alt} />
              <h4>{user.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Users;
