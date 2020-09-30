import React from "react";
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import { Story, StoryPlaceHolder } from "./StoryListItem.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const Root = styled.div`
  @media (max-width: 735px) {
      height: 88px;
      margin-bottom: 21px;
  }
  @media (min-width: 736px) {
      height: 130px;
      margin-bottom: 44px;
  }
`
const Container = styled.div`
  height: 100%;
  width: 100%;
`
const Wrapper = styled.div.attrs(props => ({
  role: "presentation",
}))`
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`

const StoryScroll = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  height: 100%;
`

const StoryList = styled.ul`
  display: flex;
  flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
`

const SlideButton = styled.button.attrs(props => ({
  tabIndex: "-1",
}))`
  cursor: pointer;
  background: 0 0;
  border: 0;
  justify-self: center;
  outline: 0;
  padding: 16px 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 735px) {
    display: none;
  }
`

const SlideRightButton = styled(SlideButton)`
  right: 0;
`

const SlideLeftButton = styled(SlideButton)`
  left: 0;
`

const ButtonIcon = styled(FontAwesomeIcon)`
  height: 24px;
  width: 24px;
  font-size: 24px;
`

function StorySection() {
  // Create template stories
  var storyTemplate = [];
  for (var i = 0; i < 10; i++) {
    var story = {
      "position": i,
      "text": "Cat " + (i + 1),
      "key": i,
      "imgLink": "/cat" + (i + 1) + ".jpg",
    }
    storyTemplate.push(story);
  }

  const [slideRight, setSlideRight] = React.useState(false);
  const [stories] = React.useState(storyTemplate);
  const scrollRef = React.useRef(null);

  const storyItems = stories.map((item) =>
    <Story
      key={item.key}
      position={item.position}
      text={item.text}
      imgLink={item.imgLink}
    />
  );

  // Reset scrolling position when resizing the screen
  React.useEffect(() => {
    function sizeChanged() {
      setSlideRight(false);
      scrollRef.current.scrollTo(0, 0);
    }
    window.addEventListener('resize', sizeChanged);
    return () => window.removeEventListener('resize', sizeChanged);
  }, []);

  return (
    <Root>
      <Container>
        <Wrapper
          ref={scrollRef}
        >
          <CSSTransition
            in={slideRight}
            timeout={949}
            classNames="slide-right"
          >
            <StoryScroll>
              <StoryList>
                <StoryPlaceHolder
                  position={0}
                />
                <StoryPlaceHolder
                  position={1320}
                />
                {storyItems}
              </StoryList>
            </StoryScroll>
          </CSSTransition>
        </Wrapper>
        {slideRight &&
          <SlideLeftButton
            onClick={() => setSlideRight(false)}
          >
            <ButtonIcon
              icon={faChevronCircleLeft}
              color="#7d7d7d"
            />
          </SlideLeftButton>
          }
          {!slideRight &&
            <SlideRightButton
              onClick={() => setSlideRight(true)}
            >
              <ButtonIcon
                icon={faChevronCircleRight}
                color="#7d7d7d"
              />
            </SlideRightButton>
          }
      </Container>
    </Root>
  );
}

export default StorySection;
