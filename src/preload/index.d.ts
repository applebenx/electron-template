import { ElectronAPI } from "@electron-toolkit/preload";
import type { AppAPI } from "./appAPI";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: AppAPI;
  }
}
