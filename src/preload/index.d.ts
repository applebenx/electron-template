import { ElectronAPI } from '@electron-toolkit/preload'
import type { Service } from "../main/service"

declare global {
  interface Window {
    electron: ElectronAPI
    service: Service
  }
}
