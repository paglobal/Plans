import { VideoHubUI } from "./videoHubUI.js";
// videoHub class
export class VideoHub {
  UI: VideoHubUI;
  theme: string;

  constructor(options: { theme: string }) {
    this.theme = options.theme;
    this.UI = new VideoHubUI();
  }

  render() {}
}
