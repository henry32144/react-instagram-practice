import React from "react";
import styled from "styled-components";
import { AvatarPlaceholderLink } from '../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

const Root = styled.a.attrs(props => ({
  href: props.href,
  tabIndex: "0",
}))`
  align-items: center;
  border-bottom: solid 1px #dbdbdb;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 50px;
  padding: 8px 14px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-right: 0;
  white-space: nowrap;
  width: 100%;
`;

const AvatarContainer = styled.div.attrs(props => ({
  ariaDisabled: "false",
  role: "button",
  tabIndex: "-1",
}))`
  margin: 0 10px 0 0;
  align-items: center;
  align-self: center;
  display: block;
  flex: none;
  justify-content: center;
`;

const AvatarImageWrapper = styled.span.attrs(props => ({
  role: "link",
  tabIndex: "-1",
}))`
  width: 32px;
  height: 32px;
  background-color: #fafafa;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
`;

const AvatarImage = styled.img.attrs(props => ({
  alt: props.userAccount + " 的大頭貼照",
  src: props.imageLink || AvatarPlaceholderLink,
  draggable: "false",
}))`
  width: 32px;
  height: 32px;
  background-color: #fafafa;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
  /* Add border */
  ::after {
    border: 1px solid rgba(0, 0, 0, .0975);
    border-radius: 50%;
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  justify-content: center;
  min-width: 0;
`;

const InfoTitleWrapper = styled.div`
  color: #262626;
  flex-direction: row;
  font-size: 14px;
  text-align: left;
`;

const InfoTitle = styled.span`
  line-height: 22px;
  margin-bottom: -4px;
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
`;


const VerifiedBadgeWrapper = styled.div`
  margin-top: 4px;
  margin-left: 4px;
  flex: 0 0 auto;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  display: block;
`;

const VerifiedBadge = styled(FontAwesomeIcon)`
  font-size: 12px;
  flex-shrink: 0;
  display: block;
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
`;

const InfoText = styled.div`
  color: #8e8e8e;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
`;


function SearchResultItem(props) {
  return (
    <Root
      href={props.userAccount}
    >
      <Container>
        <AvatarContainer>
          <AvatarImageWrapper>
            <AvatarImage
              userAccount={props.userAccount}
              imageLink={props.imageLink}
            />
          </AvatarImageWrapper>
        </AvatarContainer>
        <InfoContainer>
          <InfoTitleWrapper>
            <InfoTitle>
              {props.infoTitle || "Title"}
            </InfoTitle>
            {props.isVerified &&
              <VerifiedBadgeWrapper>
                <VerifiedBadge
                  icon={faCertificate}
                  color="#3897f0"
                />
              </VerifiedBadgeWrapper>
            }
          </InfoTitleWrapper>
          <InfoText>
            {props.infoText || "Text"}
          </InfoText>
        </InfoContainer>
      </Container>
    </Root>
  );
}

export default SearchResultItem;