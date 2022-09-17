const Button = ({ text, event, color }) => {
  return (
    <button onClick={event} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
