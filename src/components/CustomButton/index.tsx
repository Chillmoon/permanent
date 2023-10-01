import { FC } from "react";

import useStyles from "./styles";

type CustomButtonType = {
  children: string;
  handleClick?: () => void;
};

const CustomButton: FC<CustomButtonType> = ({ children, handleClick }) => {
  const classes = useStyles();
  return (
    <>
      <button className={classes.button} type="submit" onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default CustomButton;
