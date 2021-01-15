import { VideoHub } from "./videoHub.js";
import { CodeEditor } from "./codeEditor.js";
import { InteractiveCanvas } from "./interactiveCanvas.js";

// visionInstance class
class VisionInstance {
  videoHub: VideoHub;
  codeEditor: CodeEditor;
  interactiveCanvas: InteractiveCanvas;

  constructor(options: {
    codeEditor: { theme: string };
    videoHub: { theme: string };
    interactiveCanvas: { theme: string; canvasType: string };
  }) {
    // instantiate videoHub
    this.videoHub = new VideoHub({
      theme: options.codeEditor.theme,
    });

    // instantiate codeEditor
    this.codeEditor = new CodeEditor({
      theme: options.videoHub.theme,
    });

    // instantiate interactiveCanvas
    this.interactiveCanvas = new InteractiveCanvas({
      theme: options.interactiveCanvas.theme,
      canvasType: options.interactiveCanvas.canvasType,
    });
  }
}
