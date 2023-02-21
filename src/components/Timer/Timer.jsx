import { useEffect, useRef, useState } from "react";
import { StyledTimer, Item, Value, LabelContainer, Label, Separator } from "./styles";
import { useWindowSize } from "../../hooks";

export const Timer = (props) => {
  const { className } = props;

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDown = new Date("May 31, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const { width = 0 } = useWindowSize();

  return (
    <StyledTimer className={className}>
      <Item>
        <Value>{timerDays}</Value>
        <LabelContainer>
          <Label>{width <= 768 ? "DD" : "Days"}</Label>
        </LabelContainer>
      </Item>
      <Separator>:</Separator>
      <Item>
        <Value>{timerHours}</Value>
        <LabelContainer>
          <Label>{width <= 768 ? "HH" : "Hours"}</Label>
        </LabelContainer>
      </Item>
      <Separator>:</Separator>
      <Item>
        <Value>{timerMinutes}</Value>
        <LabelContainer>
          <Label>{width <= 768 ? "MM" : "Minutes"}</Label>
        </LabelContainer>
      </Item>
      <Separator>:</Separator>
      <Item>
        <Value>{timerSeconds}</Value>
        <LabelContainer>
          <Label>{width <= 768 ? "SS" : "Seconds"}</Label>
        </LabelContainer>
      </Item>
    </StyledTimer>
  );
};
