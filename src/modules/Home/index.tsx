/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from "../../common/svgs/logo.svg";
import "../../common/styles/styles.css";
import { useEffect } from "react";
import Navigation from "../Navigation/components/Navigation";

const Home: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.electron.ipcRenderer.on("exampleElectron", () => {
      alert("Electron said Hi to you!");
    });
  }, []);
  return (
    <>
      <Navigation />
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button
              onClick={() => {
                window.electron.ipcRenderer.send("example");
                return 123;
              }}
            >
              Say Hi to Electron
            </button>
            <button
              onClick={() => {
                const options: Electron.BrowserWindowConstructorOptions = {
                  // transparent: true,
                  // frame: false,
                };
                window.electron.ipcRenderer.send(
                  "openWindow",
                  options,
                  "about",
                );
              }}
            >
              Open About Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
