export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (s) => {
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
  });
}
