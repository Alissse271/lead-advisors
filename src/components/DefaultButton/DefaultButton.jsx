import { StyledButton } from "./styles";

export const DefaultButton = (props) => {
  const { label, type, onClick, className } = props;
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {label}
    </StyledButton>
  );
};
