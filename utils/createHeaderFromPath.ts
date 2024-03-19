export default function createHeaderFromPath(path: string) {
  return path.slice(0, 1).toUpperCase() + path.slice(1);
}