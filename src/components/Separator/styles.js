import styled from "styled-components";

const StyledSeparator = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 61px 0 72px;

  background: #162c4e;

  @media (max-width: 1024px) {
    flex-direction: column;

    padding: 40px 0;
  }
  @media (max-width: 375px) {
    padding: 30px 0;
  }
`;

const OtherEventsButton = styled.button`
  position: absolute;
  right: 111px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 160px;

  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  color: #fff;
  background-color: transparent;

  cursor: pointer;

  @media (max-width: 1024px) {
    position: relative;
    right: 0;

    width: 128px;

    margin-top: 15px;

    font-size: 16px;
  }
`;

export { StyledSeparator, OtherEventsButton };
