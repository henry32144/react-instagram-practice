import styled from "styled-components";

const Button = styled.button.attrs(props => ({
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

export default Button;