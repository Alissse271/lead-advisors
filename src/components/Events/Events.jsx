import { motion } from "framer-motion";
import { useState } from "react";
import {
  StyledEvents,
  StyledEvent,
  ButtonContainer,
  StyledButton,
  EventName,
  Number,
  ImageContainer,
  InfoContainer,
  StyledLink,
  StyledDate,
  EventTitle,
} from "./styles";

export const defaultFAQs = [
  {
    event: {
      number: "01",
      name: "Hawaiian party",
    },
    description: {
      name: "Hawaiian party",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
  {
    event: {
      number: "02",
      name: "Meeting",
    },
    description: {
      name: "Meeting",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
  {
    event: {
      number: "03",
      name: "Party",
    },
    description: {
      name: "Party",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
  {
    event: {
      number: "04",
      name: "Party on the beach",
    },
    description: {
      name: "Party on the beach",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
  {
    event: {
      number: "05",
      name: "Home Security",
    },
    description: {
      name: "Home Security",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
  {
    event: {
      number: "06",
      name: "Network Design & Implementation",
    },
    description: {
      name: "Network Design & Implementation",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
  {
    event: {
      number: "07",
      name: "System Design & Engineering",
    },
    description: {
      name: "System Design & Engineering",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
  {
    event: {
      number: "08",
      name: "Client Care Plans",
    },
    description: {
      name: "Client Care Plans",
      date: "13.02.2023",
      url: "https://www.google.by/",
    },
  },
];

const Disclosure = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledEvent onClick={() => setIsOpen((prev) => !prev)}>
      <ButtonContainer>
        <StyledButton aria-controls={props.title} aria-expanded={isOpen}>
          <Number>{props.title.number}</Number>
          <EventName>{props.title.name}</EventName>
        </StyledButton>
      </ButtonContainer>
      <motion.div
        id={props.title}
        initial={false}
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                display: "block",
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }
            : {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
                transitionEnd: {
                  display: "none",
                },
              }
        }
      >
        <ImageContainer>
          <InfoContainer>
            <EventTitle>{props.body.name}</EventTitle>
            <StyledDate>{props.body.date}</StyledDate>
            <StyledLink href={props.body.url} target="_blank">
              More information
            </StyledLink>
          </InfoContainer>
        </ImageContainer>
      </motion.div>
    </StyledEvent>
  );
};

export const Events = () => {
  return (
    <StyledEvents>
      {defaultFAQs.map((faq, i) => (
        <Disclosure key={i} title={faq.event} body={faq.description} />
      ))}
    </StyledEvents>
  );
};
