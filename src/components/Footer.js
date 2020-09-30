import React from "react";
import styled from "styled-components";

const Root = styled.footer.attrs(props => ({
  role: "contentinfo",
}))`
  -webkit-box-ordinal-group: 6;
  order: 5;
  padding: 0 20px;
  background-color: #fafafa;
`;

const Container = styled.div`
  max-width: 1150px;
  font-size: 12px;
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
  width: 100%;
  text-align: center;

  @media (max-width: 875px) {
      padding: 10px 0;
      text-align: center;
  }
  @media (min-width: 876px) {
      padding: 38px 0;
  }
`

const Text = styled.span`
  color: #8e8e8e;
`

function Footer(props) {
  return (
    <Root>
      <Container>
        <Text>The assets used in this website are only for educational purpose. The Instagram brand icon belongs to Instagram</Text>
      </Container>
    </Root>
  );
}

export default Footer;