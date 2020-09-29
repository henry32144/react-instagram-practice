import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  display: block;
  text-align: start;
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;

  @media (max-width: 735px) {
    display: none;
  }
`;

const DescriptionTitle = styled.h1`
  display: inline;
  font-weight: 600;
`;

//Wrapper in screen size larger than 736
const DescriptionSMContainer = styled.div`
  display: block;
  text-align: start;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  padding: 0 16px 21px;
  text-overflow: ellipsis;

  @media (min-width: 736px) {
    display: none;
  }
`;

export function Description() {
  return (
    <DescriptionContainer>
      <DescriptionTitle>
        承翰 吳
      </DescriptionTitle>
      <br />
      <span>
        Simulate the instagram page
      </span>
    </DescriptionContainer>
  );
}

export function DescriptionXS() {
  return (
    <DescriptionSMContainer>
      <DescriptionTitle>
        承翰 吳
      </DescriptionTitle>
      <br />
      <span>
        Simulate the instagram page
      </span>
    </DescriptionSMContainer>
  );
}