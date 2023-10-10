import { useEffect } from "react";
import FooterLanding from "./Footer";
import ForWho from "./ForWho";
import Header from "./Header";
import Program from "./Program";
import Quote from "./Quote";
import Rates from "./Rates";
import WhatWillYouLearn from "./WhatWillYouLearn";

import useStyles from "./styles";
import Footer from "../../components/Footer";

const LandingPage = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header />
      <ForWho />
      <WhatWillYouLearn />
      <Program />
      <Quote />
      <Rates />
      <FooterLanding />
      <Footer />
    </div>
  );
};

export default LandingPage;
