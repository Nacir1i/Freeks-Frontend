const Button = ({ text, event, type, className, isValid }) => {
  return (
    <button
      className={className}
      onClick={event}
      type={type}
      disabled={isValid}
    >
      {text}
    </button>
  );
};

export default Button;
