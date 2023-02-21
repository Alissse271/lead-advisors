import styled from "styled-components";
import { DefaultButton } from "../DefaultButton/DefaultButton";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(22, 44, 78, 0.6);

  z-index: 3;
`;
const StyledPopup = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);

  width: 320px;

  background: #ffffff;

  border: 1px solid rgba(19, 89, 120, 0.07);
  border-radius: 2px;

  z-index: 4;

  @media (max-width: 768px) {
    width: 300px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 33px 20px 70px;
`;
const CancelButton = styled.button`
  justify-self: end;

  margin: 24px 16px 0 0;

  background-color: transparent;

  cursor: pointer;
`;
const CloseButton = styled(DefaultButton)`
  max-width: 200px;
  width: 100%;
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 104%;
  text-align: center;
  text-transform: uppercase;

  color: #162c4e;
`;
const Info = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  padding: 28px 0;

  color: rgba(0, 0, 0, 0.8);
`;

export { Wrapper, StyledPopup, CancelButton, Title, Info, Container, CloseButton };
