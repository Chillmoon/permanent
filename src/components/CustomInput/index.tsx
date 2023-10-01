import { FC } from "react";
import { TextField } from "@mui/material";

type CustomInputType = {
  label: string;
  id: string;
};

const CustomInput: FC<CustomInputType> = ({ label, id }) => {
  return (
    <>
      <TextField id={id} placeholder={label} variant="standard" />
    </>
  );
};

export default CustomInput;
