import styled from "styled-components";

export const Container = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
