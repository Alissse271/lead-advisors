import {
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
} from "./styles";
import { Separator, Title, Events } from "../../components";
import { LogoIcon } from "../../assets";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const MainPage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledMainPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <Wrapper>
        <Container>
          <MotionContainer
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 1 }}
          >
            <Link to="/">
              <LogoIcon />
            </Link>
          </MotionContainer>
          <MotionContainer
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1.5 }}
          >
            <StyledTitle label="Under Construction" />
            <StyledSubtitle label="We're making lots of improvements and will be back soon" />
          </MotionContainer>
          <MotionContainer
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
          >
            <StyledTimer />
          </MotionContainer>
          <MotionContainer
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            <InfoText label="Check our event page when you wait:" />
            <StyledButton type="button" label="Go to the event" />
          </MotionContainer>
        </Container>
        <Separator onClick={handleClick} />
      </Wrapper>
      <EventsBlock ref={ref}>
        <Title label="All events" />
        <Events />
      </EventsBlock>
    </StyledMainPage>
  );
};
