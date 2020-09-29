// Add this library to enable outline by tabindex only when using keyboard.
import "focus-visible/dist/focus-visible.js";
import React from "react";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar.js";
import MainContent from "./components/MainContent.js";

const AppSection = styled.section.attrs(props => ({
  className: "app",
}))`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  return (
    <AppSection>
      <Navbar/>
      <MainContent/>
    </AppSection>
  );
}

export default App;
