import React from "react";
import styled from "styled-components";
import { AvatarPlaceholderLink } from '../Constants'

const AvatarImageWrapper = styled.span.attrs(props => ({
  role: "link",
  tabIndex: "-1",
}))`
  width: ${props => props.width || "32px"};
  height: ${props => props.height || "32px"};
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
  width: 100%;
  height: 100%;
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

function Avatar(props) {
  return (
    <AvatarImageWrapper
      width={props.width}
      height={props.height}
    >
      <AvatarImage
        userAccount={props.userAccount}
        imageLink={props.imageLink}
      />
    </AvatarImageWrapper>
  );
}

export default Avatar;