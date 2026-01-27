import "./Features.css";

const featuresInfo = [
  {
    title: "Visual Task Board",
    description: "Organize tasks using customizable columns",
  },
  {
    title: "Task Creation & Editing",
    description: "Add, update, and manage tasks easily",
  },
  {
    title: "Flexible Workflow",
    description: "Adapt the board to your process",
  },
  {
    title: "Progress Tracking",
    description: "See what's done and what's in progress",
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <h3 className="features-title">Key Features</h3>

        <div className="features-cards">
          {featuresInfo.map((feature, index) => (
            <div key={index} className="features-card">
              <h4 className="h4-feat">{feature.title}</h4>
              <p className="p-feat">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
