import { Button as MuiButton, type ButtonProps } from "@mui/material";

export const Button = ({ variant = "contained", ...props }: ButtonProps) => {
  return <MuiButton variant={variant} {...props} />;
};
