import { ArrowRightIcon } from "../../assets";
import { StyledButton } from "./styles";
export const Button = (props) => {
  const { label, type, className } = props;
  return (
    <StyledButton href="https://www.google.by/" target="_blank" type={type} className={className}>
      {label}
      <ArrowRightIcon />
    </StyledButton>
  );
};
