import { useEffect } from "react";
import Footer from "./Footer";
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
      <Header />
      <ForWho />
      <WhatWillYouLearn />
      <Program />
      <Quote />
      <Rates />
      <Footer />
    </div>
  );
};

export default LandingPage;
