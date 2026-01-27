import "./Users.css";
import stud from "./images/stud.png";
import dev from "./images/dev.png";
import team from "./images/team.png";
import indiv from "./images/indiv.png";

const usersData = [
  { title: "Students", img: stud, alt: "Students" },
  { title: "Developers", img: dev, alt: "Developers" },
  { title: "Teams", img: team, alt: "Teams" },
  { title: "Individuals", img: indiv, alt: "Individuals" },
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
