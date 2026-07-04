"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/modules/auth/loginForm";
import RegisterForm from "@/modules/auth/registerForm";

interface AuthBookingDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: () => void;
}

export function AuthBookingDialog({
  isOpen,
  onOpenChange,
  onAuthSuccess,
}: AuthBookingDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Continue your Booking
          </DialogTitle>
          <DialogDescription className="text-center">
            Please login or create an account to secure your seat.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 pt-4">
            <LoginForm onAuthSuccess={onAuthSuccess} />
          </TabsContent>

          <TabsContent value="register" className="space-y-4 pt-4">
            <RegisterForm onAuthSuccess={onAuthSuccess} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
