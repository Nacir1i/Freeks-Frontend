const Button = ({ text, event, type, className }) => {
  return (
    <button className={className} onClick={event} type={type}>
      {text}
    </button>
  );
};

export default Button;
