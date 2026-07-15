"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChangePasswordDialog } from "./changePasswordModel";
import CreateButton from "@/components/createButton";

export default function ProfileSecurity() {
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
          <CreateButton
            addButtonText="Change Password"
            modelTitle="Change Password"
            withIcon={false}
            variant="outline"
          >
            <ChangePasswordDialog />
          </CreateButton>
        </div>
      </CardContent>
    </Card>
  );
}
