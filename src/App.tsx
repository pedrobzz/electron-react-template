/* eslint-disable @typescript-eslint/no-unused-vars */
import "./common/styles/styles.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home";

const App = (): JSX.Element => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <h1>
                about <a href="#">go back</a>
              </h1>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: (channel: string, ...args: unknown[]) => void;
        on: (channel: string, func: (...args: unknown[]) => unknown) => void;
      };
    };
  }
}
