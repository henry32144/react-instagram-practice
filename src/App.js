// Add this library to enable outline by tabindex only when using keyboard.
import "focus-visible/dist/focus-visible.js";
import React from "react";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar.js";
import MainContent from "./components/MainContent.js";
import TopProgressBar from "./components/TopProgressBar.js";
import { TOP_PROGRESSBAR_TIME } from "./Constants.js";

const AppSection = styled.section.attrs(props => ({
  className: "app",
}))`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [isProgressLoading, setProgressLoading] = React.useState(false);
  const [startLoadingTimerId, setStartLoadingTimerId] = React.useState(null);
  const [finishLoadingTimerId, setFinishLoadingTimerId] = React.useState(null);

  // Trigger top progress bar
  const triggerLoading = () => {
    if (startLoadingTimerId !== null || finishLoadingTimerId !== null) {
      // Clear timer
      clearTimeout(startLoadingTimerId);
      clearTimeout(finishLoadingTimerId);
    }
    setProgressLoading(false);

    // Start timer
    setStartLoadingTimerId(setTimeout(function() {
      setProgressLoading(true);
    }, 100));

    // Turn off timer when complete.
    setFinishLoadingTimerId(setTimeout(function() {
      setProgressLoading(false);
    }, TOP_PROGRESSBAR_TIME * 1000));
  }

  return (
    <AppSection>
      <TopProgressBar
        isLoading={isProgressLoading}
      />
      <Navbar
        setProgressLoading={triggerLoading}
      />
      <MainContent
        setProgressLoading={triggerLoading}
      />
    </AppSection>
  );
}

export default App;
