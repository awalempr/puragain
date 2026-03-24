import Matter from "matter-js";

export function parsePathToVertices(
  path: string,
  sampleLength: number = 15
): Matter.Vector[] {
  const svgNs = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNs, "svg");
  const pathEl = document.createElementNS(svgNs, "path");
  pathEl.setAttribute("d", path);
  svg.appendChild(pathEl);
  document.body.appendChild(svg);

  const totalLength = pathEl.getTotalLength();
  const vertices: Matter.Vector[] = [];

  for (let i = 0; i < totalLength; i += sampleLength) {
    const point = pathEl.getPointAtLength(i);
    vertices.push({ x: point.x, y: point.y });
  }

  document.body.removeChild(svg);
  return vertices;
}
