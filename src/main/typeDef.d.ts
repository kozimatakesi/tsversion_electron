import { IpcRenderer } from 'electron';

declare global {
  interface Window {
    electron: {
      ipcRenderer: Pick<IpcRenderer, 'on' | 'once' | 'sendNotificasion'>;
    };
  }
}

export {};
