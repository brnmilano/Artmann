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
    <div className={styles.container}>
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
