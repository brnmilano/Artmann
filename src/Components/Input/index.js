import styles from "./styles.module.scss";

function Input({
  type,
  background = "none",
  padding,
  borderRadius,
  label,
  name,
  placeholder,
  fontSize,
  width,
  border,
}) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        style={{
          background,
          padding,
          borderRadius,
          fontSize,
          width,
          border,
        }}
      />
    </div>
  );
}

export default Input;
