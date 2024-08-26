import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "@fontsource/rozha-one";

interface CardComponentProps {
  title: string;
  date: string;
  time: string;
  place: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const EventCard: React.FC<CardComponentProps> = ({
  title,
  date,
  time,
  place,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 420,
        boxShadow: "8px 8px #ffbf0a", // Yellow shadow
        borderRadius: "20px", // Rounded corners
      }}
    >
      <CardMedia component="img" height="320" image={imageUrl} alt={title} />
      <CardContent>
        <Typography
          fontFamily="rozha-one"
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          fontFamily="rozha-one"
          gutterBottom
          variant="h6"
          component="div"
        >
          {date}, {time}
        </Typography>
        <Typography
          fontFamily="rozha-one"
          gutterBottom
          variant="h6"
          component="div"
        >
          {place}
        </Typography>
        <Typography
          fontFamily="rozha-one"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={onButtonClick}
          sx={{
            backgroundColor: "#18a59d",
            ":hover": { backgroundColor: "#147f77" },
          }} // Custom button color
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
