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
} from "./styles";
import { Separator, Title } from "../../components";
import { LogoIcon } from "../../assets";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <StyledMainPage>
      <Wrapper>
        <Container>
          <Link to="/">
            <LogoIcon />
          </Link>
          <StyledTitle label="Under Construction" />
          <StyledSubtitle label="We're making lots of improvements and will be back soon" />
          <StyledTimer />
          <InfoText label="Check our event page when you wait:" />
          <StyledButton type="button" label="Go to the event" />
        </Container>
        <Separator />
      </Wrapper>
      <EventsBlock>
        <Title label="All events" />
      </EventsBlock>
    </StyledMainPage>
  );
};
