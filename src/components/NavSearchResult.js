import React from "react";
import styled from "styled-components";
import SearchResultItem from "./SearchResultItem.js"

const Rhombus = styled.div`
  background: #fff;
  border: solid 1px #dbdbdb;
  box-shadow: 0 0 5px 1px rgba(0,0,0,.0975);
  content: ' ';
  height: 14px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 12px;
  transform: rotate(45deg);
  width: 14px;
  z-index: 1;
`;

const ResultBox = styled.div`
  background: #fff;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0,0,0,.0975);
  display: block;
  left: 50%;
  margin-left: -121px;
  position: absolute;
  right: -12px;
  top: 18px;
  width: 243px;
  z-index: 9;

  /* Add this to hide the border between the rhombus and result box*/
  ::after {
    border-color: transparent transparent #fff transparent;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    content: ' ';
    height: 0;
    left: 110px;
    position: absolute;
    top: -10px;
    width: 0;
    z-index: 3;
  }
`;

const ResultContainer = styled.div`
  max-height: 362px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
`;

const EmptyPlaceholder = styled.div`
  color: #8e8e8e;
  font-size: 14px;
  padding: 15px;
  text-align: center;
`

function NavSearchResult(props) {

  const resultItems = props.resultData.map((item) =>
    <SearchResultItem
      key={item.userAccount}
      userAccount={item.userAccount}
      imageLink={item.imageLink}
      infoTitle={item.infoTitle}
      infoText={item.infoText}
      isVerified={item.isVerified}
    />
  );

  return (
    <div>
      <Rhombus />
      <ResultBox>
        <ResultContainer>
          {
            props.resultData.length > 0
              ?
              resultItems
              :
              <EmptyPlaceholder>查無結果。</EmptyPlaceholder>
          }
        </ResultContainer>
      </ResultBox>
    </div>
  );
}

export default NavSearchResult;