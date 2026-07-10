"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface ButtonProps {
  addButtonText: string;
  children: React.ReactNode;
  modelTitle: string;
}

export default function CreateButton({
  addButtonText,
  children,
  modelTitle,
}: ButtonProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        {addButtonText}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{modelTitle}</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
