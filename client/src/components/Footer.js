import React from "react";
import styled from "@emotion/styled";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NoStyleButton from "./Buttons/NoStyleButton";

const FooterNavigation = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 4px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 20px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding: 4px;
  z-index: 1;
  @media only screen and (min-width: ${props =>
      props.theme.company.deviceWidth}) {
    max-width: ${props => props.theme.company.deviceWidth};
  }
`;

const Button = styled.button``;

function Footer({ name, value, onClick }) {
  const location = useLocation();
  return (
    <FooterNavigation>
      <Link to="/crisismanual">
        <NoStyleButton>Crisis Manual</NoStyleButton>
      </Link>
      <NoStyleButton name="activeTheme" value={"light"} onClick={onClick}>
        Switch Theme
      </NoStyleButton>
      <Link to="/legalnotice">
        <NoStyleButton>Legal Notice</NoStyleButton>
      </Link>
    </FooterNavigation>
  );
}

export default Footer;
