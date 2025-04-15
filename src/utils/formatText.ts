export function formatText(
  text: string,
  option: "order" | "unordered" | "title" | "markdown"
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
  if(option==="title"){
    const firstLetter = text.charAt(0).toUpperCase();
  
    return firstLetter.concat(text.slice(1));
  }
  return text;
}
