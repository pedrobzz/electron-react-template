/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import CloseIcon from "../../../../common/components/icons/CloseIcon";
import MaximizeIcon from "../../../../common/components/icons/MaximizeIcon";
import MinimizeIcon from "../../../../common/components/icons/MinimizeIcon";
import NavigationIcon from "../NavigationIcon";
import { Container, Title, ButtonsDiv } from "./styles";

const Navigation: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Title>Electron React Template</Title>
      <ButtonsDiv>
        <NavigationIcon event="minimizeMainWindow">
          <MinimizeIcon width={12} height={2} />
        </NavigationIcon>

        <NavigationIcon event="maximizeMainWindow">
          <MaximizeIcon width={12} />
        </NavigationIcon>

        <NavigationIcon event="closeMainWindow">
          <CloseIcon width={12} />
        </NavigationIcon>
      </ButtonsDiv>
    </Container>
  );
};

export default Navigation;
