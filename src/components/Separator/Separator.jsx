import { StyledSeparator, OtherEventsButton } from "./styles";
import { ArrowDownIcon } from "../../assets";
import { Form } from "../../components";

export const Separator = () => {
  return (
    <StyledSeparator>
      <Form />
      <OtherEventsButton type="button">
        Other Events
        <ArrowDownIcon />
      </OtherEventsButton>
    </StyledSeparator>
  );
};
