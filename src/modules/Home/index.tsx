/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from "../../common/svgs/logo.svg";
import "../../common/styles/styles.css";
import { useEffect } from "react";

const Home: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.electron.ipcRenderer.on("exampleElectron", () => {
      alert("Electron said Hi to you!");
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
            window.electron.ipcRenderer.send("openWindow");
          }}
        >
          Open About Page
        </button>
      </header>
    </div>
  );
};

export default Home;
