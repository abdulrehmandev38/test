const Input = ({ label }) => {
  return (
    <div>
      <label htmlFor={label}></label>
      <input id={label} type="text" />
    </div>
  );
};
export default Input;
