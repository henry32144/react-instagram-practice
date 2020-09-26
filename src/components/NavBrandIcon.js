import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  flex: 1 0 0%;
  min-width: 40px;
`;

const FlexContainer = styled.div`
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
`;

const ImageWrapper = styled.div`
  margin-top: 7px;
  transition: opacity .1s ease-out;
`;

const Image = styled.img.attrs(props => ({
  src: "/instagram.png",
  srcSet: "/instagram.png 1x, /instagram_2x.png 2x",
}))`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;


function Navbar() {
  return (
    <Root>
      <a tabIndex="0" href="/">
        <FlexContainer>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
        </FlexContainer>
      </a>
    </Root>
  );
}

export default Navbar;