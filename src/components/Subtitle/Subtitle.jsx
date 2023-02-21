import { StyledSubtitle } from "./styles";

export const Subtitle = (props) => {
  const { label, className } = props;
  return <StyledSubtitle className={className}>{label}</StyledSubtitle>;
};
