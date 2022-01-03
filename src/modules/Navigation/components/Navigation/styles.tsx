import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: var(--navigation-height);
  background-color: #d0c911;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
  -webkit-app-region: drag;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  letter-spacing: 0.15em;

  color: #ffffff;

  text-shadow: -1px 1px 3px rgba(0, 0, 0, 1);

  /* user-select: none; */
  -webkit-app-region: no-drag;
  margin-left: 5px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;
`;
