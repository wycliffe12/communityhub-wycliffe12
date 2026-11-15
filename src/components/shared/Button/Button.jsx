
import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  ...rest
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
