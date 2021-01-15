import ( CodeEditorUI ) from "./codeEditorUI.js"
import { REPL } from ".repl.js";

// codeEditor
export class CodeEditor {
  UI: CodeEditorUI;
  repl: REPL;
  theme: string;

  constructor(options: { theme: string }) {
    this.UI = new CodeEditorUI({options.theme});
    this.repl = new REPL({options.theme});
    this.theme = options.theme;
  }

  render() {}
}
