import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar.js"
import Overview from "./Overview.js"
import { Description } from "./Description.js"
import { FollowButton, FollowButtonXS } from "./FollowButton.js"
import { LargeAvatarLink } from '../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

const Root = styled.header`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;

  @media (min-width: 736px) {
      margin-bottom: 44px;
  }
  @media (max-width: 735px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    border-bottom: none;
    margin-bottom: 24px;
    padding-bottom: 0;
  }
`;

const AvatarSection = styled.div`
  flex-shrink: 0;

  @media (max-width: 735px) {
    justify-content: center;
    margin-right: 28px;
  }
  @media (min-width: 736px) {
    flex-basis: 0;
    flex-grow: 1;
    margin-right: 30px;
  }
`;

const AvatarWrapper = styled.div.attrs(props => ({
  className: "test",
  ariaDisabled: "true",
  role: "button",
  tabIndex: "-1",
}))`
  align-items: center;
  align-self: center;
  display: block;
  flex: none;
  justify-content: center;
  width: 77px;
  height: 77px;

  @media (min-width: 736px) {
    width: 150px;
    height: 150px;
  }
`;

const InfoSection = styled.section`
  color: #262626;
  flex-shrink: 1;
  min-width: 0;

  @media (max-width: 735px) {
    flex-basis: 0;
    flex-grow: 1;
  }
  @media (min-width: 736px) {
    flex-basis: 30px;
    flex-grow: 2;
  }
`;

const InfoTitleContainer = styled.div`
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-shrink: 1;
  min-width: 0;

  @media (max-width: 735px) {
    margin-bottom: 12px;
  }
  @media (min-width: 736px) {
    margin-bottom: 20px;
  }
`;

const InfoTitle = styled.h2`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #262626;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
  margin: -5px 0 -6px;
`;

const VerifiedBadgeWrapper = styled.div`
  margin-left: 8px;
  flex: 0 0 auto;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  display: block;
`;

const VerifiedBadge = styled(FontAwesomeIcon)`
  font-size: 18px;
  flex-shrink: 0;
  display: block;
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
`;


function MainHeader(props) {
  return (
    <Root>
      <AvatarSection>
        <AvatarWrapper>
          <Avatar
            height="inherit"
            width="inherit"
            userAccount={props.userAccount || "userAccount"}
            imageLink={props.imageLink || LargeAvatarLink}
          />
        </AvatarWrapper>
      </AvatarSection>
      <InfoSection>
        {/* Info title part */}
        <InfoTitleContainer>
          <InfoTitle>henry32144</InfoTitle>
          {props.isVerified &&
            <VerifiedBadgeWrapper>
              <VerifiedBadge
                icon={faCertificate}
                color="#3897f0"
              />
            </VerifiedBadgeWrapper>
          }
          <FollowButton/>
        </InfoTitleContainer>
        {/* Display only when screen size is small than 736px */}
        <FollowButtonXS/>
        <Overview/>
        <Description/>
      </InfoSection>
    </Root>
  );
}

export default MainHeader;