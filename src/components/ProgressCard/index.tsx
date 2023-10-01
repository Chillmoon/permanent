import { FC } from "react";
import { Grid } from "@mui/material";
import { CardActions, Typography } from "@mui/material";

import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

type ProgressCardType = {
  name: string;
  progress: string;
  image: string;
  id: string;
};

const ProgressCard: FC<ProgressCardType> = ({ name, progress, image, id }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Grid container className={classes.progressCard}>
      <Grid item xs={12} md={5} className={classes.progressCardImage}>
        <img height="100" src={image} alt={name} />
      </Grid>
      <Grid item xs={12} md={7} className={classes.progressCardContent}>
        <Typography
          gutterBottom
          variant="h5"
          className={classes.progressCardTitle}
        >
          {name}
        </Typography>
        {/* <div className={classes.progressBarText}>
          <Typography variant="body2" color="text.secondary">
            Прогрес навчання
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {progress}
          </Typography>
        </div>
        <LinearProgress
          variant="determinate"
          value={parseInt(progress)}
          className={classes.progressBar}
        /> */}
        <CardActions className={classes.progressButton}>
          <CustomButton
            children="Перейти до уроків"
            handleClick={() => navigate(`/home/${id}/block0-lesson1`)}
          />
        </CardActions>
      </Grid>
    </Grid>
  );
};

export default ProgressCard;
