import { StyledSeparator, OtherEventsButton } from "./styles";
import { ArrowDownIcon } from "../../assets";
import { Form } from "../../components";

export const Separator = (props) => {
  const { onClick } = props;
  return (
    <StyledSeparator>
      <Form />
      <OtherEventsButton type="button" onClick={onClick}>
        Other Events
        <ArrowDownIcon />
      </OtherEventsButton>
    </StyledSeparator>
  );
};
