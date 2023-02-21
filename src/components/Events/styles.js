import styled from "styled-components";
import eventImage from "../../assets/images/accordion-image.png";

const StyledEvents = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 20px 40px;

  @media (max-width: 425px) {
    padding: 20px 20px;
  }
`;
const StyledEvent = styled.div`
  padding-top: 26px;

  background: #162c4e;

  border: 2px solid #fff;
`;
const ButtonContainer = styled.div`
  padding: 0 40px 26px 40px;

  @media (max-width: 425px) {
    padding: 0 20px 20px 20px;
  }
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;

  width: 100%;

  background-color: transparent;

  cursor: pointer;
`;
const Number = styled.span`
  padding-right: 32px;

  font-family: "SF Pro Display";
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.03em;

  color: #fff;

  @media (max-width: 425px) {
    padding-right: 16px;

    font-size: 24px;
  }
`;
const EventName = styled.span`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-align: left;

  color: #fff;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 460px;

  background: center / cover no-repeat url(${eventImage});

  @media (max-width: 425px) {
    height: 376px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px 40px 40px;

  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(20px);

  border-top: 4px solid #fff;
`;
const EventTitle = styled.span`
  padding-bottom: 8px;

  font-family: "SF Pro Display";
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;

  color: #fff;
`;
const StyledDate = styled.span`
  padding-bottom: 29px;

  font-family: "SF Pro Display";
  font-size: 16px;
  line-height: 150%;

  color: rgba(255, 255, 255, 0.8);
`;
const StyledLink = styled.a`
  display: block;

  width: 190px;

  padding: 12px 24px;

  font-family: "SF Pro Display";
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;

  color: #fff;

  border: 2px solid #fff;
  border-left: 6px solid #fff;
`;

export {
  StyledEvents,
  StyledEvent,
  ButtonContainer,
  StyledButton,
  EventName,
  Number,
  ImageContainer,
  InfoContainer,
  StyledLink,
  StyledDate,
  EventTitle,
};
