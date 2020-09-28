import React from "react";
import styled from "styled-components";
import NavBrandIcon from "./NavBrandIcon.js";
import NavSearchBox from "./NavSearchBox.js";

const Nav = styled.nav`
  background-color: #fafafa;
  padding: 0;

  /* Flex order */
  order: 0;
`;

const NavContainer = styled.div`
  height: 54px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  transition: height .2s ease-in-out;
`;

const NavWidgets = styled.div`
  height: 54px;
  width: 100%;
  padding: 0 20px;
  
  /* Leave spaces in two sides */
  max-width: 975px;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: height .2s ease-in-out;
`;

const SearchBox = styled.div`
  background: blue;
  min-height: 36px;
`;

const Account = styled.div`
  background: red;
  min-height: 36px;
`;

function Navbar() {
  return (
    <Nav>
      <div>
        <NavContainer>
          <NavWidgets>
            <NavBrandIcon>
            </NavBrandIcon>
            <NavSearchBox>
            </NavSearchBox>
            <Account>
            </Account>
          </NavWidgets>
        </NavContainer>
      </div>
    </Nav>
  );
}

export default Navbar;