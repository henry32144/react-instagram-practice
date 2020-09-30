import React from "react";
import styled from "styled-components";
import NavSearchResult from "./NavSearchResult.js"
import { ClassicSpinner } from "react-spinners-kit";
import { TEMP_RESULT_DATA } from '../Constants'
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as SearchClearIcon } from "../assets/x-circle-fill.svg";


const Root = styled.div`
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  height: 28px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const SearchInput = styled.input.attrs(props => ({
  type: "text",
  autoCapitalize: "none",
  placeholder: props.placeholder || "",
}))`
  font-size: 14px;
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 10px 3px 26px;
  z-index: 2;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

// This overlay is for triggering input box blurring
const BlurOverLay = styled.div.attrs(props => ({
  role: "dialog",
}))`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const LeftSearchIconWrapper = styled.span`
  width: 10px;
  height: 10px;
  left: 11px;
  position: absolute;
  top: 5px;
  z-index: 2;
`;

const ClearButton = styled.div.attrs(props => ({
  "aria-disabled": false,
  role: "button",
  tabIndex: "0",
}))`
  position: absolute;
  right: 5px;
  top: 7px;
  z-index: 3;
`;

// This component will display when the input box is not focused.
const InputMaskContainer = styled.div.attrs(props => ({
  role: "button",
  tabIndex: "0",
}))`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  justify-content: center;
  border-radius: 3px;
  color: #8e8e8e;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  left: 0;
  padding: 7px;
  position: absolute;
  text-align: center;
  top: 0;
  z-index: 2;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

// This component will display when the input box is not focused.
const SpanContainer = styled.div`
  display: inline;
  left: -5px;
`;

const MiddleSearchIconWrapper = styled.span`
  display: inline-block;
  margin-right: 6px;
  vertical-align: baseline;
`;

const SpanSearchText = styled.span`
  display: inline-block;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  white-space: nowrap;
`;

function NavSearchBox() {

  const searchInput = React.useRef(null);
  const [timer, setTimer] = React.useState(null);
  const [searchInputText, setSearchInputText] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [isSearched, setSearched] = React.useState(false);
  const [isSearchBoxFocused, setSearchBoxFocused] = React.useState(false);

  const searchInputOnChange = (event) => {

    setSearchInputText(event.target.value);

    // Simulate searching behavior
    setLoading(true);
    if (timer !== null) {
      // Clear existing timer
      clearTimeout(timer);
    }
    setTimer(setTimeout(() => {
      setLoading(false);
      // Use ref to get "current" value.
      if (searchInput.current.value.length > 0) {
        setSearched(true);
      } else {
        setSearched(false);
      }
    }, 1500));
  };

  const searchInputOnFocus = () => {
    setSearchBoxFocused(true);
  };

  const clearButtonOnClick = () => {
    setSearchInputText("");
    setSearched(false);
    setSearchBoxFocused(false);
  };

  return (
    <Root>
      <SearchInput
        ref={searchInput}
        placeholder="搜尋"
        value={searchInputText}
        onFocus={searchInputOnFocus}
        onChange={searchInputOnChange}
      />
      {isSearchBoxFocused ?
        <span>
          <LeftSearchIconWrapper>
            <SearchIcon
              alt="logo"
              width="10px"
              height="10px"
              stroke="#c2c3c5"
            />
          </LeftSearchIconWrapper>
          <BlurOverLay
            onClick={() => {
              setSearchBoxFocused(false);
            }}
          />
          <ClearButton
            onClick={clearButtonOnClick}
          >
            {isLoading ?
              <ClassicSpinner size={14} color="#686769" loading={isLoading} />
              :
              <SearchClearIcon
                alt="logo"
                width="14px"
                height="14px"
                fill="#c7c7c7"
              />
            }
          </ClearButton>
          {isSearched &&
            <NavSearchResult
              resultData={TEMP_RESULT_DATA} // Can also pass empty array to check empty placeholder
            />
          }
        </span>
        :
        <InputMaskContainer
          onClick={() => {
            searchInput.current.focus();
          }}
        >
          <SpanContainer>
            <MiddleSearchIconWrapper>
              <SearchIcon
                alt="logo"
                width="10px"
                height="10px"
                stroke="#c2c3c5"
              />
            </MiddleSearchIconWrapper>
            <SpanSearchText>{searchInputText || "搜尋"}</SpanSearchText>
          </SpanContainer>
        </InputMaskContainer>
      }
    </Root>
  );
}

export default NavSearchBox;