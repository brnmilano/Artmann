import styles from "./styles.module.scss";

export default function Text({
  children,
  color = "#FFFFFF",
  fontSize = 16,
  fontWeight = 500,
  alignItems,
}) {
  return (
    <div
      className={styles.container}
      style={{
        color,
        fontSize,
        fontWeight,
        alignItems,
      }}
    >
      {children}
    </div>
  );
}
