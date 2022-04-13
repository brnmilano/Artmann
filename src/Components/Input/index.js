import styles from "./styles.module.scss";

function Input({
  type,
  background = "none",
  padding,
  borderRadius,
  name,
  placeholder,
  fontSize,
  width,
  border,
}) {
  return (
    <input
      className={styles.input}
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
  );
}

export default Input;
