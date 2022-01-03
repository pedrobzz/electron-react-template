/* eslint-disable @typescript-eslint/no-var-requires */
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    on(channel: string, func: (...args: unknown[]) => void) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    once(channel: string, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (event, ...args) => func(...args));
    },
    send(channel: string, ...args: unknown[]) {
      if (args) {
        ipcRenderer.send(channel, ...args);
      } else {
        ipcRenderer.send(channel);
      }
    },
    invoke: async (channel: string, ...value: unknown[]) => {
      return await ipcRenderer.invoke(channel, value);
    },
    retrieveSettings: async () => {
      return await ipcRenderer.invoke("retrieveSettings");
    },
    openAppWindow: (appID: string) => {
      return appID;
    },
  },
});

export {};
