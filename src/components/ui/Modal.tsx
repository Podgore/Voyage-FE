import {
  Dialog,
  DialogContent,
  DialogTitle,
  type DialogProps,
} from "@mui/material";
import type { ReactNode } from "react";

interface ModalProps extends Omit<DialogProps, "children" | "onClose"> {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose, ...props }: ModalProps) => {
  return (
    <Dialog onClose={() => onClose()} {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
