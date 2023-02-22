import styled from "styled-components";
import spotLeft from "../../assets/images/spot-left.png";
import spotRight from "../../assets/images/spot-right.png";
import spotLeftMedium from "../../assets/images/spot-left-medium.png";
import spotRightMedium from "../../assets/images/spot-right-medium.png";
import spotLeftSmall from "../../assets/images/spot-left-small.png";
import spotRightSmall from "../../assets/images/spot-right-small.png";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import { Timer } from "../Timer/Timer";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

const StyledMainPage = styled(motion.div)`
  height: 100vh;
  background: left top no-repeat url(${spotLeft}), right top no-repeat url(${spotRight}), #fff;

  @media (max-width: 1280px) {
    background: left top no-repeat url(${spotLeftMedium}),
      right top no-repeat url(${spotRightMedium}), #fff;
  }
  @media (max-width: 568px) {
    background: left top no-repeat url(${spotLeftSmall}), right top no-repeat url(${spotRightSmall}),
      #fff;
  }
`;
const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 110px;

  @media (max-width: 768px) {
    padding-top: 98px;
  }
  @media (max-width: 375px) {
    padding-top: 80px;
  }
`;
const MotionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled(Title)`
  padding-top: 92px;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
  @media (max-width: 375px) {
    padding-bottom: 28px;
  }
`;
const StyledSubtitle = styled(Subtitle)`
  max-width: 425px;

  @media (max-width: 1280px) {
    max-width: 286px;
  }
`;
const InfoText = styled(Subtitle)`
  margin-bottom: 12px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
const StyledTimer = styled(Timer)`
  margin: 32px 0 70px;

  @media (max-width: 768px) {
    margin: 40px 0;
  }
`;
const StyledButton = styled(Button)`
  max-width: 240px;
  margin-bottom: 156px;

  @media (max-width: 568px) {
    margin-bottom: 120px;
  }
`;

const EventsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 110px;

  @media (max-width: 1280px) {
    margin-top: 46px;
  }
  @media (max-width: 375px) {
    margin-top: 59px;
  }
`;

export {
  StyledMainPage,
  Container,
  StyledTitle,
  StyledSubtitle,
  Wrapper,
  EventsBlock,
  StyledTimer,
  InfoText,
  StyledButton,
  MotionContainer,
};
