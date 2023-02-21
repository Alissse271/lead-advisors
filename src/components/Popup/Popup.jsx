import { Wrapper, StyledPopup, CancelButton, Title, Info, Container, CloseButton } from "./styles";

import { CancelIcon } from "../../assets";

export const Popup = (props) => {
  const { isOpen, toggleModal, message } = props;
  return (
    isOpen && (
      <Wrapper>
        <StyledPopup>
          <CancelButton type="button" onClick={toggleModal}>
            <CancelIcon />
          </CancelButton>
          <Container>
            <Title>{message.title}</Title>
            <Info>{message.subtitle}</Info>
            <CloseButton type="button" onClick={toggleModal} label="Close" />
          </Container>
        </StyledPopup>
      </Wrapper>
    )
  );
};
