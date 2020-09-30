import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

const RootBase = styled.div`
  -webkit-box-flex: 1;
  flex: 1 0 0%;

  &:last-child {
    margin-right: 0;
  }
  @media (min-width: 736px) {
      margin-right: 28px;
  }
  @media (max-width: 735px) {
      margin-right: 3px;
  }
`;

const PostItemRoot = styled(RootBase)`
  display: block;
  position: relative;
  width: 100%;
`;

const PostLink = styled.a.attrs(props => ({
  href: props.href || "https://www.instagram.com/henry32144/",
  tabIndex: "0"
}))`
`

const PostContainer = styled.div`
  background-color: #efefef;
  display: block;
  width: 100%;
`

const PostItemHoverMask = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 735px) {
    display: none;
  }
`

const PostItemOverview = styled.ul`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const OverviewWrapper = styled.li`
  display: inline-flex;
  flex-direction: row-reverse;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`

const OverviewIcon = styled(FontAwesomeIcon)`
  margin-right: 7px;
  height: 19px;
  width: 19px;
  font-size: 19px;
`;


const PostImageWrapper = styled.div`
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
`

const PostImage = styled.img.attrs(props => ({
  alt: props.alt || "",
  decoding: "auto",
  src: props.src || "https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118010563_317600282777599_3119710377581176117_n.jpg?_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=KxyK-Jx-BAsAX_9bzZE&oh=d85045c88d87f8541293deb5fd73ffe8&oe=5F9F2688",
}))`
  object-fit: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  user-select: none;
  width: 100%;
`

export function PostItem(props) {
  const [onHovered, setHovered] = React.useState(false);

  return (
    <PostItemRoot
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PostLink
        href={props.href}
      >
        <PostContainer>
          <PostImageWrapper>
            <PostImage
              alt={props.imgAlt}
              src={props.src}
            />
          </PostImageWrapper>
        </PostContainer>
        {onHovered &&
          <PostItemHoverMask>
            <PostItemOverview>
              <OverviewWrapper>
                <span>{props.likeNumber || "NaN"}</span>
                <OverviewIcon
                  icon={faHeart}
                  flip="horizontal"
                  color="#fff"
                />
              </OverviewWrapper>
              <OverviewWrapper>
                <span>{props.commentNumber || "NaN"}</span>
                <OverviewIcon
                  icon={faComment}
                  flip="horizontal"
                  color="#fff"
                />
              </OverviewWrapper>
            </PostItemOverview>
          </PostItemHoverMask>
        }
      </PostLink>
    </PostItemRoot>
  );
}

export function PostItemPlaceholder(props) {
  return (
    <RootBase />
  );
}