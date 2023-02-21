import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 104%;
  text-align: center;
  text-transform: uppercase;

  color: #162c4e;

  opacity: 0.39;

  @media (max-width: 1280px) {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export { StyledTitle };
