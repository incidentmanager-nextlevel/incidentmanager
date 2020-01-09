import styled from "@emotion/styled";

const Button = styled.button`
  min-width: 34px;
  min-height: 34px;
  margin: 4px;
  padding: 4px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.company.borderRadius};
  border: none;
`;

export default Button;
