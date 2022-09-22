const Button = ({ text, event, backgroundColor, color }) => {
  return (
    <button
      onClick={event}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {text}
    </button>
  );
};

export default Button;
