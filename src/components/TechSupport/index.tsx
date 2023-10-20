import useStyles from "./styles";

const TechSupport = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <a href="https://t.me/KushnirEducationSupport_bot" target="_blank">
        <img src="../../assets/support.png" />
      </a>
    </div>
  );
};

export default TechSupport;
