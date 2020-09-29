import React from "react";
import styled from "styled-components";

// Offset 132
const StoryListItem = styled.li.attrs(props => ({
  tabIndex: "-1",
}))`
  position: absolute;
  transform: translateX(${props => (24 + (props.position * 132)) + "px"});

  @media (max-width: 735px) {
    transform: translateX(${props => (0 + (props.position * 70)) + "px"});
  }
`

const StoryListItemPlaceHolder = styled(StoryListItem)`
  width: 24px;

  transform: translateX(${props => (props.position * 1320) + "px"});

  @media (max-width: 735px) {
    width: 1px;
    transform: translateX(${props => (props.position * 699) + "px"});
  }
`

const StoryListItemContainer = styled.div`
  width: 125px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  align-content: stretch;

  @media (max-width: 735px) {
    width: 72.5px;
  }
`

const ListItemWrapper = styled.div.attrs(props => ({
  "aria-disabled": "false",
  role: "menuitem",
  tabIndex: "-1",
}))`
  align-items: center;
  display: flex;

  @media (max-width: 735px) {
    margin: 0 5px;
    padding-top: 5px;
    width: 65px;
  }
  @media (min-width: 736px) {
      padding: 10px 15px;
      width: 115px;
  }
`

const ListItem = styled.div.attrs(props => ({
  "aria-disabled": "true",
  "aria-label": "開啟限時動態",
  role: "button",
  tabIndex: "-1",
}))`
  cursor: pointer;
  align-self: center;
  display: block;
  flex: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
`

const ImageWrapper = styled.div`
  width: 77px;
  height: 77px;
  background-color: #fafafa;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  @media (max-width: 735px) {
    width: 56px;
    height: 56px;
  }
`

const Image = styled.img.attrs(props => ({
  alt: props.text + " 的大頭照",
  src: props.imgLink,
}))`
  height: 100%;
  width: 100%;
`

const ImgText = styled.div`
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  
  @media (max-width: 735px) {
    font-size: 12px;
    padding-top: 8px;
  }
  @media (min-width: 736px) {
      font-weight: 600;
      padding-top: 15px;
  }
`

export function Story(props) {
  return (
    <StoryListItem
      position={props.position}
    >
      <StoryListItemContainer>
        <ListItemWrapper
          onClick={() => {
            document.location.href = "https://www.instagram.com/stories/highlights/18055506430247193/";
          }}
        >
          <ListItem>
            <ImageWrapper>
              <Image
                alt={props.text || "temp"}
                imgLink={props.imgLink}
              />
            </ImageWrapper>
          </ListItem>
          <ImgText>
            {props.text || "temp"}
          </ImgText>
        </ListItemWrapper>
      </StoryListItemContainer>
    </StoryListItem>
  );
}

export function StoryPlaceHolder(props) {
  return (
    <StoryListItemPlaceHolder
      position={props.position}
    />
  );
}