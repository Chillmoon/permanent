import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { Link } from "react-scroll";
import Timer from "../../../components/Timer";

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.wrapper}>
      <img className={classes.stars} src="../../assets/stars.png" alt="Stars" />
      <img
        className={classes.cshmr}
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fcshmr.png?alt=media&token=14091bbf-e914-4678-bb32-79b9264b04c2"
        alt="cshmr"
      />
      <img
        className={classes.hairstrokes}
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2FHAIRSTROKES.png?alt=media&token=486eecc0-ad41-4518-9609-a75b0f338dcf"
        alt="hairstrokes"
      />
      <img
        className={classes.elipseHairstrokes}
        src="../../assets/EllipseHairstrokes.png"
        alt="Elipse"
      />
      <div className={classes.courseLabel}>HAIRSTROKES</div>
      <div className={classes.courseAuthor}>by victoria kushnir</div>
      <img
        className={classes.vikaHeader}
        alt="Viktoria"
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2FMask%20group.png?alt=media&token=f9bec365-34aa-4fda-b15c-a8cd76ad856e"
      />
      <Link
        to="programBlock"
        spy={true}
        smooth={true}
        duration={500}
        className={classes.button}
      >
        {t("Хочу на курс")}
      </Link>
      <div className={classes.timerDescription}>
        {t("До підвищення цін залишилось")}
      </div>
      <div className={classes.timer}>
        <Timer />
      </div>
    </div>
  );
};

export default Header;
