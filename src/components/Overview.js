
import React from "react";
import styled from "styled-components";

const OverviewList = styled.ul`
  margin-bottom: 20px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;

  @media (max-width: 735px) {
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

const OverviewDetailText = styled.span`
  color: rgba(var(--i1d,38,38,38),1);
  font-weight: 600;
`;

function Overview() {
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

export default Overview;