import styled from "styled-components";

const StyledButton = styled.a`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  grid-gap: 26px;

  padding: 16px 28px;

  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  color: #ffffff;
  background-color: #1d4169;

  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background-color: #335478;
  }
`;

export { StyledButton };
