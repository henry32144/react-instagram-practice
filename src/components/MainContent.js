import React from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader.js";
import StorySection from "./StorySection.js";
import MidNavigation from "./MidNavigation.js";
import PostSection from "./PostSection.js";
import { OverviewXS } from "./Overview.js";
import { DescriptionXS } from "./Description.js";

const Main = styled.main.attrs(props => ({
  role: "main",
}))`
  background-color: #fafafa;
  flex-grow: 1;
  -webkit-box-ordinal-group: 5;
  order: 4;
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto 30px;
  max-width: 935px;
  width: 100%;

  @media (min-width: 736px) {
    padding: 30px 20px 0;
    box-sizing: content-box;
    width: calc(100% - 40px);
  }
`

function MainContent(props) {
  return (
    <Main>
      <Container>
        <MainHeader/>
        {/* Display only when screen size is small than 736px */}
        <DescriptionXS/>
        <StorySection/>
        <OverviewXS/>
        <MidNavigation
          setProgressLoading={props.setProgressLoading}
        />
        <PostSection></PostSection>
      </Container>
    </Main>
  );
}

export default MainContent;