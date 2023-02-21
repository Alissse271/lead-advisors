import { Container, StyledForm, StyledInput, StyledButton } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowRightIcon } from "../../assets";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="email"
          placeholder="Enter your Email and get notified"
          {...register("email", {
            required: "*email is required",
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              message: "Enter a valid email",
            },
            maxLength: {
              value: 30,
              message: "*max 30 characters",
            },
          })}
        />
      </StyledForm>
      <StyledButton type="submit">
        <ArrowRightIcon />
      </StyledButton>
    </Container>
  );
};
