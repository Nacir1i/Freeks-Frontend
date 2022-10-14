const Input = ({ type, name, title, register }) => {
  return (
    <div className="w-full flex flex-col my-2">
      <label>{title}</label>
      <input
        className="w-full p-2 text-black focus:outline-none rounded-md"
        {...register(name, {
          required: "This field is require",
          maxLength: {
            value: 24,
            message: "You have exceeded the max lenght",
          },
          minLength: {
            value: 4,
            message: "input is too short",
          },
        })}
        type={type}
        name={name}
      />
    </div>
  );
};

export default Input;
