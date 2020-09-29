import React from "react";
import Button from "./Button.js"
import styled from "styled-components";

const FollowButtonContainer = styled.div`
  flex: 0 0 auto;
  justify-content: flex-start;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;

  @media (max-width: 735px) {
    display: none;
  }
`;

//Wrapper in screen size larger than 736
const FollowButtonWrapper = styled.div`
  flex-shrink: 0;
  margin-left: 20px;
`;

const NotLoggedInFollowWrapper = styled.a.attrs(props => ({
  href: "https://www.instagram.com/accounts/login/?next=%2F" + props.userAccount + "%2F&source=follow",
  rel: "nofollow",
  tabIndex: "0",
}))`
  height: 100%;
`;

const FollowButtonXSContainer = styled.div`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  margin-top: 0;

  @media (min-width: 736px) {
    display: none;
  }
`;

const FollowButtonXSWrapper = styled.div`
  max-width: 240px;
  width: 100%;
`;

export function FollowButton() {
  return (
    <FollowButtonContainer>
      <FollowButtonWrapper>
        <NotLoggedInFollowWrapper>
          <Button>
            追蹤
          </Button>
        </NotLoggedInFollowWrapper>
      </FollowButtonWrapper>
    </FollowButtonContainer>
  );
}

export function FollowButtonXS() {
  return (
    <FollowButtonXSContainer>
      <NotLoggedInFollowWrapper>
        <FollowButtonXSWrapper>
          <Button>
            追蹤
          </Button>
        </FollowButtonXSWrapper>
      </NotLoggedInFollowWrapper>
    </FollowButtonXSContainer>
  );
}