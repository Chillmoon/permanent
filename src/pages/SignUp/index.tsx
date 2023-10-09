import React from "react";
import SignUp from "../../components/Auth/SignUp";
import useStyles from "./styles";

const SignUpPage = () => {
  const classes = useStyles();
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
