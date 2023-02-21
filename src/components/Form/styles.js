import styled from "styled-components";

const Container = styled.div`
  position: relative;

  max-width: 440px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 360px;
  }
  @media (max-width: 375px) {
    max-width: 280px;
  }
`;
const StyledForm = styled.form`
  width: auto;
`;
const StyledInput = styled.input`
  width: 100%;

  padding: 16px 54px 16px 27px;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  color: rgba(0, 0, 0, 0.6);
  background: #fff;

  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  border-radius: 40px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    padding: 10px 54px 10px 20px;

    font-size: 14px;
  }
`;
const StyledButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 43px;
  height: 43px;

  background: #df2224;

  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: #e23839;
  }

  @media (max-width: 768px) {
    top: 5px;
    right: 4px;

    width: 33px;
    height: 33px;
  }
`;

export { Container, StyledForm, StyledInput, StyledButton };
