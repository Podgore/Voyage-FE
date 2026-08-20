import { TextField, type TextFieldProps } from "@mui/material";

export const Input = ({ fullWidth = true, ...props }: TextFieldProps) => {
  return <TextField fullWidth={fullWidth} {...props} />;
};
