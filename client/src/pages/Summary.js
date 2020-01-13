import React from "react";
import styled from "@emotion/styled";
import {
  TextButton,
  SvgTextButton,
  SliderDotsButton,
  SvgTextFooterButton,
  SvgButton,
  SVGSquareButton
} from "../components/Buttons";
import { Fire, Accident, Next } from "../assets/Icons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";
import { Field, IssueCrisisPotential, TextEntry } from "../components/Forms";
import ContainerFlexRow from "../components/ContainerFlexRow";
import ContainerFlexCol from "../components/ContainerFlexCol";

const ContainerFlexRowWrap = styled(ContainerFlexRow)`
  width: 100%;
  padding: 0 4px 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BiggerField = styled(Field)`
  min-height: 160px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex;
  padding: 4px 0 12px 0;
  overflow: auto;
`;

export default function ReportFour() {
  const location = useLocation();

  return (
    <>
      <H2>Summary and crisis potential</H2>
      <H1>Please check and report</H1>

      <Field>
        <ContainerFlexRowWrap>
          <div>
            <IssueCrisisPotential>
              {sessionStorage.getItem("crisisPotential")}
            </IssueCrisisPotential>
          </div>
          <div>
            <ContainerFlexCol>
              <H3>Crisis potential</H3>
              <span>based on your informnation</span>
            </ContainerFlexCol>
          </div>
          <div>
            <SVGSquareButton>{<Next />}</SVGSquareButton>
          </div>
        </ContainerFlexRowWrap>
      </Field>

      <BiggerField>
        <H3>&nbsp;Please check</H3>
        <TextEntry url="/report/1" sessionStorageValue="type" svg={<Next />} />
        <TextEntry
          url="/report/2"
          sessionStorageValue="timeDate"
          svg={<Next />}
        />
        <TextEntry url="/report/2" sessionStorageValue="city" svg={<Next />} />
        <TextEntry url="/report/2" sessionStorageValue="site" svg={<Next />} />
      </BiggerField>

      <SliderDotsButton />

      <Aside>
        <Link to="/send" active={location.pathname === "/send"}>
          <SvgTextFooterButton
            svg={<Next />}
            text="Report to the crisis management"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
