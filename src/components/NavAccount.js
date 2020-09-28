import React from "react";
import styled from "styled-components";

const Root = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Container = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  padding-left: 24px;
  white-space: nowrap;
  @media (max-width: 500px) {
    padding-left: 0;
  }
`;

const ButtonContainer = styled.span`
  display: flex;
  margin-right: -1px;
`;

const ButtonWrapper = styled.a.attrs(props => ({
  href: props.href,
  tabIndex: "0",
}))`
  color: #0095f6;
  font-weight: 600;
  line-height: 28px;
  font-size: 14px;
  margin-left: 15px;

  :visited {
    color: #0095f6;
    font-weight: 600;
    line-height: 28px;
  }
`;

const LoginButton = styled.button.attrs(props => ({
  type: "button",
}))`

  border: 1px solid #0095f6;
  background-color: #0095f6;
  border-radius: 4px;
  color: #fff;
  position: relative;
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: auto;
`;


function NavAccount() {
  return (
    <Root>
      <Container>
        <ButtonContainer>
          <ButtonWrapper
            href="https://www.instagram.com/accounts/login/?next=%2Fmemopresso%2F&source=desktop_nav"
          >
            <LoginButton>
              登入
            </LoginButton>
          </ButtonWrapper>
          <ButtonWrapper
            href="https://www.instagram.com/accounts/emailsignup/"
          >
            註冊
          </ButtonWrapper>
        </ButtonContainer>
      </Container>
    </Root>
  );
}

export default NavAccount;