import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

type ButtonVariant =
  | "default"
  | "link"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | null
  | undefined;

export default function Model({
  open,
  setOpen,
  title,
  triggerComponent,
  buttonText,
  buttonProps,
  variant,
  withIcon = true,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  triggerComponent: React.ReactNode;
  buttonText: string | React.ReactNode;
  buttonProps?: string;
  withIcon?: boolean;
  variant?: ButtonVariant;
}) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button variant={variant} className={`${buttonProps} cursor-pointer`}>
            {withIcon && <Plus className="mr-2 h-4 w-4" />}
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          </DialogHeader>
          {triggerComponent}
        </DialogContent>
      </Dialog>
    </>
  );
}
