const TextInput = ({ label, placeholder, type, className }) => {
  return (
    <div className={`TextInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label for={label} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 border border-solid border-gray-400 rounded placeholder-gray-500"
        id={label}
      />
    </div>
  );
};

export default TextInput;
