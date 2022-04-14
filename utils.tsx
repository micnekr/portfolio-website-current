export function capitalise(text: string) {
  if (text.length === 0) return text;
  return text[0].toLocaleUpperCase() + text.substring(1);
}
