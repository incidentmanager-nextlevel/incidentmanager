import styled from "@emotion/styled";

const H2Warning = styled.h2`
  display: block;
  width: 100%;
  height: 24px;
  padding: 0px;
  margin: 0px;
  text-align: left;
  font-size: 18px;
  color: ${props => props.theme.colors.warningLevel[3]};
`;

export default H2Warning;
