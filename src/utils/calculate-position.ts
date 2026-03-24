export function calculatePosition(
  value: number | string | undefined,
  containerSize: number,
  elementSize: number
): number {
  if (value === undefined) return elementSize / 2;

  if (typeof value === "string") {
    if (value.endsWith("%")) {
      const percent = parseFloat(value) / 100;
      return containerSize * percent;
    }
    return parseFloat(value);
  }

  return value;
}
