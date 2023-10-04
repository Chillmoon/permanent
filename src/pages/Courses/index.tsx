import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import CustomButton from "../../components/CustomButton";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    name: "Курс EYELINER",
    id: "course1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "",
  },
  {
    name: "Скоро",
  },
];

const Courses = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.coursesPageMainBlock}>
        <Typography variant="h4" className={classes.blockTitle}>
          Курси
        </Typography>
        <div className={classes.cardWrapper}>
          {cardData.map((data, index) =>
            data.name === "Скоро" ? (
              <div className={classes.coursePlaceholder}>{data.name}</div>
            ) : (
              <Card key={index} className={classes.card}>
                <CardMedia component="img" alt={data.name} image={data.image} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className={classes.cardTitle}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.cardDescription}
                  >
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardButton}>
                  <CustomButton
                    children="Ознайомитись із програмою курсу"
                    handleClick={() => navigate(`/courses/${data.id}`)}
                  />
                </CardActions>
              </Card>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
