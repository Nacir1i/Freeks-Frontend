const Input = ({ type, name, title, required, register }) => {
  return (
    <div className="w-full flex flex-col my-2">
      <label>{title}</label>
      <input
        className="w-full p-2 text-black focus:outline-none rounded-md"
        {...register(name)}
        type={type}
        name={name}
        required={required}
      />
    </div>
  );
};

export default Input;
