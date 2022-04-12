export default function Text({
  children,
  color = "#FFFFFF",
  fontSize = 16,
  fontWeight = 500,
  alignItems,
}) {
  return (
    <div
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
