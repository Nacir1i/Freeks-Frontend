const Button = ({ text, event, backgroundColor, color, type }) => {
  return (
    <button
      onClick={event}
      style={{ backgroundColor: backgroundColor, color: color }}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
