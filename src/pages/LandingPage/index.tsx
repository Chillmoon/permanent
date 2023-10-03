import ForWho from "./ForWho";
import Header from "./Header";
import Program from "./Program";
import Quote from "./Quote";
import Rates from "./Rates";
import WhatWillYouLearn from "./WhatWillYouLearn";

const LandingPage = () => {
  return (
    <>
      <Header />
      <ForWho />
      <WhatWillYouLearn />
      <Program />
      <Quote />
      <Rates />
    </>
  );
};

export default LandingPage;
