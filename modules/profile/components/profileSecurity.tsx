"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import { ChangePasswordDialog } from "./changePasswordModel";

export default function ProfileSecurity() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Security</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Password</p>

            <p className="text-sm text-muted-foreground">
              Change your account password
            </p>
          </div>

          <Button variant="outline" onClick={() => setOpen(true)}>
            Change Password
          </Button>
        </div>
        <ChangePasswordDialog open={open} setOpen={setOpen} />
      </CardContent>
    </Card>
  );
}
