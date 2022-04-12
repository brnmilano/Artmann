import styles from "./styles.module.scss";

export default function Button({
  children,
  backgroundColor = "#FFFFFF",
  color = "#000000",
  borderRadius,
  padding,
  fontSize,
  fontWeight = "bold",
  onClick,
}) {
  return (
    <button
      className={styles.container}
      style={{
        backgroundColor,
        borderRadius,
        padding,
        fontSize,
        fontWeight,
        color,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
