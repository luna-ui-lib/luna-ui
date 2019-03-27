export default function hex2Rgba(hex, alpha) {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
