export function billingTagGen(): string {
  const random = Math.floor(Math.random() * 100000);
  return `#${random.toString().padStart(5,"0")}`;
}
