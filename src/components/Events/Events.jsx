import { AnimatePresence, motion } from "framer-motion";
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

export const eventsCollection = [
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

const Event = (props) => {
  const { title, body, i, expanded, setExpanded } = props;
  const isOpen = i === expanded;

  return (
    <StyledEvent>
      <ButtonContainer initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
        <StyledButton aria-controls={title} aria-expanded={isOpen}>
          <Number>{title.number}</Number>
          <EventName>{title.name}</EventName>
        </StyledButton>
      </ButtonContainer>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={title}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ImageContainer>
              <InfoContainer>
                <EventTitle>{body.name}</EventTitle>
                <StyledDate>{body.date}</StyledDate>
                <StyledLink href={body.url} target="_blank">
                  More information
                </StyledLink>
              </InfoContainer>
            </ImageContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledEvent>
  );
};

export const Events = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <StyledEvents>
      {eventsCollection.map((eventItem, i) => (
        <Event
          i={eventItem.event.number}
          key={i}
          title={eventItem.event}
          body={eventItem.description}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </StyledEvents>
  );
};
