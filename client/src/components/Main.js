import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
`;
function Main(props) {
  return <Container {...props}></Container>;
}

export default Main;
