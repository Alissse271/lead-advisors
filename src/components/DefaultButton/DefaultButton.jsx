import { StyledButton } from "./styles";

export const DefaultButton = (props) => {
  const { label, type, onClick } = props;
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
