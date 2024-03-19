export default function createHeaderFromPath(path: string) {
  console.log(path)
  return path.slice(0, 1).toUpperCase() + path.slice(1);
}