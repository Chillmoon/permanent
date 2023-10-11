import { useEffect } from "react";
import FooterLanding from "./Footer";
import ForWho from "./ForWho";
import Header from "./Header";
import Program from "./Program";
import Quote from "./Quote";
import Rates from "./Rates";
import WhatWillYouLearn from "./WhatWillYouLearn";

import useStyles from "./styles";

const LandingPage = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <img
        className={classes.backgroundDetails}
        src="../../assets/loginBackground.png"
        alt="details"
      />
      <img
        className={classes.backgroundDetails1}
        src="../../assets/loginBackground.png"
        alt="details"
      />
      <img
        className={classes.backgroundDetails2}
        src="../../assets/backgroundDetails.png"
        alt="details"
      />
      <img
        className={classes.backgroundDetails3}
        src="../../assets/backgroundDetails.png"
        alt="details"
      />
      <img
        className={classes.backgroundDetails4}
        src="../../assets/backgroundDetails.png"
        alt="details"
      />
      <img
        className={classes.backgroundDetails5}
        src="../../assets/backgroundDetails.png"
        alt="details"
      />
      <img
        className={classes.loginBackgroundMobile}
        src="../../assets/loginBackgroundMobile.svg"
        alt="details"
      />
      <img
        className={classes.loginBackgroundMobile1}
        src="../../assets/loginBackgroundMobile.svg"
        alt="details"
      />
      <img
        className={classes.loginBackgroundMobile2}
        src="../../assets/loginBackground.png"
        alt="details"
      />
      <img
        className={classes.loginBackgroundMobile3}
        src="../../assets/backgroundDetails.png"
        alt="details"
      />
      <Header />
      <ForWho />
      <WhatWillYouLearn />
      <Program />
      <Quote />
      <Rates />
      <FooterLanding />
    </div>
  );
};

export default LandingPage;
