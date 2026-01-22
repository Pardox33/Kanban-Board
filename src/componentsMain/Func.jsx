import "./Func.css";

function Message({ text, align }) {
  return <div className={`func-message ${align || "left"}`}>{text}</div>;
}

const messages = [
  {
    text: "Create columns to match your workflow",
    align: "left fade-up delay-1",
  },
  { text: "Add tasks and assign priorities", align: "right fade-up delay-2" },
  { text: "Move tasks as work progresses", align: "left fade-up delay-3" },
  { text: "Stay organized and productive", align: "right fade-up delay-4" },
];
function Func() {
  return (
    <section id="func" className="func-section">
      <h1 className="h1-func">Organize Work Effortlessly</h1>
      <div className="func">
        <div className="func-container">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} align={msg.align}></Message>
          ))}
        </div>
        <div className="func-footer">
          <div className="func-circle"></div>
        </div>
      </div>
    </section>
  );
}

export default Func;
