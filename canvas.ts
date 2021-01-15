// canvasclass
export class canvas {
  grid: Grid;
  elements: Map<string, Map<string | number, object>>;
  theme: string;

  constructor(options: { theme: string }) {
    this.theme = options.theme;
  }

  draw() {}
}
