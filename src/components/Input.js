const Input = ({ type, name, title, required, register }) => {
  return (
    <div className="flex-center inputContainer">
      <label>{title}</label>
      <input {...register(name)} type={type} name={name} required={required} />
    </div>
  );
};

export default Input;
