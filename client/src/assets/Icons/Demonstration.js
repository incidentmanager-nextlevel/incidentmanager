import React from "react";
import styled from "@emotion/styled";
import SVGIcon from "../SVGIcon";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporateDesignSecondary};
}

`;

function Fire(props) {
  return (
    <SVGIcon {...props}>
      <Path
        class="st0"
        d="M49.88,11.5c-0.31,0-0.62,0.07-0.92,0.22l-17.9,8.54c-0.46,0.22-1.29,0.48-1.79,0.56l-14.83,2.34
	c-1.2,0.19-2.13,1.29-2.13,2.5v10.88c0,1.21,0.94,2.31,2.13,2.5l5.74,0.91l-3.72,9.64c-0.27,0.71-0.21,1.45,0.19,2.02
	c0.39,0.57,1.05,0.9,1.82,0.9h5.87c1.25,0,2.53-0.88,2.98-2.05l3.35-8.7c0.17,0.06,0.33,0.13,0.46,0.19l17.84,8.5
	c0.3,0.14,0.61,0.22,0.92,0.22c0.54,0,1.02-0.22,1.37-0.62c0.3-0.35,0.46-0.82,0.46-1.33V13.45C51.71,12.34,50.92,11.5,49.88,11.5z
	 M14.72,36.53V25.65c0.01-0.03,0.06-0.1,0.09-0.11l5.93-0.94v12.96l-5.93-0.94C14.78,36.62,14.73,36.56,14.72,36.53z M25.04,49.58
	c-0.09,0.23-0.47,0.49-0.72,0.49l-5.46,0l3.76-9.75l5.65,0.89L25.04,49.58z M49.28,47.91l-17.12-8.16
	c-0.66-0.31-1.74-0.65-2.46-0.76l-6.54-1.03V24.23l6.47-1.02c0.72-0.11,1.8-0.45,2.46-0.76l17.18-8.2V47.91z"
      />
    </SVGIcon>
  );
}

export default Fire;