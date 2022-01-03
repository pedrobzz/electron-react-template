/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import { Container } from "./styles";

// import { ipcRenderer } from "electron/renderer";

interface NavigationIconInterface {
  event: string;
}

const NavigationIcon: React.FC<NavigationIconInterface> = ({
  children,
  event,
}): JSX.Element => {
  const doEvent = (event: string) => {
    console.log(event);
    window.electron.ipcRenderer.send(event);
  };
  return (
    <Container
      onClick={() => {
        doEvent(event);
      }}
    >
      {children}
    </Container>
  );
};

export default NavigationIcon;
