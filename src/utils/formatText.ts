export function formatText(
  text: string,
  option: "order" | "unordered"
): string | undefined {
  const lines = text
    .split("\n")
    .map((line) => line.replace(/^(\d+\.\s*|•\s*|\*\s*)/, ""));

  if (option === "unordered") {
    return lines.map((line) => `• ${line}`).join("\n");
  }

  if (option === "order") {
    return lines.map((line, index) => `${index + 1}. ${line}`).join("\n");
  }
  return text;
}
