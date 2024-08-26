import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import EventCard from "../../Components/EventCard/EventCard";
import "./eventPage.css";
import EventPromoImg from "../../page_assets/EventPromo.jpg";
import "@fontsource/rozha-one";

const CardsPage: React.FC = () => {
  // Example data
  const cardData = [
    {
      title: "Literary Escape: Traveling Through Time and Space",
      date: "12.09.24",
      time: "18:00",
      place: "Student House",
      description:
        "Dive into the world of suspense and intrigue as we unravel the twists and turns of a classic mystery novel. Enjoy themed snacks and a lively discussion where everyone becomes a detective. Don’t forget to bring your best sleuthing skills!",
      imageUrl: EventPromoImg,
      buttonText: "Sign Up",
      onButtonClick: () => alert("Card 1 button clicked"),
    },
    {
      title: "Mystery Night: A Whodunit Adventure",
      date: "12.09.24",
      time: "18:00",
      place: "Student House",
      description:
        "Join us for a literary journey across genres and eras as we explore a novel that takes us to far-off places or different times. Our discussion will explore how setting shapes the story, and we’ll share travel-themed treats to enhance the experience.",
      imageUrl: "https://via.placeholder.com/420x220",
      buttonText: "Sign Up",
      onButtonClick: () => alert("Card 2 button clicked"),
    },
    {
      title: "Debate and Dialogue: Exploring Controversial Themes",
      date: "12.09.24",
      time: "18:00",
      place: "Student House",
      description:
        "Engage in a thought-provoking discussion on a book with controversial themes or moral dilemmas. This event is all about respectful debate and exchanging diverse perspectives. Come prepared to share your insights and listen to others with an open mind.",
      imageUrl: EventPromoImg,
      buttonText: "Sign Up",
      onButtonClick: () => alert("Card 3 button clicked"),
    },
    {
      title: "Author Spotlight: Behind the Scenes",
      date: "12.09.24",
      time: "18:00",
      place: "Student House",
      description:
        "Get to know the minds behind the books as we focus on a specific author’s works. We’ll dive deep into their writing style, themes, and influences. This event will include a brief biography, a discussion of their most impactful works, and interactive Q&A sessions.",
      imageUrl: EventPromoImg,
      buttonText: "Sign Up",
      onButtonClick: () => alert("Card 4 button clicked"),
    },
    {
      title: "Book to Screen: Adaptation Night",
      date: "12.09.24",
      time: "18:00",
      place: "Student House",
      description:
        "Compare and contrast a popular book with its film adaptation in this fun and interactive event. Watch clips from the movie, discuss how the adaptation differs from the book, and share your opinions on which version you prefer. Movie-themed snacks and drinks will be provided!",
      imageUrl: EventPromoImg,
      buttonText: "Sign Up",
      onButtonClick: () => alert("Card 4 button clicked"),
    },
    {
      title: "Book Read at Home",
      date: "12.09.24",
      time: "18:00",
      place: "Student House",
      description:
        "Compare and contrast a popular book with its film adaptation in this fun and interactive event. Watch clips from the movie, discuss how the adaptation differs from the book, and share your opinions on which version you prefer. Movie-themed snacks and drinks will be provided!",
      imageUrl: EventPromoImg,
      buttonText: "Sign Up",
      onButtonClick: () => alert("Card 4 button clicked"),
    },
    // Add more card data as needed
  ];

  return (
    <>
      <Typography
        fontFamily="rozha-one"
        variant="h4"
        align="center"
        sx={{ py: 5 }}
      >
        What’s Next: Your Guide to Upcoming Events
      </Typography>
      <Stack className="eventGrid">
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCard
                title={card.title}
                description={card.description}
                date={card.date}
                time={card.time}
                place={card.place}
                imageUrl={card.imageUrl}
                buttonText={card.buttonText}
                onButtonClick={card.onButtonClick}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default CardsPage;
