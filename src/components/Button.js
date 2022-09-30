const Button = ({ text, event, type }) => {
  return (
    <button onClick={event} type={type}>
      {text}
    </button>
  );
};

export default Button;
