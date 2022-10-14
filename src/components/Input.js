const Input = ({ type, name, title, register, icon }) => {
  return (
    <div className="w-full flex flex-col my-2">
      <label>{title}</label>
      <div className="w-full bg-white flex items-center rounded-md">
        <input
          className="w-[85%] p-2 text-black focus:outline-none rounded-l-md"
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
        {icon}
      </div>
    </div>
  );
};

export default Input;
