import React from "react";
import { TextButton, SvgTextFooterButton } from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import styled from "@emotion/styled";
import CreateMemo from "../components/CreateMemo";
import Aside from "../components/Aside";
import { Next } from "../assets/Icons";
import useFetch from "../hooks/useFetch";
import { MemoInputEmail } from "../components/Forms/Inputs";

const TextArea = styled.div`
  border: 1px solid none;
  background-color: #ffffff;
  height: auto;

  border-radius: 4px;
  margin: 0px;
  padding: 4px;
`;

export default function SendMemo() {
  // const location = useLocation();
  const [issue, setIssue] = React.useState(false);
  const [emailContent, setEmailContent] = React.useState({
    headline: "",
    memo: "",
    emailAddresses: "loreirei@web.de"
  });
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  const response = useFetch("/api/lastissue");

  React.useEffect(() => {
    setIssue(response.data);
  }, [response]);

  function handleChange(event) {
    const value = event.target.value;
    setEmailContent({
      ...emailContent,
      [event.target.name]: value
    });
  }

  function handleSubmit() {
    console.log(emailContent);
  }

  function setContentOnLoad(replacedMemo, headline) {
    if (emailContent.memo === "") {
      setEmailContent({
        ...emailContent,
        memo: replacedMemo,
        headline: headline
      });
    }
  }
  // console.log(emailContent);

  if (!issue) return "Loading...";
  if (response.status !== 200) {
    return `Error: Something went wrong`;
  }
  if (issue) {
    const currentIssue = issue[0];

    return (
      <>
        <H2>Internal memo</H2>
        <H1>Inform the crisis management</H1>
        <TextArea>
          <CreateMemo
            type={currentIssue.type}
            country={currentIssue.country}
            city={currentIssue.city}
            timeDate={currentIssue.timeDate}
            crisisPotential={currentIssue.crisisPotential}
            handleChange={handleChange}
            setContentOnLoad={setContentOnLoad}
          ></CreateMemo>
          <h4>Email recipient</h4>
          <H2>Add email address comma separated</H2>
          <MemoInputEmail
            value={emailContent.emailAddresses}
            name="emailAddresses"
            onChange={handleChange}
          ></MemoInputEmail>
        </TextArea>

        <Aside>
          <a onClick={handleSubmit}>
            <SvgTextFooterButton
              svg={<Next />}
              text="Send internal memo and show tasks"
            ></SvgTextFooterButton>
          </a>
        </Aside>
      </>
    );
  }
}
