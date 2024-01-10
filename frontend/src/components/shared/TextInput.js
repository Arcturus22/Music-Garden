const TextInput = ({
  label,
  placeholder,
  type,
  className,
  value,
  setValue,
}) => {
  return (
    <div className={`TextInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 border border-solid border-gray-400 rounded placeholder-gray-500"
        id={label}
        value={value}
        onChange={(e) => {
          // console.log(value);
          setValue(e.target.value);
          // console.log(e.target);
        }}
      />
    </div>
  );
};

export default TextInput;
