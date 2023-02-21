import styled from "styled-components";
import timerLabel from "../../assets/images/timer-image.svg";
import timerLabelSmall from "../../assets/images/timer-image-small.svg";

const StyledTimer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 588px;

  @media (max-width: 768px) {
    width: 358px;
  }
  @media (max-width: 375px) {
    width: 310px;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 125px;
`;
const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132px;
  height: 54px;

  margin-top: 8px;

  background: top no-repeat url(${timerLabel}), #fff;

  @media (max-width: 768px) {
    width: 64px;
    height: 40px;

    background: top no-repeat url(${timerLabelSmall}), #fff;
  }
`;
const Label = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Value = styled.span`
  font-weight: 600;
  font-size: 72px;
  line-height: 100%;

  color: #162c4e;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
const Separator = styled.span`
  font-weight: 600;
  font-size: 72px;
  line-height: 100%;

  color: #162c4e;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export { StyledTimer, Item, LabelContainer, Label, Value, Separator };
