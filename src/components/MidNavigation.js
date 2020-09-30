import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faTv, faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { NAV_POST_ID, NAV_IGTV_ID, NAV_TAGGED_ID } from '../Constants.js'

const Root = styled.div`
  align-items: center;
  border-top: 1px solid #dbdbdb;
  color: #8e8e8e;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
`;

const NavLink = styled.a.attrs(props => ({
  href: props.href,
  tabIndex: "0",
}))`
  align-items: center;
  cursor: pointer;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  height: 52px;
  justify-content: center;
  text-transform: uppercase;

  @media (max-width: 735px) {
    align-items: stretch;
    cursor: pointer;
    display: flex;
    flex: 1 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    height: 44px;
  }
  @media (min-width: 736px) {
    &:not(:last-child) {
        margin-right: 60px;
    }
  }
  ${props => 
    props.active ?
      `
        align-items: center;
        color: #262626;

        &:visited {
          align-items: center;
          color: #262626;
        }
        @media (min-width: 736px) {
          border-top: 1px solid #262626;
          margin-top: -1px;
        }
      `
    :
      `
        align-items: center;
        color: #8e8e8e;

        &:visited {
          align-items: center;
          color: #8e8e8e;
        }
      `
  }
`

const LinkContentWrapper = styled.span`
  display: flex;
  align-items: center;

  @media (max-width: 735px) {
    display: none;
  }
`;

const IconWrapper = styled(FontAwesomeIcon)`
  height: 12px;
  width: 12px;
  font-size: 12px;
  color: ${props => props.active ? "rgb(38, 38, 38)" : "rgb(142, 142, 142)"};
`;

const LinkContentWrapperXS = styled.span`
  display: flex;
  align-items: center;

  @media (min-width: 736px) {
    display: none;
  }
`;

const IconWrapperXS = styled(FontAwesomeIcon)`
  height: 24px;
  width: 24px;
  font-size: 24px;
  color: ${props => props.active ? "rgb(0, 149, 246)" : "rgb(142, 142, 142)"};

  @media (min-width: 736px) {
    display: none;
  }
`;

const TextWrapper = styled.span`
  margin-left: 6px;
`;


function MidNavigation(props) {
  const [activeId, setActiveId] = React.useState(NAV_POST_ID);

  return (
    <Root>
      <NavLink
        active={activeId === NAV_POST_ID ? 1 : 0}
        onClick={() => {
          props.setProgressLoading();
          setActiveId(NAV_POST_ID);
        }}
      >
        <LinkContentWrapper>
          <IconWrapper
            icon={faTh}
            active={activeId === NAV_POST_ID ? 1 : 0}
          />
          <TextWrapper>
            貼文
          </TextWrapper>
        </LinkContentWrapper>
        {/* Show when screen size is smaller than 736px */}
        <LinkContentWrapperXS>
          <IconWrapperXS
            icon={faTh}
            active={activeId === NAV_POST_ID ? 1 : 0}
          />
        </LinkContentWrapperXS>
      </NavLink>
      <NavLink
        active={activeId === NAV_IGTV_ID ? 1 : 0}
        onClick={() => { 
          props.setProgressLoading();
          setActiveId(NAV_IGTV_ID);
        }}
      >
        <LinkContentWrapper>
          <IconWrapper
            icon={faTv}
            active={activeId === NAV_IGTV_ID ? 1 : 0}
          />
          <TextWrapper>
            IGTV
          </TextWrapper>
        </LinkContentWrapper>
        {/* Show when screen size is smaller than 736px */}
        <LinkContentWrapperXS>
          <IconWrapperXS
            icon={faTv}
            active={activeId === NAV_IGTV_ID ? 1 : 0}
          />
        </LinkContentWrapperXS>
      </NavLink>
      <NavLink
        active={activeId === NAV_TAGGED_ID ? 1 : 0}
        onClick={() => { 
          props.setProgressLoading();
          setActiveId(NAV_TAGGED_ID);
        }}
      >
        <LinkContentWrapper>
          <IconWrapper
            icon={faIdBadge}
            active={activeId === NAV_TAGGED_ID ? 1 : 0}
          />
          <TextWrapper>
            已標註
          </TextWrapper>
        </LinkContentWrapper>
        {/* Show when screen size is smaller than 736px */}
        <LinkContentWrapperXS>
          <IconWrapperXS
            icon={faIdBadge}
            active={activeId === NAV_TAGGED_ID ? 1 : 0}
          />
        </LinkContentWrapperXS>
      </NavLink>
    </Root>
  );
}

export default MidNavigation;