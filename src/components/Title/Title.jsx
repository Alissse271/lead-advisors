import { StyledTitle } from "./styles";

export const Title = (props) => {
  const { label, className } = props;
  return <StyledTitle className={className}>{label}</StyledTitle>;
};
