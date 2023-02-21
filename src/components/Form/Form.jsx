import { Container, StyledForm, StyledInput, StyledButton, ErrorMessage } from "./styles";
import { useForm } from "react-hook-form";
import { ArrowRightIcon } from "../../assets";
import emailjs from "@emailjs/browser";
import { useToggle } from "../../hooks";
import { useState, useEffect } from "react";
import { Popup } from "../../components";

export const Form = () => {
  const [message, setMessage] = useState({ title: "", subtitle: "" });
  const [isOpen, toggleModal] = useToggle(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const email = getValues("email");

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_5gdged6", "template_8nx642b", email, "4I-mny0NONb9Bun5R").then(
      () => {
        setMessage({
          title: "success!",
          subtitle: "You have successfully subscribed to the email newsletter",
        });
        toggleModal();
        reset();
      },
      () => {
        setMessage({ title: "error", subtitle: "Please, reload the page and try again." });
        toggleModal();
        reset();
      },
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <Container>
      <StyledForm onSubmit={(e) => handleSubmit(onSubmit(e))}>
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
            minLength: {
              value: 6,
              message: "*min 6 characters",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <StyledButton type="submit">
          <ArrowRightIcon />
        </StyledButton>
      </StyledForm>
      <Popup isOpen={isOpen} toggleModal={toggleModal} message={message} />
    </Container>
  );
};
