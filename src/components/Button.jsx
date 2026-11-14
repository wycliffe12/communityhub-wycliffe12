
function Button({
  text = "Click Me",
  variant = "primary",
  disabled = false
}) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
