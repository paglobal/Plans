import { Canvas } from "./canvas.js";
import { InteractiveCanvasUI } from "./interactiveCanvasUI.js";

// interactiveCanvas class
export class InteractiveCanvas {
  UI: InteractiveCanvasUI;
  canvas: Canvas;
  theme: string;

  constructor(options: { theme: string; canvasType: string }) {
    this.UI = new InteractiveCanvasUI({ theme: options.theme });
    this.canvas = new Canvas({ theme: options.theme });
    this.theme = options.theme;
    this.canvasType = options.canvasType;
  }
}
