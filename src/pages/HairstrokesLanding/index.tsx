import { useEffect } from "react";

import Header from "./Header";
import ForWho from "./ForWho";
import Program from "./Program";
import Rates from "./Rates";
import Footer from "./Footer";

import useStyles from "./styles";

const HairstrokesLanding = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.wrapper}>
      <Header />
      <ForWho />
      <Program />
      <Rates />
      <Footer />
    </div>
  );
};

export default HairstrokesLanding;
