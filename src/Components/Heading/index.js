export default function Heading({
  children,
  color = "#FFFFFF",
  fontSize = 44,
  fontWeight = 500,
  alignItems,
}) {
  return (
    <h1
      style={{
        color,
        fontSize,
        fontWeight,
        alignItems,
      }}
    >
      {children}
    </h1>
  );
}
