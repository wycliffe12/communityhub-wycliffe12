
function Input({
  label,
  name,
  error,
  as = "input",
  ...rest
}) {
  const Element = as;

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <Element
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        {...rest}
      />

      {error && (
        <p id={`${name}-error`} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
