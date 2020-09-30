import React from "react";
import styled, { css, keyframes } from "styled-components";
import { TOP_PROGRESSBAR_TIME } from "../Constants.js";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 3px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 999;
`;

const ProgressBarChild = styled.div`
  width: 100%;
  height: 100%;
`;

const Progress = styled(ProgressBarChild)`
  color: white;
  text-align: center;
  line-height: 3px;
  animation-direction: reverse;
  background: #e5405e;

  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgb(103, 69, 202) 0%, rgb(189, 17, 173) 50%, rgb(252, 216, 83) 100%);
`

const timelapse = keyframes`
  0% {
    width: 100%;
  }
  99% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const Shrinker = styled(ProgressBarChild)`
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;

  ${props => {
    if (props.isLoading) {
      return css`
        animation-name: ${timelapse};
        animation-fill-mode: forwards;
        animation-duration: ${TOP_PROGRESSBAR_TIME}s;
        animation-timing-function: cubic-bezier(1., .4, .6, .96);
      `;
    }
  }}
`

function TopProgressBar(props) {
  return (
    <ProgressBarContainer>
      <Progress>
      </Progress>
      <Shrinker
        isLoading={props.isLoading}
      >
      </Shrinker>
    </ProgressBarContainer>
  );
}

export default TopProgressBar;