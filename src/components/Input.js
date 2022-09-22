const Input = ({ type, title, required, onChange }) => {
  return (
    <div className="flex-center inputContainer">
      <label>{title}</label>
      <input type={type} required={required} onChange={onChange} />
    </div>
  );
};

export default Input;
