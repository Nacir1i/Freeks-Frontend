const Button = ({ text, event, color }) => {
  return (
    <button className="btn" onClick={event} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
