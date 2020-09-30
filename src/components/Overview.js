
import React from "react";
import styled from "styled-components";

const OverviewListBase = styled.ul`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
`;

const OverviewList = styled(OverviewListBase)`
  margin-bottom: 20px;

  @media (max-width: 735px) {
    display: none;
  }
`;

const OverviewListXS = styled(OverviewListBase)`
  justify-content: space-around;
  border-top: 1px solid #dbdbdb;
  padding: 12px 0;
  
  @media (min-width: 736px) {
    display: none;
  }
`;

const OverviewListItem = styled.li`
  font-size: 16px;
  margin-right: 40px;

  &:first-child {
    margin-left: 0;
  }
`;

const OverviewListItemXS = styled.li`
  font-size: 14px;
  text-align: center;
  width: 33.3%;
`;

const OverviewDetailLink = styled.a.attrs(props => ({
  href: props.href,
  tabIndex: "0"
}))`

  &:active {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
  &:hover  {
    color: inherit;
  }
`;

const OverviewDetailLinkXS = styled.a.attrs(props => ({
  href: props.href,
  tabIndex: "0"
}))`

  text-align: center;
  color: #8e8e8e;

  &:visited {
    text-align: center;
    color: #8e8e8e;
  }
`;

const OverviewDetailText = styled.span`
  color: #262626;
  font-weight: 600;
`;

const OverviewDetailTextXS = styled(OverviewDetailText)`
  display: block;
`;

export function Overview() {
  return (
    <OverviewList>
      <OverviewListItem>
        <OverviewDetailLink
          href="https://www.instagram.com/accounts/login/?next=%2Fhenry32144%2F&source=profile_posts"
        >
          <OverviewDetailText>
            999
              </OverviewDetailText>
          {" 貼文"}
        </OverviewDetailLink>
      </OverviewListItem>
      <OverviewListItem>
        <OverviewDetailLink
          href="https://www.instagram.com/accounts/login/?next=%2Fhenry32144%2Ffollowers%2F&source=followed_by_list"
        >
          <OverviewDetailText>
            9999
              </OverviewDetailText>
          {" 位追蹤者"}
        </OverviewDetailLink>
      </OverviewListItem>
      <OverviewListItem>
        <OverviewDetailLink
          href="https://www.instagram.com/accounts/login/?next=%2Fhenry32144%2Ffollowing%2F&source=follows_list"
        >
          <OverviewDetailText>
            999
              </OverviewDetailText>
          {" 追蹤中"}
        </OverviewDetailLink>
      </OverviewListItem>
    </OverviewList>
  );
}

export function OverviewXS() {
  return (
    <OverviewListXS>
      <OverviewListItemXS>
        <OverviewDetailLinkXS
          href="https://www.instagram.com/accounts/login/?next=%2Fhenry32144%2F&source=profile_posts"
        >
          <OverviewDetailTextXS>
            999
              </OverviewDetailTextXS>
          {" 貼文"}
        </OverviewDetailLinkXS>
      </OverviewListItemXS>
      <OverviewListItemXS>
        <OverviewDetailLinkXS
          href="https://www.instagram.com/accounts/login/?next=%2Fhenry32144%2Ffollowers%2F&source=followed_by_list"
        >
          <OverviewDetailTextXS>
            9999
              </OverviewDetailTextXS>
          {" 位追蹤者"}
        </OverviewDetailLinkXS>
      </OverviewListItemXS>
      <OverviewListItemXS>
        <OverviewDetailLinkXS
          href="https://www.instagram.com/accounts/login/?next=%2Fhenry32144%2Ffollowing%2F&source=follows_list"
        >
          <OverviewDetailTextXS>
            999
              </OverviewDetailTextXS>
          {" 追蹤中"}
        </OverviewDetailLinkXS>
      </OverviewListItemXS>
    </OverviewListXS>
  );
}