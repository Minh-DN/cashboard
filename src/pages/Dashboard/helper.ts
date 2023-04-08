export function formatMoney(value: number): string {
  
  let absValue = Math.abs(value);
  let stringValue = absValue.toString();
  let chars = stringValue.split("");
  let numProcessed = 0;

  for (let i = chars.length - 1; i >= 0; i--) {
    if (numProcessed % 3 === 0 && numProcessed !== 0) {
      chars.splice(i + 1, 0, ",");
    }
    numProcessed++;
  }

  if (value < 0) return '-$' + chars.join("");

  return '$' + chars.join("");
}

