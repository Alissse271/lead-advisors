import { ArrowRightIcon } from "../../assets";
import { StyledButton } from "./styles";
export const Button = (props) => {
  const { label, type, onClick, className } = props;
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {label}
      <ArrowRightIcon />
    </StyledButton>
  );
};
