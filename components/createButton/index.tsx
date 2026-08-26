"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

type ButtonVariant =
  | "default"
  | "link"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | null
  | undefined;

interface ButtonProps {
  addButtonText: string | React.ReactNode;
  children: React.ReactNode;
  modelTitle: string;
  withIcon?: boolean;
  className?: string;
  variant?: ButtonVariant;
}

export default function CreateButton({
  addButtonText,
  children,
  modelTitle,
  className,
  withIcon = true,
  variant,
}: ButtonProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={`${className} cursor-pointer`}
        variant={variant}
      >
        {withIcon && <Plus className="mr-2 h-4 w-4" />}
        {addButtonText}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {modelTitle}
            </DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
