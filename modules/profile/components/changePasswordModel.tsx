import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IChangePassword {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function ChangePasswordDialog({ open, setOpen }: IChangePassword) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Change Password</Button>
      </DialogTrigger> */}

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Current Password</Label>

            <Input type="password" placeholder="Enter current password" />
          </div>

          <div className="space-y-2">
            <Label>New Password</Label>

            <Input type="password" placeholder="Enter new password" />
          </div>

          <div className="space-y-2">
            <Label>Confirm New Password</Label>

            <Input type="password" placeholder="Confirm new password" />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Cancel</Button>

            <Button>Update Password</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
